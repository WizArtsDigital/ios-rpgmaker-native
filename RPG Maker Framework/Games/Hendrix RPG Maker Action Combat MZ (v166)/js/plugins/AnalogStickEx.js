/*:
@target MV MZ
@plugindesc Analog Stick Extension v1.1.4
@author Unagiootoro
@url https://raw.githubusercontent.com/unagiootoro/RPGMZ/master/AnalogStickEx.js

@help
This plugin adds support for analog sticks.
It allows you to retrieve the angle and strength of the left and right analog sticks
using plugin commands. Additionally, when used with a dot movement system,
it enables 360-degree movement.

【How to Use】
■ Retrieving Analog Stick State
By executing the "Get Stick State" plugin command,
you can obtain the stick's angle and strength.
The angle ranges from 0 to 359 degrees, and the strength ranges from 0 to 1000.

For RPG Maker MV, execute the following plugin command:
AnalogStickEx GetStickState left or right VariableID_for_angle VariableID_for_strength
(Example) To get the right stick's state, storing the angle in Variable ID 1 and strength in Variable ID 2:
AnalogStickEx GetStickState right 1 2

■ Retrieving Analog Stick State via Script
You can retrieve the stick's state with the following scripts:
const [rad, power] = Input.leftStick; // Get left stick state
or
const [rad, power] = Input.rightStick; // Get right stick state

Here, "rad" is the stick's direction in radians,
and "power" is the strength of the stick's tilt (0.0 to 1.0).

■ Using with Dot Movement System
It works out of the box once installed.
When used with a dot movement system and virtual stick, install them in this order:
- Dot Movement System
- Virtual Stick
- Analog Stick Extension

【License】
This plugin is available under the terms of the MIT License.

@param EnabledMove360SwitchId
@text 360-Degree Movement Enable Switch ID
@type switch
@default 0
@desc
Specifies the switch ID that determines whether the 360-degree movement function is enabled or disabled.

@param EnabledStickDashSwitchId
@text Stick Dash Enable Switch ID
@type switch
@default 0
@desc
Specifies the switch ID that determines whether the dash function based on stick strength is enabled or disabled.

@command GetStickState
@text Get Stick State
@desc
Retrieves the state of the analog stick.

@arg LeftOrRight
@text Left or Right
@type select
@option Left
@value left
@option Right
@value right
@default left
@desc
Sets whether to retrieve information from the left or right stick.

@arg StickDegVariableId
@text Stick Angle Variable
@type variable
@default 0
@desc
Specifies the variable to store the stick's angle. The angle range is 0 to 359.

@arg StickPowerVariableId
@text Stick Power Variable
@type variable
@default 0
@desc
Specifies the variable to store the stick's tilt power. The power range is 0 to 1000.
*/

const AnalogStickExPluginName = document.currentScript.src.match(/^.*\/(.+)\.js$/)[1];

(() => {

const params = PluginManager.parameters(AnalogStickExPluginName);
const PP = {
    EnabledMove360SwitchId: parseInt(params["EnabledMove360SwitchId"]),
    EnabledStickDashSwitchId: parseInt(params["EnabledStickDashSwitchId"]),
};

const getStickStatePC = (leftOrRight, stickDegVariableId, stickPowerVariableId) => {
    let rad, power;
    if (leftOrRight === "left") {
        [rad, power] = Input.leftStick;
    } else if (leftOrRight === "right") {
        [rad, power] = Input.rightStick;
    } else {
        throw new Error(`LeftOrRight(${leftOrRight}) is invalid.`);
    }
    let deg = AnalogStickUtils.rad2deg(rad);
    deg = AnalogStickUtils.degNormalization(Math.round(deg));
    const intPower = Math.round(power * 1000);
    if (stickDegVariableId > 0) $gameVariables.setValue(stickDegVariableId, deg);
    if (stickPowerVariableId > 0) $gameVariables.setValue(stickPowerVariableId, intPower);
};

if (Utils.RPGMAKER_NAME === "MZ") {
    PluginManager.registerCommand(AnalogStickExPluginName, "GetStickState", (args) => {
        const leftOrRight = args.LeftOrRight;
        const stickDegVariableId = parseInt(args.StickDegVariableId);
        const stickPowerVariableId = parseInt(args.StickPowerVariableId);
        getStickStatePC(leftOrRight, stickDegVariableId, stickPowerVariableId);
    });
}

const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command !== AnalogStickExPluginName) return;
    switch (args[0]) {
    case "GetStickState":
        const leftOrRight = args[1];
        const stickDegVariableId = parseInt(args[2]);
        const stickPowerVariableId = parseInt(args[3]);
        getStickStatePC(leftOrRight, stickDegVariableId, stickPowerVariableId);
        break;
    }
};


const _Input_clear = Input.clear;
Input.clear = function() {
    _Input_clear.call(this);
    this._analogStickState = {};
};

const _Input__updateGamepadState = Input._updateGamepadState;
Input._updateGamepadState = function(gamepad) {
    _Input__updateGamepadState.call(this, gamepad);
    const axes = gamepad.axes;
    if (axes.length >= 4) {
        this._analogStickState["stick_left_x"] = axes[0];
        this._analogStickState["stick_left_y"] = axes[1];
        this._analogStickState["stick_right_x"] = axes[2];
        this._analogStickState["stick_right_y"] = axes[3];
    }
};

Input._getStickState = function(stickType) {
    let x, y;
    if (stickType === "leftStick") {
        x = this._analogStickState["stick_left_x"];
        y = this._analogStickState["stick_left_y"];
    } else if (stickType === "rightStick") {
        x = this._analogStickState["stick_right_x"];
        y = this._analogStickState["stick_right_y"];
    } else {
        return [0, 0];
    }
    let rad = Math.atan2(y, x);
    if (Number.isNaN(rad)) return [0, 0];
    let power = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    power = power > 1 ? 1 : power;
    return [rad, power];
}

Object.defineProperty(Input, "leftStick", {
    get: function() {
        return this._getStickState("leftStick");
    },
    configurable: true
});

Object.defineProperty(Input, "rightStick", {
    get: function() {
        return this._getStickState("rightStick");
    },
    configurable: true
});

let STICK_MODE;
if (typeof VirtualStickPluginName !== "undefined") {
    const virtualStickPluginParams = PluginManager.parameters(VirtualStickPluginName)
    STICK_MODE = parseInt(virtualStickPluginParams["STICK_MODE"]);
}

class AnalogStickUtils {
    static degNormalization(deg) {
        if (deg >= 360) deg = deg % 360;
        if (deg < 0) {
            let rdeg = -deg;
            if (rdeg > 360) rdeg = rdeg % 360;
            deg = 360 - rdeg;
        }
        return deg;
    }

    static rad2deg(rad) {
        return (rad * 180 / Math.PI) + 90;
    }

    static deg2rad(deg) {
        return (deg - 90) * Math.PI / 180;
    }
}

class DotMoveAnalogStickUtils {
    static getAnalogStickInput() {
        const [rad, power] = Input.leftStick;
        const deg = AnalogStickUtils.rad2deg(rad);
        return [deg, power];
    }

    static isEnabledStickDash() {
        if (PP.EnabledStickDashSwitchId === 0) return true;
        return $gameSwitches.value(PP.EnabledStickDashSwitchId);
    }

    static isEnabledMove360() {
        if (PP.EnabledMove360SwitchId === 0) return true;
        return $gameSwitches.value(PP.EnabledMove360SwitchId);
    }
}


Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        let direction = this.getInputDirection();
        let [deg, power] = DotMoveAnalogStickUtils.getAnalogStickInput();

        let margin;
        if (DotMoveAnalogStickUtils.isEnabledStickDash()) {
            margin = 0.4;
        } else {
            margin = 0.7;
        }

        if (power >= margin) {
            $gameTemp.clearDestination();
            if (typeof DotMoveSystemPluginName !== "undefined") {
                if (DotMoveAnalogStickUtils.isEnabledStickDash()) {
                    if (power >= 0.9) {
                        this._dashing = true;
                    } else {
                        this._dashing = false;
                    }
                }

                if (DotMoveAnalogStickUtils.isEnabledMove360()) {
                    this.dotMoveByDeg(deg);
                } else {
                    direction = new DotMoveSystem.Degree(deg).toDirection8();
                    this.executeMove(direction);
                }
                return;
            }
        } else if (direction > 0) {
            $gameTemp.clearDestination();
        } else {
            if (typeof VirtualStickPluginName !== "undefined") {
                if (STICK_MODE === 1) {
                    direction = $virtualStickController.dir8();
                } else if (STICK_MODE === 2) {
                    deg = $virtualStickController.deg();
                    if (typeof DotMoveSystemPluginName !== "undefined") {
                        if (deg != null) this.dotMoveByDeg(deg);
                    } else {
                        throw new Error("DotMoveSystem.js is not installed.");
                    }
                } else {
                    direction = $virtualStickController.dir4();
                }
            } else {
                if ($gameTemp.isDestinationValid()) {
                    if (typeof DotMoveSystemPluginName !== "undefined") {
                        this.startTouchMove();
                        return;
                    } else {
                        const x = $gameTemp.destinationX();
                        const y = $gameTemp.destinationY();
                        direction = this.findDirectionTo(x, y);
                    }
                }
            }
        }
        if (direction > 0) {
            // Yami_8DirEx.jsとの併用に対応
            if (typeof Game_Player.prototype.processMoveByInput !== "undefined") {
                this.processMoveByInput(direction);
            } else {
                this.executeMove(direction);
            }   
        }
    }
};

window.AnalogStickUtils = AnalogStickUtils;
window.DotMoveAnalogStickUtils = DotMoveAnalogStickUtils;

})();
