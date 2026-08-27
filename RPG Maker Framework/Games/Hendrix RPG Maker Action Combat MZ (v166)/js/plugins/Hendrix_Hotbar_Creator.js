/*:
 * @target MZ
 * @plugindesc Create Hotbar on the screen using drag-n-drop
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io
 * 
 * @help
 * Version 2.0.7a
 * For support, please reach out:
 * Discord: https://discord.gg/YKPscqHV8b
 * Patreon: https://www.patreon.com/SangHendrix
 * ----------------------------------------------------------------------------
 * This RPG Maker MZ plugin helps you easily create a hotbar/quick-use slot UI
 * in realtime
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * ----------------------------------------------------------------------------
 * Playtest game > Click the bottom-right button on screen > Play around!
 * Create a Grid first, then select that grid and create slots. Use your mouse
 * to drag grid or slots anywhere on screen.
 * ----------------------------------------------------------------------------
 * 
 * ■■ SLOTS PARAMETER EXPLAINATION ■■
 * 
 * - Slot Name:         When equipping an item or a skill, it'll
 *                      display a list of slot and this name will appear on the list
 * - Button Text:       A text to display on the slot, can be a keyboard/gamepad button
 * - Special Behavior:  
 *   + Display Equipped Weapon: This slot will automatically display equipped weapon
 *   + Display Equipped Shield: Same but for shield
 *   + Item Slot Only: This slot will only avaiable for Items
 *   + Skill Slot Only: Same but for Skills
 * 
 *   + Example:  Slot Name: Slot 1
 *               Button Text: Q (keyboard), RB (gamepad) (optional)
 *               Special Behavior: none
 *            -> When gamepad is connected, Button Text shows RB
 * 
 * ■■ ITEM/WEAPON/SKILL/ARMOR NOTETAG ■■
 * 
 * <slot text: x, (optional: offset x, y)>   # Display a text on a slot that contains this item
 * <slot image: x>                           # Use custom image from folder pictures/slotUI
 * <slot cooldown: seconds, show number?>    # Set cooldown for this item
 * <slot disallow>                           # Disallow the item to be equipped to any slot
 * 
 * Example: <slot text: haha> or <slot text: haha, 0, -30>
 *          <slot image: Potion>
 *          <slot cooldown: 5> or <slot cooldown: 5, false> (not showing countdown)
 * 
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * ----------------------------------------------------------------------------
 * https://www.rpgmakeractioncombat.com/p/sang-hendrixs-rpg-maker-plugin-terms-of.html
 * ----------------------------------------------------------------------------
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---c
 * @text ■ GENERAL USES
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command HotbarInputStatus
 * @text Hotbar Input Status
 * @desc Allow or disable player hotbar input
  * 
 * @arg Status
 * @type boolean
 * @text Allow Hotbar Input
 * @desc Allow player to use hotbar
 * @default true
 * 
 * @command LockSlot
 * @text Lock/Unlock Slot
 * @desc Lock or unlock a slot to prevent equipping/unequipping items
 * 
 * @arg SlotName
 * @type string
 * @text Slot Name
 * @desc The name of the slot to lock/unlock
 * 
 * @arg Lock
 * @type boolean
 * @text Lock Slot
 * @desc True: Lock. False: Unlock
 * @default true
 * 
 * @command UseSelectedSlot
 * @text Gamepad  | Use Selected Slot
 * @desc Uses whatever item or skill is equipped in the currently selected slot
 * 
 * @command UseSlot
 * @text Keyboard | Use a Slot
 * @desc Uses whatever item or skill is equipped in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to use
 * 
 * @command aax
 * @text ---------------------------------
 * 
 * @command ---v
 * @text ■ ONLY FOR MANUAL USES
 * 
 * @command aaax
 * @text ---------------------------------
 * 
 * @command SetSkill
 * @text Push to Slot
 * @desc Put something to a slot. Can be an item, a weapon or a skill.
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to set
 * 
 * @arg skillId
 * @type skill
 * @text Skill
 * @desc The skill to set in this slot
 * @default 0
 * 
 * @arg itemId
 * @type item
 * @text Item
 * @desc The item to set in this slot
 * @default 0
 * 
 * @arg weaponId
 * @type weapon
 * @text Weapon
 * @desc The weapon to set in this slot
 * @default 0
 * 
 * @command RemoveFromSlot
 * @text Remove from Slot
 * @desc Removes whatever is in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to clear
 * 
 * @command PushNextStuff
 * @text Keyboard |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to push to
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the slot
 * 
 * @command GamepadPushNextStuff
 * @text Gamepad  |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the currently selected slot
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the selected slot
 * 
 * @command AllowItemUse
 * @text Allow/Disallow Things Use
 * @desc Control whether specific items, weapons, armors, or skills can be used in the hotbar
 * 
 * @arg TargetType
 * @type select
 * @option Item
 * @value item
 * @option Weapon
 * @value weapon
 * @option Armor
 * @value armor
 * @option Skill
 * @value skill
 * @text Target Type
 * @desc Type of item to allow/disallow
 * @default item
 * 
 * @arg TargetIdName
 * @type text
 * @text Target ID/Name
 * @desc ID or Name of the item, weapon, armor, or skill. Support expressions.
 * @default 1
 * 
 * @arg Status
 * @type boolean
 * @text Allow Use
 * @desc True: Allow use in hotbar. False: Disallow use in hotbar
 * @default true
 * 
 * @param showHotbarButton
 * @text Show Hotbar Button
 * @type boolean
 * @desc Show the button to open the Hotbar visual editor. Turns off automatically on deployment.
 * @default true
 * 
 * @param 5cccccxcxczxczxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wcc
 * @text ■ SLOT SETTINGS
 * 
 * @param 6cc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param GamepadCursorImage
 * @text Gamepad Cursor Image
 * @type file
 * @dir img/system
 * @desc Image to use as cursor when using gamepad
 * @default
 * 
 * @param EmptySlotIcon
 * @text Empty Slot Icon
 * @type icon
 * @desc The icon for unoccupied slot in window slot selection.
 * @default 16
 * 
 * @param GamepadUseSlotButton
 * @text Gamepad Use Slot Button
 * @type select
 * @option None
 * @value none
 * @option A
 * @value A
 * @option B
 * @value B
 * @option X
 * @value X
 * @option Y
 * @value Y
 * @option LB
 * @value LB
 * @option RB
 * @value RB
 * @option LT
 * @value LT
 * @option RT
 * @value RT
 * @option Back
 * @value Back
 * @option Start
 * @value Start
 * @desc Gamepad button to use the currently selected slot
 * @default A
 * 
 * @param TouchInput
 * @text Touch Input
 * @type boolean
 * @desc Allow players to touch/click slots to use item from that slot
 * @default false
 * 
 * @param AllowEquipNonUsable
 * @text Equip Non-usable Stuff
 * @type boolean
 * @desc Allow equipping skills/items that are not usable in menu to hotbar slots
 * @default true
 * 
 * @param PartyMembersHotbar
 * @text Party Members Hotbar
 * @parent SlotSettings
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Allow each party members to have unique hotbar slots for equipping skills.
 * @default true
 * 
 * @param 1z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ VISIBILITY SETTINGS
 * 
 * @param 2zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param VisibilitySwitch
 * @text UI Visibility Switch
 * @type switch
 * @desc If ON, UI will be visible. If OFF, UI will be hidden. 0 to always ON.
 * @default 0
 * 
 * @param hideWhenOnPlayer
 * @text Hide UI when On Player
 * @type boolean
 * @desc Fade UI when the player is behind it
 * @default true
 * 
 * @param HideUIduringMessage
 * @text Hide UI during Message
 * @type boolean
 * @desc Fade UI when a message window is open
 * @default true
 * 
 * @param ShowZeroQuantity
 * @text Show Zero Quantity
 * @type boolean
 * @desc Show quantity even when it's zero
 * @default false
 * 
 * @param UnequipEmptyItems
 * @text Unequip Empty Items
 * @type boolean
 * @desc Unequip items when their quantity reaches zero
 * @default true
 * 
 * @param 3z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wz
 * @text ■ TEXT ON SLOT
 * 
 * @param 4zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param ShowItemQuantity
 * @text Show Item Quantity
 * @type boolean
 * @desc Shows the quantity of items in slots
 * @default true
 * 
 * @param QuantityTextOffsetY
 * @text Quantity Text Height
 * @type number
 * @min -9999
 * @desc Vertical offset for the quantity text
 * @default 0
 * 
 * @param ShowManaCost
 * @text Show Mana Cost
 * @type boolean
 * @desc Show mana/MP cost if the slot is equipped with a skill
 * @default false
 * 
 * @param ManaCostHeight
 * @text Mana Cost Height
 * @type number
 * @min -9999
 * @desc Vertical offset for the mana cost text
 * @default 0
 * 
 * @param 3zxcxewr
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wz23412edsd
 * @text ■ BUTTON ICON REPLACEMENT
 * 
 * @param 4zzxcxbsdf
 * @text --------------------------
 * @default --------------------------
 * 
 * @param IconReplacements
 * @text Icon Replacements
 * @type struct<IconReplacement>[]
 * @desc Replace button text with icons
 * @default []
 * 
 * @param IconMaxSize
 * @text Icon Size
 * @type number
 * @desc Size for button icons
 * @default 24
 * 
 * @param 3zxcqwe123
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wzcv
 * @text ■ WINDOW SETTINGS
 * 
 * @param 4zzdd
 * @text --------------------------
 * @default --------------------------
 * 
 * @param WindowSelectionSize
 * @text Window Size
 * @type string
 * @desc Format: Width, number of commands show by default. This window will show when you assign item/skill to hotbar.
 * @default 400, 8
 * 
 * @param UseNowText
 * @text Use Now Text
 * @type string
 * @desc Text to display for the "Use Now" option in slot selection window
 * @default Use Now
 * 
 * @param EmptySlotText
 * @text Empty Slot Text
 * @type string
 * @desc Text to display for empty slots in slot selection window
 * @default Empty
 * 
 * @param 7xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wx
 * @text ■ FONT SETTINGS
 * 
 * @param 8xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param FontSettings
 * @text Font Settings
 * @type struct<FontSettings>
 * @desc Font settings for UI text
 */
/*~struct~FontSettings:
 * @param FontFile
 * @text Font File
 * @type string
 * @desc Custom font file (.ttf, .otf) from fonts folder. Leave blank to use default.
 * @default
 * 
 * @param FontSize
 * @text Font Size
 * @type number
 * @desc Font size for UI text. Leave at 0 to use default game setting.
 * @default
 * 
 * @param FontColor
 * @text Font Color
 * @type text
 * @desc Hex color code for text (e.g., #ffffff). Leave blank to use default.
 * @default 
 * 
 * @param OutlineColor
 * @text Font Outline Color
 * @type text
 * @desc Hex color code for text outline (e.g., #000000). Leave blank to use default.
 * @default 
 * 
 * @param TextShadow
 * @text Use Text Shadow
 * @type boolean
 * @desc Use text shadow instead of outline
 * @default false
*/

/*~struct~AdditionalTextDisplay:
 * @param TextToDisplay
 * @text Text to Display
 * @type text
 * @desc Expression to evaluate for text display. Example: $gameVariables.value(1) or 'hello'
 * @default
 * 
 * @param SlotName
 * @text Display at
 * @type text
 * @desc Display at a slot name
 * @default
 * 
 * @param Offset
 * @text Position Offset
 * @type text
 * @desc X,Y offset from default position (format: x, y)
 * @default 0, 0
 * 
 * @param Condition
 * @text Display Condition
 * @type text
 * @desc Condition that must be met to show text. Leave blank to always show.
 * @default
 */
/*~struct~IconReplacement:
 * @param ButtonName
 * @text Button Name
 * @type text
 * @desc The button name to replace with an icon (e.g., "Left Click", "Q", "RB")
 * @default Left Click
 * 
 * @param Icon
 * @text Icon Index
 * @type icon
 * @desc The icon to display instead of the button text
 * @default 1
 */

var Imported = Imported || {};
Imported.Hendrix_Hotbar_Creator = true;

(() => {
    const pluginName = "Hendrix_Hotbar_Creator";
    const parameters = PluginManager.parameters(pluginName);
    const visibilitySwitchId = Number(parameters.VisibilitySwitch || 0);
    const hideUIduringMessage = parameters.HideUIduringMessage === 'true';
    const showItemQuantity = parameters.ShowItemQuantity === 'true';
    const showZeroQuantity = parameters.ShowZeroQuantity === 'true';
    const unequipEmptyItems = parameters.UnequipEmptyItems === 'true';
    const quantityTextOffsetY = Number(parameters.QuantityTextOffsetY || 0);
    const showManaCost = parameters.ShowManaCost === 'true';
    const manaCostHeight = Number(parameters.ManaCostHeight || 0);
    const gamepadCursorImage = parameters.GamepadCursorImage;
    const emptySlotIcon = Number(parameters.EmptySlotIcon || 0);
    const windowSizeStr = parameters.WindowSelectionSize || '400, 500';
    const enableTouchInput = parameters.TouchInput === 'true';
    const useNowText = parameters.UseNowText || 'Use Now';
    const emptySlotText = parameters.EmptySlotText || 'Empty';
    const [windowWidth, visibleCommands] = windowSizeStr.split(',').map(s => Number(s.trim()));
    const iconReplacements = JSON.parse(parameters.IconReplacements || '[]').map(replacement => { const parsed = JSON.parse(replacement); return { buttonName: parsed.ButtonName.toLowerCase(), iconIndex: Number(parsed.Icon || 1) } });
    const iconMaxSize = Number(parameters.IconMaxSize || 24);
    const additionalTextDisplays = JSON.parse(parameters.AdditionalTextDisplays || '[]').map(display => { const parsed = JSON.parse(display); const offset = (parsed.Offset || '0, 0').split(',').map(v => Number(v.trim())); return { textToDisplay: parsed.TextToDisplay, slotName: parsed.SlotName, offsetX: offset[0], offsetY: offset[1], condition: parsed.Condition } });
    const fontSettings = parameters.FontSettings ? JSON.parse(parameters.FontSettings) : {};
    const fontSize = Number(fontSettings.FontSize || 0);
    const fontColor = fontSettings.FontColor || '';
    const outlineColor = fontSettings.OutlineColor || '';
    const useTextShadow = fontSettings.TextShadow === 'true';
    const allowEquipNonUsable = parameters.AllowEquipNonUsable === 'true';
    const partyMembersHotbar = parameters['PartyMembersHotbar'] !== 'false';
    const hideWhenOnPlayer = parameters['hideWhenOnPlayer'] !== 'false';
    const showHotbarButton = parameters['showHotbarButton'] !== 'false';
    const SNAP_THRESHOLD = 5;
    let isHotbarInitializing = false;
    let hotbarInputEnabled = true;
    const _lockedSlots = new Set();
    let gridSettings = [];
    function readUIPositions() {
        if (Utils.isNwjs()) {
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(process.mainModule.filename, '..', 'js', 'HotbarConfig.json');
            if (fs.existsSync(filePath)) {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                return data.positions || {};
            }
        }
        return {};
    }

    function saveHotbarPositions(positions) {
        if (Utils.isNwjs()) {
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(process.mainModule.filename, '..', 'js', 'HotbarConfig.json');

            let configData = { grids: [], positions: {} };
            if (fs.existsSync(filePath)) {
                configData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            }

            configData.positions = positions;

            fs.writeFileSync(filePath, JSON.stringify(configData, null, 2));
        }
    }

    function loadPositionsFromFile() {
        if (!Utils.isNwjs()) {
            fetch('js/HotbarConfig.json')
                .then(response => response.json())
                .then(data => {
                    window.$uiPositions = data.positions || {};
                    localStorage.setItem('HendrixHotbarPositions', JSON.stringify(data.positions || {}));
                    if (SceneManager._scene && SceneManager._scene._skillUI) {
                        SceneManager._scene._skillUI._slots.forEach((slot, name) => {
                            if (data.positions && data.positions[name]) {
                                slot.x = data.positions[name].x;
                                slot.y = data.positions[name].y;
                            }
                        });
                    }
                })
        }
    }

    window.$uiPositions = readUIPositions();
    if (!Utils.isNwjs()) {
        setTimeout(loadPositionsFromFile, 500);
    }

    function isItemDisallowed(item) {
        if (!item || !item.note) return false;
        return item.note.includes('<slot disallow>');
    }

    function canUseSlot(slotName) {
        if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return false;
        if (!hotbarInputEnabled) return false;
        const slot = SceneManager._scene._skillUI._slots.get(slotName);
        if (!slot) return false;
        if (slot._bounceDuration > 0) return false;
        const slotData = _slotData.get(slotName);
        if (!slotData) return false;
        if (isOnGlobalCooldown(slotData.type, slotData.id)) return false;
        return true;
    }

    const loadCustomFont = (fontFile) => {
        if (!fontFile) return null;

        const fontFace = fontFile.split('.')[0];
        const fontPath = `fonts/${fontFile}`;

        try {
            if (window.FontFace) {
                const customFont = new FontFace(fontFace, `url('${fontPath}')`);
                customFont.load().then(function (loadedFont) {
                    document.fonts.add(loadedFont);
                }).catch(error => {
                    console.error('Error loading font:', error);
                });
            } else {
                const style = document.createElement('style');
                style.textContent = `
                    @font-face {
                        font-family: '${fontFace}';
                        src: url('${fontPath}');
                    }
                `;
                document.head.appendChild(style);
            }
        } catch (e) {
            console.error('Error loading font:', e);
        }

        return fontFace;
    };

    const customFontFace = loadCustomFont(fontSettings.FontFile);

    const applyFontSettings = (bitmap) => {
        if (fontSize > 0) bitmap.fontSize = fontSize;
        if (Utils.RPGMAKER_NAME === "MV") {
            bitmap.fontFace = customFontFace || 'GameFont';
        } else {
            bitmap.fontFace = customFontFace || $gameSystem.mainFontFace();
        }
        bitmap.smooth = false;
        if (fontColor) {
            bitmap.textColor = fontColor;
        } else {
            if (Utils.RPGMAKER_NAME === "MV") {
                bitmap.textColor = '#ffffff';
            } else {
                bitmap.textColor = ColorManager.normalColor();
            }
        }
        if (useTextShadow) {
            bitmap.outlineWidth = 0;
            bitmap._drawTextShadow = true;
        } else {
            bitmap._drawTextShadow = false;
            bitmap.outlineWidth = 4;
            if (outlineColor) {
                bitmap.outlineColor = outlineColor;
            } else {
                bitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';
            }
        }
    };

    if (!Imported.Hendrix_Keyboard_Gamepad) {
        window.GamepadButtons = {
            'A': 0,
            'B': 1,
            'X': 2,
            'Y': 3,
            'LB': 4,
            'RB': 5,
            'Back': 8,
            'Start': 9,
            'LS-Press': 10,
            'RS-Press': 11,
            'Up': 12,
            'Down': 13,
            'Left': 14,
            'Right': 15,
            'LT': 6,
            'RT': 7
        };
    }

    const charToKeyCode = {
        'backspace': 8, 'tab': 9, 'enter': 13, 'shift': 16, 'ctrl': 17, 'alt': 18, 'pause': 19, 'capslock': 20,
        'esc': 27, 'space': 32, 'pageup': 33, 'pagedown': 34, 'end': 35, 'home': 36, 'left': 37, 'up': 38,
        'right': 39, 'down': 40, 'insert': 45, 'delete': 46, '0': 48, '1': 49, '2': 50, '3': 51, '4': 52,
        '5': 53, '6': 54, '7': 55, '8': 56, '9': 57, 'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70,
        'g': 71, 'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80, 'q': 81,
        'r': 82, 's': 83, 't': 84, 'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90, 'windows': 91,
        'numpad0': 96, 'numpad1': 97, 'numpad2': 98, 'numpad3': 99, 'numpad4': 100, 'numpad5': 101,
        'numpad6': 102, 'numpad7': 103, 'numpad8': 104, 'numpad9': 105, 'multiply': 106, 'add': 107,
        'subtract': 109, 'decimalpoint': 110, 'divide': 111, 'f1': 112, 'f2': 113, 'f3': 114, 'f4': 115,
        'f5': 116, 'f6': 117, 'f7': 118, 'f8': 119, 'f9': 120, 'f10': 121, 'f11': 122, 'f12': 123,
        'numlock': 144, 'scrolllock': 145, 'semicolon': 186, 'equals': 187, 'comma': 188, 'dash': 189,
        'period': 190, 'forwardslash': 191, 'graveaccent': 192, 'openbracket': 219, 'backslash': 220,
        'closebracket': 221, 'singlequote': 222
    };

    const initializeKeyMapping = function () {
        if (Imported.Hendrix_Keyboard_Gamepad) {
            return;
        }

        Input.gamepadMapper = {
            ...Input.gamepadMapper,
            12: 'up',
            13: 'down',
            14: 'left',
            15: 'right'
        };

        const mappedKeys = new Set();

        gridSettings.forEach(grid => {
            grid.Slots.forEach(slot => {
                const slotConfig = typeof slot === 'object' ? slot : JSON.parse(slot);
                if (slotConfig.Button) {
                    const [keyboardBtn, gamepadBtn] = slotConfig.Button.split(',').map(b => b.trim());

                    if (keyboardBtn) {
                        const keyboardBtnLower = keyboardBtn.toLowerCase();
                        if (charToKeyCode.hasOwnProperty(keyboardBtnLower)) {
                            const keyCode = charToKeyCode[keyboardBtnLower];
                            if (!mappedKeys.has(keyCode)) {
                                Input.keyMapper[keyCode] = keyboardBtnLower;
                                mappedKeys.add(keyCode);
                            }
                        }
                    }

                    if (gamepadBtn && GamepadButtons.hasOwnProperty(gamepadBtn)) {
                        const buttonCode = GamepadButtons[gamepadBtn];
                        Input.gamepadMapper[buttonCode] = keyboardBtn.toLowerCase();
                    }
                }
            });
        });
    };

    function extractCooldown(notes) {
        const match = /<slot cooldown:\s*(\d+)(?:\s*,\s*(true|false))?\s*>/i.exec(notes);
        if (!match) return { duration: 0, showTimer: true };

        const duration = parseInt(match[1]);
        const showTimer = match[2] ? match[2].toLowerCase() === 'true' : true;

        return { duration, showTimer };
    }

    function getGlobalCooldownKey(type, id) {
        return `${type}_${id}`;
    }

    function isOnGlobalCooldown(type, id) {
        const key = getGlobalCooldownKey(type, id);
        const remainingFrames = _globalCooldowns.get(key);
        return remainingFrames && remainingFrames > 0;
    }

    function setGlobalCooldown(type, id, duration, showTimer) {
        const key = getGlobalCooldownKey(type, id);
        const frames = Math.floor(duration * 60);
        _globalCooldowns.set(key, frames);

        ALL_AVAILABLE_SLOTS.forEach(slotData => {
            const slot = slotData.slot;
            const data = _slotData.get(slotData.name);
            if (data && data.type === type && data.id === id) {
                _cooldownStates.set(slotData.name, {
                    duration: duration,
                    total: duration,
                    showTimer: showTimer
                });
                SceneManager._scene._skillUI.startCooldown(slotData.name, duration, showTimer);
            }
        });
    }

    function updateGlobalCooldowns() {
        for (const [key, frames] of _globalCooldowns.entries()) {
            if (frames <= 0) {
                _globalCooldowns.delete(key);
            }
        }
    }

    //-----------------------------------------------------------------------------

    const _slotData = new Map();
    const _cooldownStates = new Map();
    const _globalCooldowns = new Map();
    const ALL_AVAILABLE_SLOTS = [];

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this._uiSlotData = {};
        this._slotPositions = {};
    };

    ConfigManager.slotPositions = {};

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        const config = _ConfigManager_makeData.call(this);
        config.slotPositions = this.slotPositions;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.call(this, config);
        this.slotPositions = config.slotPositions || {};
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Sprite_SkillSlot() {
        this.initialize(...arguments);
    }

    Sprite_SkillSlot.prototype = Object.create(Sprite.prototype);
    Sprite_SkillSlot.prototype.constructor = Sprite_SkillSlot;

    Sprite_SkillSlot.prototype.initialize = function (config) {
        Sprite.prototype.initialize.call(this);
        if (!config.Name || config.Name.trim() === '') {
            if (config.Button) {
                const buttonParts = config.Button.split(',').map(b => b.trim());
                if (buttonParts.length > 1) {
                    config.Name = `Slot ${buttonParts[0]}, Slot ${buttonParts[1]}`;
                } else {
                    config.Name = `Slot ${buttonParts[0]}`;
                }
            } else {
                if (Imported.Hendrix_Localization) {
                    config.Name = Hendrix_Localization(emptySlotText) + " " + Hendrix_Localization("Slot");
                } else {
                    config.Name = emptySlotText + " Slot";
                }
            }
        }

        const nameConfig = config.Name.split(',').map(n => n.trim());
        this._keyboardName = nameConfig[0];

        config.Name = this._keyboardName;
        this._config = config;
        this._skillId = 0;
        this._iconIndex = 0;
        this._itemQuantity = 0;
        this._skillManaCost = 0;
        this._lastItemId = null;
        this._lastItemType = null;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this._flashDuration = 0;
        this._flashColor = [0, 0, 0, 0];

        this._cooldownContainer = new PIXI.Container();
        this.addChild(this._cooldownContainer);

        this._cooldownDuration = 0;
        this._cooldownTotal = 0;
        this._inCooldown = false;
        this._bounceDuration = 0;

        this._touching = false;
        this._touchHandler = this.handleTouch.bind(this);
        this.on('touchstart', this._touchHandler);
        this.on('click', this._touchHandler);
        this.on('mouseover', this._touchHandler);

        const specialBehavior = this._config.SpecialBehavior || 'none';
        if (
            (specialBehavior === 'none' ||
                specialBehavior === 'item_only' ||
                specialBehavior === 'skill_only') &&
            !ALL_AVAILABLE_SLOTS.some(slot => slot.name === config.Name)
        ) {
            ALL_AVAILABLE_SLOTS.push({
                name: config.Name,
                slot: this,
                specialBehavior: specialBehavior
            });
        }

        this.createBackground();
        this.createIcon();
        this.createButtonText();
        if (showItemQuantity) {
            this.createQuantityText();
        }
        if (showManaCost) {
            this.createManaCostText();
        }

        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            this._lastItemId = slotData.id;
            this._lastItemType = slotData.type;
        }
        this.createAdditionalTexts();
        this.initializeDrag();
    };

    Sprite_SkillSlot.prototype.initializeDrag = function () {
        this._isDragging = false;
        this._dragOffsetX = 0;
        this._dragOffsetY = 0;
    };

    Sprite_SkillSlot.prototype.getZIndex = function () {
        if (!this.parent) return 0;
        return this.parent.children.indexOf(this);
    };

    Sprite_SkillSlot.prototype.updateDrag = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        if (currentSelectedGrid !== null) {
            const selGrid = gridSettings[currentSelectedGrid];
            if (selGrid && selGrid.Slots) {
                const slotName = this._config.Name.split(',')[0].trim();
                const belongsToSelected = selGrid.Slots.some(s => s.Name.split(',')[0].trim() === slotName);
                if (!belongsToSelected) return;
            }
        } else {
            return;
        }

        if (!this._isDragging && TouchInput.isTriggered()) {
            const touchX = TouchInput.x;
            const touchY = TouchInput.y;
            const slotRect = new Rectangle(
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height
            );

            if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {

                let topmostSlot = this;
                let highestZ = this.getZIndex();

                if (SceneManager._scene._skillUI) {
                    SceneManager._scene._skillUI._slots.forEach((otherSlot) => {
                        if (otherSlot === this) return;

                        const otherRect = new Rectangle(
                            otherSlot.x - otherSlot.width / 2,
                            otherSlot.y - otherSlot.height / 2,
                            otherSlot.width,
                            otherSlot.height
                        );

                        if (touchX >= otherRect.x && touchX <= otherRect.x + otherRect.width &&
                            touchY >= otherRect.y && touchY <= otherRect.y + otherRect.height) {

                            const otherZ = otherSlot.getZIndex();
                            if (otherZ > highestZ) {
                                topmostSlot = otherSlot;
                                highestZ = otherZ;
                            }
                        }
                    });
                }

                if (topmostSlot !== this) return;

                this._isDragging = true;
                this._dragOffsetX = this.x - touchX;
                this._dragOffsetY = this.y - touchY;
            }
        }

        if (this._isDragging) {
            if (TouchInput.isPressed()) {
                let newX = TouchInput.x + this._dragOffsetX;
                let newY = TouchInput.y + this._dragOffsetY;

                const snapResult = calculateSnapPosition(this, newX, newY);
                newX = snapResult.x;
                newY = snapResult.y;

                this.x = Math.max(this.width / 2, Math.min(Graphics.width - this.width / 2, newX));
                this.y = Math.max(this.height / 2, Math.min(Graphics.height - this.height / 2, newY));
            } else {
                this._isDragging = false;
                SnapIndicatorManager.hideAll();

                if (!window.$uiPositions) window.$uiPositions = {};
                window.$uiPositions[this._config.Name] = {
                    x: this.x,
                    y: this.y
                };
            }
        }
    };

    Scene_Map.prototype.resetSlotPositions = function () {
        if (!this._skillUI) return;

        gridSettings.forEach(grid => {
            const rows = (grid.RowColumn || '1, 1').toString().split(',').map(v => Number(v.trim()));
            const cols = rows.length > 1 ? rows[1] : rows[0];
            const padding = Number(grid.Padding) || 4;
            const defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            const gridX = defaultPosition[0] || 0;
            const gridY = defaultPosition[1] || 0;

            if (this._skillUI._gridBackgrounds) {
                const gridBg = this._skillUI._gridBackgrounds.find(bg => bg._grid === grid);
                if (gridBg) {
                    gridBg.x = gridX;
                    gridBg.y = gridY;
                }
            }

            const firstSlot = this._skillUI._slots.get(grid.Slots[0].Name);
            if (!firstSlot) return;

            const width = firstSlot.width;
            const height = firstSlot.height;
            const gridWidth = (cols - 1) * (width + padding) + width;
            const gridHeight = (rows[0] - 1) * (height + padding) + height;
            const centerX = gridX - (gridWidth / 2) + (width / 2);
            const centerY = gridY - (gridHeight / 2) + (height / 2);

            grid.Slots.forEach((slotConfig, i) => {
                const slot = this._skillUI._slots.get(slotConfig.Name);
                if (slot) {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * width) + (col * padding);
                    slot.y = centerY + (row * height) + (row * padding);
                }
            });
        });

        window.$uiPositions = {};
        saveHotbarPositions({});
    };

    Sprite_SkillSlot.prototype.handleTouch = function () {
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            const ui = SceneManager._scene._skillUI;

            for (let i = 0; i < ui._gamepadGrids.length; i++) {
                const grid = ui._gamepadGrids[i];
                const slotIndex = grid.slots.findIndex(slot => slot.Name === this._config.Name);

                if (slotIndex !== -1) {
                    ui._gamepadCursor._currentGridIndex = i;
                    ui._gamepadCursor._currentSlotIndex = slotIndex;
                    ui.updateCursorTarget();
                    break;
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.useSlotContents = function () {
        if (SceneManager._scene._isDragMode) return;
        if ($gameMessage.isBusy() || $gameMap.isEventRunning()) return;
        if (!hotbarInputEnabled) return;
        if (this._bounceDuration > 0) return;

        const slotData = _slotData.get(this._config.Name);
        if (!slotData) return;

        if (isItemDisallowedByCommand(slotData.type, slotData.id)) {
            return;
        }

        if (isOnGlobalCooldown(slotData.type, slotData.id)) {
            SoundManager.playBuzzer();
            return;
        }

        const actor = $gameParty.leader();
        let success = false;
        let cooldownData = { duration: 0, showTimer: true };

        switch (slotData.type) {
            case 'skill':
                const skill = $dataSkills[slotData.id];
                if (skill) {
                    const mpCost = actor.skillMpCost(skill);
                    if (actor.mp >= mpCost && actor.canUse(skill)) {
                        actor.gainMp(-mpCost);

                        if (skill.scope === 11) {
                            const action = new Game_Action(actor);
                            action.setSkill(slotData.id);
                            action.setTarget(actor.index());
                            action.apply(actor);
                        }

                        if (skill.effects) {
                            const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        cooldownData = extractCooldown(skill.note);
                        success = true;
                    } else {
                    }
                }
                break;

            case 'item':
                const item = $dataItems[slotData.id];
                if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                    if (item.effects) {
                        const commonEventEffect = item.effects.find(effect => effect.code === 44);
                        if (commonEventEffect && $gameMap._interpreter) {
                            $gameMap._interpreter.clear();
                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                        }
                    }
                    actor.useItem(item);

                    const action = new Game_Action(actor);
                    action.setItemObject(item);
                    action.setTarget(actor.index());
                    action.apply(actor);

                    cooldownData = extractCooldown(item.note);
                    success = true;

                    if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                        this.setSkill(0, 0);
                        _slotData.delete(this._config.Name);
                        saveToSystem();
                    }
                } else {
                }
                break;

            case 'weapon':
                const weapon = $dataWeapons[slotData.id];
                if (weapon) {
                    cooldownData = extractCooldown(weapon.note);
                    success = true;
                }
                break;

            case 'armor':
                const armor = $dataArmors[slotData.id];
                if (armor) {
                    cooldownData = extractCooldown(armor.note);
                    success = true;
                }
                break;
        }

        if (success) {
            $gameParty.members().forEach(member => member.refresh());
            SceneManager._scene._skillUI.flashSlot(this._config.Name);

            if (cooldownData.duration > 0) {
                setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
            }
        }
    };

    Sprite_SkillSlot.prototype.isPointInside = function (x, y) {
        const slotRect = new Rectangle(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );

        return x >= slotRect.x && x <= slotRect.x + slotRect.width &&
            y >= slotRect.y && y <= slotRect.y + slotRect.height;
    };

    Spriteset_SkillUI.prototype.destroy = function () {
        Sprite.prototype.destroy.call(this);

        this._slots.forEach(slot => {
            slot.off('touchstart', slot._touchHandler);
            slot.off('click', slot._touchHandler);
            slot.off('mouseover', slot._touchHandler);
        });
    };

    Sprite_SkillSlot.prototype.createQuantityText = function () {
        this._quantitySprite = new Sprite();
        this._quantitySprite.bitmap = new Bitmap(96, 32);
        this._quantitySprite.anchor.x = 0.5;
        this._quantitySprite.y = 1;
        this.addChild(this._quantitySprite);

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionQuantityText());
        } else {
            this.positionQuantityText();
        }
    };

    Sprite_SkillSlot.prototype.positionQuantityText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._quantitySprite.y = -bitmap.height / 2 + quantityTextOffsetY;
        } else {
            this._quantitySprite.y += -48 + quantityTextOffsetY;
        }
    };

    Sprite_SkillSlot.prototype.refreshQuantity = function () {
        if (!showItemQuantity) return;

        const data = _slotData.get(this._config.Name);
        if (!data) {
            if (this._quantitySprite) {
                this._quantitySprite.bitmap.clear();
            }
            return;
        }

        let quantity = 0;
        if (data.type === 'item') {
            const item = $dataItems[data.id];
            if (item) {
                quantity = $gameParty.numItems(item);
            }
        }

        if (this._itemQuantity !== quantity) {
            this._itemQuantity = quantity;
            this._quantitySprite.bitmap.clear();
            if (quantity > 0 || showZeroQuantity) {
                applyFontSettings(this._quantitySprite.bitmap);
                this._quantitySprite.bitmap.drawText(quantity.toString(), 0, 0, 96, 32, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.createManaCostText = function () {
        this._manaCostSprite = new Sprite();
        this._manaCostSprite.bitmap = new Bitmap(96, 32);
        this._manaCostSprite.anchor.x = 0.5;
        this._manaCostSprite.y = 1;
        this.addChild(this._manaCostSprite);

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionManaCostText());
        } else {
            this.positionManaCostText();
        }
    };

    Sprite_SkillSlot.prototype.positionManaCostText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._manaCostSprite.y = -bitmap.height / 2 + manaCostHeight;
        } else {
            this._manaCostSprite.y += -48 + manaCostHeight;
        }
    };

    Sprite_SkillSlot.prototype.refreshManaCost = function () {
        if (!showManaCost) return;

        const data = _slotData.get(this._config.Name);
        if (!data) {
            if (this._manaCostSprite) {
                this._manaCostSprite.bitmap.clear();
            }
            return;
        }

        let manaCost = 0;
        if (data.type === 'skill') {
            const skill = $dataSkills[data.id];
            if (skill) {
                manaCost = skill.mpCost;
            }
        }

        if (this._skillManaCost !== manaCost) {
            this._skillManaCost = manaCost;
            this._manaCostSprite.bitmap.clear();
            if (manaCost > 0) {
                applyFontSettings(this._manaCostSprite.bitmap);
                this._manaCostSprite.bitmap.drawText(manaCost.toString(), 0, 0, 96, 32, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.update = function () {
        this.refreshQuantity();
        this.refreshManaCost();
        this.updateAdditionalTexts();
        this.updateFlash();
        this.updateCooldown();
        this.updateDrag();
    };

    Sprite_SkillSlot.prototype.createButtonText = function () {
        this._buttonSprite = new Sprite();
        this._buttonSprite.bitmap = new Bitmap(128, 32);
        this._buttonSprite.anchor.x = 0.5;
        this._buttonSprite.anchor.y = 0.5;
        this.addChild(this._buttonSprite);
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionButtonText());
        } else {
            this.positionButtonText();
        }
        this.refreshButtonText();
    };

    Sprite_SkillSlot.prototype.positionButtonText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._buttonSprite.y = bitmap.height / 2;
        }
        const offsetY = Number(this._config.TextOffsetY || 0);
        this._buttonSprite.y += offsetY;
    };

    Sprite_SkillSlot.prototype.refreshButtonText = function () {
        if (this._config.Button) {
            const buttons = this._config.Button.split(',').map(b => b.trim());
            const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

            let buttonText = '';

            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = this._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();

                if (isGamepadMode) {
                    const keyboardButtonText = buttons[0].toLowerCase();

                    const hasGamepadButton = buttons.length > 1 && buttons[1] && buttons[1].trim() !== '';

                    if (!hasGamepadButton) {
                        if (typeof detectGamepadType === 'function') {
                            detectGamepadType();
                        }

                        if (window.HendrixGamepad && window.HendrixGamepad.getGamepadButtonForAction) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(keyboardButtonText);
                        }

                        if (!buttonText) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(actionName);
                        }
                    } else {
                        if (window.HendrixGamepad && window.HendrixGamepad.getGamepadButtonForAction) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(keyboardButtonText);
                        }

                        if (!buttonText) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(actionName);
                        }

                        if (!buttonText) buttonText = buttons[1];
                    }
                } else {
                    const originalButtonText = buttons[0].toLowerCase();

                    if (window.HendrixGamepad && window.HendrixGamepad.getKeyboardKeyForAction) {
                        buttonText = window.HendrixGamepad.getKeyboardKeyForAction(originalButtonText);
                    }

                    if (!buttonText) {
                        buttonText = window.HendrixGamepad.getKeyboardKeyForAction(actionName);
                    }

                    if (!buttonText) buttonText = buttons[0];
                }
            } else {
                buttonText = isGamepadMode ?
                    (buttons.length > 1 ? buttons[1] : '') :
                    buttons[0];

                if (isGamepadMode && buttons.length > 1) {
                    const gamepadButton = buttons[1];
                    if (GamepadButtons[gamepadButton]) {
                        const buttonCode = GamepadButtons[gamepadButton];
                        Input.gamepadMapper[buttonCode] = buttons[0].toLowerCase();
                    }
                } else {
                    const keyboardButton = buttons[0].toLowerCase();
                    if (charToKeyCode[keyboardButton]) {
                        const keyCode = charToKeyCode[keyboardButton];
                        Input.keyMapper[keyCode] = keyboardButton;
                    }
                }
            }

            const cacheKey = buttonText + '_' + !!isGamepadMode;
            if (this._lastButtonTextCache === cacheKey) return;
            this._lastButtonTextCache = cacheKey;

            const replacement = iconReplacements.find(r =>
                r.buttonName === buttonText.toLowerCase()
            );

            if (replacement) {
                this._buttonSprite.bitmap.clear();

                if (!this._buttonIconSprite) {
                    this._buttonIconSprite = new Sprite();
                    this._buttonIconSprite.bitmap = ImageManager.loadSystem('IconSet');
                    this._buttonIconSprite.anchor.x = 0.5;
                    this._buttonIconSprite.anchor.y = 0.5;
                    this._buttonIconSprite.bitmap.smooth = false;
                    this.addChild(this._buttonIconSprite);

                    if (this._config.BackgroundImage) {
                        const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
                        bitmap.addLoadListener(() => {
                            this._buttonIconSprite.y = bitmap.height / 2;
                            const offsetY = Number(this._config.TextOffsetY || 0);
                            this._buttonIconSprite.y += offsetY;
                        });
                    } else {
                        const offsetY = Number(this._config.TextOffsetY || 0);
                        this._buttonIconSprite.y += offsetY;
                    }
                }

                const iconIndex = replacement.iconIndex;
                const pw = ImageManager.iconWidth;
                const ph = ImageManager.iconHeight;
                const sx = (iconIndex % 16) * pw;
                const sy = Math.floor(iconIndex / 16) * ph;
                this._buttonIconSprite.setFrame(sx, sy, pw, ph);
                this._buttonIconSprite.visible = true;

                const scale = Math.min(iconMaxSize / pw, iconMaxSize / ph);
                this._buttonIconSprite.scale.x = scale;
                this._buttonIconSprite.scale.y = scale;
            } else {
                if (this._buttonIconSprite) {
                    this._buttonIconSprite.visible = false;
                }

                buttonText = buttonText.toUpperCase();
                this._buttonSprite.bitmap.clear();
                applyFontSettings(this._buttonSprite.bitmap);
                this._buttonSprite.bitmap.drawText(buttonText, 0, 0, 128, 32, 'center');
            }
        }
    };

    const extractSlotTextTags = (notesString) => {
        const results = [];
        const regex = /<slot text:\s*(.+?)(?:\s*,\s*(-?\d+)\s*,\s*(-?\d+))?\s*>/g;
        let match;

        while (match = regex.exec(notesString)) {
            results.push({
                text: match[1],
                offsetX: Number(match[2] || 0),
                offsetY: Number(match[3] || 0)
            });
        }

        return results;
    };

    Sprite_SkillSlot.prototype.createAdditionalTexts = function () {
        if (this._additionalTextSprites) {
            for (const sprite of this._additionalTextSprites.values()) {
                if (sprite.parent) {
                    sprite.parent.removeChild(sprite);
                }
            }
        }
        this._additionalTextSprites = new Map();
        let allDisplays = [];

        const parameterDisplays = additionalTextDisplays.filter(display => {
            if (display.slotName === this._config.Name) {
                return true;
            }

            const slotData = _slotData.get(this._config.Name);
            if (!slotData) return false;

            const slotNameLower = display.slotName.toLowerCase();

            if (slotData.type === 'weapon') {
                const weapon = $dataWeapons[slotData.id];
                if (!weapon) return false;

                if (slotNameLower.startsWith('weapon type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const weaponTypeName = $dataSystem.weaponTypes[weapon.wtypeId].toLowerCase();
                    return weaponTypeName === targetType;
                }

                if (slotNameLower.startsWith('weapon name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return weapon.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('weapon id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return weapon.id === targetId;
                }
            }

            if (slotData.type === 'armor') {
                const armor = $dataArmors[slotData.id];
                if (!armor) return false;

                if (slotNameLower.startsWith('armor type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const armorTypeName = $dataSystem.armorTypes[armor.atypeId].toLowerCase();
                    return armorTypeName === targetType;
                }

                if (slotNameLower.startsWith('equipment type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const equipTypeName = $dataSystem.equipTypes[armor.etypeId].toLowerCase();
                    return equipTypeName === targetType;
                }

                if (slotNameLower.startsWith('armor name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return armor.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('armor id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return armor.id === targetId;
                }
            }

            if (slotData.type === 'skill') {
                const skill = $dataSkills[slotData.id];
                if (!skill) return false;

                if (slotNameLower.startsWith('skill name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return skill.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('skill id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return skill.id === targetId;
                }

                if (slotNameLower.startsWith('skill type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const skillTypeName = $dataSystem.skillTypes[skill.stypeId].toLowerCase();
                    return skillTypeName === targetType;
                }

                if (slotNameLower.startsWith('skill element:')) {
                    const targetElement = display.slotName.split(':')[1].trim().toLowerCase();
                    if (skill.damage && skill.damage.elementId > 0) {
                        const elementName = $dataSystem.elements[skill.damage.elementId].toLowerCase();
                        return elementName === targetElement;
                    }
                    return false;
                }
            }

            if (slotData.type === 'item') {
                const item = $dataItems[slotData.id];
                if (!item) return false;

                if (slotNameLower.startsWith('item name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return item.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('item id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return item.id === targetId;
                }
            }

            return false;
        });

        allDisplays = [...parameterDisplays];

        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            let item;
            switch (slotData.type) {
                case 'weapon':
                    item = $dataWeapons[slotData.id];
                    break;
                case 'skill':
                    item = $dataSkills[slotData.id];
                    break;
                case 'item':
                    item = $dataItems[slotData.id];
                    break;
                case 'armor':
                    item = $dataArmors[slotData.id];
                    break;
            }

            if (item && item.note) {
                const notetagDisplays = extractSlotTextTags(item.note).map(tag => ({
                    textToDisplay: tag.text,
                    slotName: this._config.Name,
                    offsetX: tag.offsetX,
                    offsetY: tag.offsetY
                }));
                allDisplays = [...allDisplays, ...notetagDisplays];
            }
        }

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionAdditionalTexts(allDisplays));
        } else {
            this.positionAdditionalTexts(allDisplays);
        }
    };

    Sprite_SkillSlot.prototype.positionAdditionalTexts = function (slotDisplays) {
        for (const display of slotDisplays) {
            const sprite = new Sprite();
            sprite.bitmap = new Bitmap(96, 20);
            sprite.anchor.x = 0.5;

            if (this._config.BackgroundImage) {
                const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
                sprite.y = -bitmap.height / 2;
            } else {
                sprite.y = -48;
            }

            sprite.x += display.offsetX;
            sprite.y += display.offsetY;

            this.addChild(sprite);
            this._additionalTextSprites.set(display, sprite);
        }
    };

    Sprite_SkillSlot.prototype.updateAdditionalTexts = function () {
        const slotData = _slotData.get(this._config.Name);
        const currentId = slotData ? slotData.id : null;
        const currentType = slotData ? slotData.type : null;

        if (this._lastItemId !== currentId || this._lastItemType !== currentType) {
            this._lastItemId = currentId;
            this._lastItemType = currentType;
            this.createAdditionalTexts();
            return;
        }

        for (const [display, sprite] of this._additionalTextSprites.entries()) {
            let text = display.textToDisplay;
            if (text.includes('$game') || text.includes('eval(')) {
                text = eval(text);
            }

            if (sprite._currentText !== text) {
                sprite._currentText = text;
                sprite.bitmap.clear();
                applyFontSettings(sprite.bitmap);
                sprite.bitmap.drawText(String(text), 0, 0, 96, 20, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.createBackground = function () {
        if (this._config.BackgroundImage) {
            this.bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
        } else {
            this.bitmap = new Bitmap(48, 48);
            this.bitmap.fillRect(0, 0, 48, 48, 'rgba(0,0,0,0.5)');
        }
    };

    Sprite_SkillSlot.prototype.createIcon = function () {
        this._iconSprite = new Sprite();
        this._iconSprite.bitmap = ImageManager.loadSystem('IconSet');
        this._iconSprite.anchor.x = 0.5;
        this._iconSprite.anchor.y = 0.5;
        this.addChild(this._iconSprite);
        this._iconSprite.visible = false;

        this._customImageSprite = new Sprite();
        this._customImageSprite.anchor.x = 0.5;
        this._customImageSprite.anchor.y = 0.5;
        this.addChild(this._customImageSprite);
        this._customImageSprite.visible = false;
    };

    Sprite_SkillSlot.prototype.setSkill = function (skillId, iconIndex, quantity = 0) {
        this._skillId = skillId;
        this._iconIndex = iconIndex;

        this._iconSprite.visible = false;
        this._customImageSprite.visible = false;

        if (this._skillId > 0) {
            let item;
            const slotData = _slotData.get(this._config.Name);

            if (slotData) {
                switch (slotData.type) {
                    case 'skill':
                        item = $dataSkills[this._skillId];
                        break;
                    case 'item':
                        item = $dataItems[this._skillId];
                        break;
                    case 'weapon':
                        item = $dataWeapons[this._skillId];
                        break;
                    case 'armor':
                        item = $dataArmors[this._skillId];
                        break;
                }
            }

            if (item) {
                const notedata = item.note.split(/[\r\n]+/);
                let customImage = '';

                for (const line of notedata) {
                    if (line.match(/<slot image:\s*(.+)>/i)) {
                        customImage = RegExp.$1.trim();
                        break;
                    }
                }

                if (customImage) {
                    this._iconSprite.visible = false;
                    this._isUsingCustomImage = true;

                    const bitmap = ImageManager.loadBitmap('img/pictures/slotUI/', customImage);
                    bitmap.addLoadListener(() => {
                        if (!this._customImageSprite || !this.parent) return;

                        if (bitmap.width === 0 || bitmap.height === 0) {
                            this._isUsingCustomImage = false;
                            this._iconSprite.visible = true;
                            this.refreshIcon();
                            return;
                        }

                        this._customImageSprite.bitmap = bitmap;
                        this._customImageSprite.visible = true;
                        this._customImageSprite.scale.x = 1;
                        this._customImageSprite.scale.y = 1;
                    });
                } else {
                    this._customImageSprite.visible = false;
                    this._isUsingCustomImage = false;
                    this._iconSprite.visible = true;
                    this.refreshIcon();
                }

                if (slotData.type === 'item' && showItemQuantity) {
                    this.refreshQuantity(quantity);
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.refreshIcon = function () {
        const pw = 32;
        const ph = 32;
        if (Utils.RPGMAKER_NAME === "MV") {
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        } else {
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Spriteset_SkillUI() {
        this.initialize(...arguments);
    }

    Spriteset_SkillUI.prototype = Object.create(Sprite.prototype);
    Spriteset_SkillUI.prototype.constructor = Spriteset_SkillUI;

    Spriteset_SkillUI.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._slots = new Map();
        this._fadeOpacity = 255;
        this._playerFadeOpacity = 1;
        this._gamepadGrids = [];
        this.createGrids();
        this.createGamepadCursor();
    };

    Spriteset_SkillUI.prototype.createGamepadCursor = function () {
        this._gamepadCursor = new Sprite();
        if (gamepadCursorImage) {
            this._gamepadCursor.bitmap = ImageManager.loadSystem(gamepadCursorImage);
            this._gamepadCursor.bitmap.addLoadListener(() => {
                this.initializeGamepadCursor();
            });
        } else {
            this._gamepadCursor.bitmap = new Bitmap(48, 48);
            const ctx = this._gamepadCursor.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 48, 48);
            this.initializeGamepadCursor();
        }
    };

    Spriteset_SkillUI.prototype.initializeGamepadCursor = function () {
        this._gamepadCursor.anchor.x = 0.5;
        this._gamepadCursor.anchor.y = 0.5;
        this._gamepadCursor._targetSlot = null;
        this._gamepadCursor._currentGridIndex = -1;
        this._gamepadCursor._currentSlotIndex = -1;
        this.addChild(this._gamepadCursor);
        this._gamepadCursor.visible = false;

        if (this._gamepadGrids.length > 0) {
            this._gamepadCursor._currentGridIndex = 0;
            this._gamepadCursor._currentSlotIndex = 0;
            this.updateCursorTarget();
        }
    };

    Spriteset_SkillUI.prototype.update = function () {
        Sprite.prototype.update.call(this);

        const isVisible = visibilitySwitchId === 0 || $gameSwitches.value(visibilitySwitchId);
        this.visible = isVisible;

        if (isVisible) {
            if (hideUIduringMessage) {
                this.updateVisibility();
            }
            if (this._gridBackgrounds) {
                this.updateGridDragging();
            }
            this.updatePlayerOverlapFade();
        }
        this.updateGamepadNavigation();
    };

    Spriteset_SkillUI.prototype.updateGridDragging = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        let slotBeingDragged = false;
        this._slots.forEach(slot => {
            if (slot._isDragging) {
                slotBeingDragged = true;
            }
        });

        if (slotBeingDragged) return;

        this._gridBackgrounds.forEach(background => {
            if (!background._isDragging && TouchInput.isTriggered() && background.visible) {
                const touchX = TouchInput.x;
                const touchY = TouchInput.y;

                let clickingOnSlot = false;
                background._gridSlots = background._gridSlots || [];

                background._gridSlots.forEach(slot => {
                    const slotRect = new Rectangle(
                        slot.x - slot.width / 2,
                        slot.y - slot.height / 2,
                        slot.width,
                        slot.height
                    );

                    if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                        touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {
                        clickingOnSlot = true;
                    }
                });

                if (!clickingOnSlot) {
                    const gridRect = new Rectangle(
                        background.x - background.width / 2,
                        background.y - background.height / 2,
                        background.width,
                        background.height
                    );

                    if (touchX >= gridRect.x && touchX <= gridRect.x + gridRect.width &&
                        touchY >= gridRect.y && touchY <= gridRect.y + gridRect.height) {
                        background._isDragging = true;
                        background._dragOffsetX = background.x - touchX;
                        background._dragOffsetY = background.y - touchY;

                        if (!background._gridSlots || background._gridSlots.length === 0) {
                            background._gridSlots = [];
                            if (background._grid && background._grid.Slots) {
                                background._grid.Slots.forEach(slotConfig => {
                                    const slot = this._slots.get(typeof slotConfig === 'string' ? slotConfig : slotConfig.Name);
                                    if (slot) {
                                        background._gridSlots.push(slot);
                                    }
                                });
                            }
                        }

                        background._gridSlots.forEach(slot => {
                            slot._gridOffsetX = slot.x - background.x;
                            slot._gridOffsetY = slot.y - background.y;
                        });
                    }
                }
            }

            if (background._isDragging) {
                if (TouchInput.isPressed()) {
                    let newX = TouchInput.x + background._dragOffsetX;
                    let newY = TouchInput.y + background._dragOffsetY;

                    const gridRect = {
                        width: background.width,
                        height: background.height,
                        left: newX - background.width / 2,
                        right: newX + background.width / 2,
                        top: newY - background.height / 2,
                        bottom: newY + background.height / 2,
                        centerX: newX,
                        centerY: newY
                    };

                    const snapPoints = {
                        x: [0, Graphics.boxWidth / 2, Graphics.boxWidth],
                        y: [0, Graphics.boxHeight / 2, Graphics.boxHeight]
                    };

                    this._gridBackgrounds.forEach(otherBackground => {
                        if (otherBackground === background) return;

                        const otherRect = {
                            left: otherBackground.x - otherBackground.width / 2,
                            right: otherBackground.x + otherBackground.width / 2,
                            top: otherBackground.y - otherBackground.height / 2,
                            bottom: otherBackground.y + otherBackground.height / 2,
                            centerX: otherBackground.x,
                            centerY: otherBackground.y
                        };

                        snapPoints.x.push(otherRect.left, otherRect.right, otherRect.centerX);
                        snapPoints.y.push(otherRect.top, otherRect.bottom, otherRect.centerY);
                    });

                    for (const x of snapPoints.x) {
                        if (Math.abs(gridRect.left - x) < SNAP_THRESHOLD) {
                            newX = x + background.width / 2;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                        if (Math.abs(gridRect.right - x) < SNAP_THRESHOLD) {
                            newX = x - background.width / 2;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                        if (Math.abs(gridRect.centerX - x) < SNAP_THRESHOLD) {
                            newX = x;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                    }

                    for (const y of snapPoints.y) {
                        if (Math.abs(gridRect.top - y) < SNAP_THRESHOLD) {
                            newY = y + background.height / 2;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                        if (Math.abs(gridRect.bottom - y) < SNAP_THRESHOLD) {
                            newY = y - background.height / 2;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                        if (Math.abs(gridRect.centerY - y) < SNAP_THRESHOLD) {
                            newY = y;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                    }

                    background.x = Math.max(background.width / 2,
                        Math.min(Graphics.width - background.width / 2, newX));
                    background.y = Math.max(background.height / 2,
                        Math.min(Graphics.height - background.height / 2, newY));

                    background._gridSlots.forEach(slot => {
                        slot.x = background.x + slot._gridOffsetX;
                        slot.y = background.y + slot._gridOffsetY;
                    });
                } else {
                    background._isDragging = false;
                    SnapIndicatorManager.hideAll();

                    const currentPositions = window.$uiPositions || {};
                    if (background._grid && background._grid.Slots && background._grid.Slots.length > 0) {
                        const firstSlot = background._grid.Slots[0];
                        let gridKey = 'grid_unknown';

                        if (typeof firstSlot === 'string') {
                            gridKey = 'grid_' + firstSlot;
                        } else if (firstSlot.Name) {
                            gridKey = 'grid_' + firstSlot.Name.split(',')[0].trim();
                        }

                        currentPositions[gridKey] = {
                            x: background.x,
                            y: background.y
                        };
                    }

                    background._gridSlots.forEach(slot => {
                        currentPositions[slot._config.Name] = {
                            x: slot.x,
                            y: slot.y
                        };
                    });

                    window.$uiPositions = currentPositions;
                    saveHotbarPositions(currentPositions);
                }
            }
        });
    };

    Spriteset_SkillUI.prototype.updateGamepadNavigation = function () {
        if (this._gamepadGrids.length === 0) {
            this._gamepadCursor.visible = false;
            return;
        }

        const isGamepadConnected = navigator.getGamepads && navigator.getGamepads()[0];
        this._gamepadCursor.visible = !!isGamepadConnected;

        if (!isGamepadConnected) return;

        this._gamepadCursor.visible = true;
        let moveRight, moveLeft, moveDown, moveUp;

        const gamepad = navigator.getGamepads()[0];
        if (Utils.RPGMAKER_NAME === "MV") {
            const isButtonPressed = (index) => {
                if (!gamepad.buttons[index]) return false;
                if (typeof gamepad.buttons[index] === 'object') {
                    return gamepad.buttons[index].pressed;
                }
                return gamepad.buttons[index] === 1;
            };

            moveRight = isButtonPressed(15);
            moveLeft = isButtonPressed(14);
            moveDown = isButtonPressed(13);
            moveUp = isButtonPressed(12);
        } else {
            moveRight = gamepad.buttons[15] && gamepad.buttons[15].pressed;
            moveLeft = gamepad.buttons[14] && gamepad.buttons[14].pressed;
            moveDown = gamepad.buttons[13] && gamepad.buttons[13].pressed;
            moveUp = gamepad.buttons[12] && gamepad.buttons[12].pressed;
        }

        if (!this._lastMoveTime) this._lastMoveTime = 0;
        const currentTime = Date.now();
        if (currentTime - this._lastMoveTime < 200) return;

        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        let newIndex = this._gamepadCursor._currentSlotIndex;
        const cols = currentGrid.cols;

        if (moveRight && newIndex % cols < cols - 1) {
            newIndex++;
            this._lastMoveTime = currentTime;
        } else if (moveLeft && newIndex % cols > 0) {
            newIndex--;
            this._lastMoveTime = currentTime;
        } else if (moveDown && newIndex + cols < currentGrid.slots.length) {
            newIndex += cols;
            this._lastMoveTime = currentTime;
        } else if (moveUp && newIndex - cols >= 0) {
            newIndex -= cols;
            this._lastMoveTime = currentTime;
        }

        if (newIndex !== this._gamepadCursor._currentSlotIndex) {
            this._gamepadCursor._currentSlotIndex = newIndex;
            this.updateCursorTarget();
        }
    };

    const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
    Game_Player.prototype.getInputDirection = function () {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        if (gamepad) {
            const scene = SceneManager._scene;
            if (scene._skillUI && scene._skillUI._gamepadGrids.length > 0) {
                if (Utils.RPGMAKER_NAME === "MV") {
                    const isButtonPressed = (index) => {
                        if (!gamepad.buttons[index]) return false;
                        if (typeof gamepad.buttons[index] === 'object') {
                            return gamepad.buttons[index].pressed;
                        }
                        return gamepad.buttons[index] === 1;
                    };

                    if (isButtonPressed(12) || isButtonPressed(13) ||
                        isButtonPressed(14) || isButtonPressed(15)) {
                        return 0;  // Block player movement only when using D-pad
                    }
                } else {
                    if ((gamepad.buttons[12] && gamepad.buttons[12].pressed) ||
                        (gamepad.buttons[13] && gamepad.buttons[13].pressed) ||
                        (gamepad.buttons[14] && gamepad.buttons[14].pressed) ||
                        (gamepad.buttons[15] && gamepad.buttons[15].pressed)) {
                        return 0;
                    }
                }
            }
        }
        return _Game_Player_getInputDirection.call(this);
    };

    Spriteset_SkillUI.prototype.updateCursorTarget = function () {
        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return;

        const slot = this._slots.get(slotConfig.Name);
        if (slot) {
            this._gamepadCursor._targetSlot = slot;
            this._gamepadCursor.visible = true;
            this._gamepadCursor.x = slot.x;
            this._gamepadCursor.y = slot.y;
        }
    };

    Spriteset_SkillUI.prototype.updateVisibility = function () {
        if ($gameMessage.isBusy()) {
            this._fadeOpacity = Math.max(0, this._fadeOpacity - 30);
        } else {
            this._fadeOpacity = Math.min(255, this._fadeOpacity + 30);
        }
    };

    Spriteset_SkillUI.prototype.isPlayerBehindHotbar = function () {
        if (!hideWhenOnPlayer) return false;
        if (!SceneManager._scene._spriteset) return false;

        const playerSprite = SceneManager._scene._spriteset._characterSprites.find(
            sprite => sprite._character === $gamePlayer
        );
        if (!playerSprite) return false;

        const playerWidth = playerSprite.patternWidth ? playerSprite.patternWidth() : $gameMap.tileWidth();
        const playerHeight = playerSprite.patternHeight ? playerSprite.patternHeight() : $gameMap.tileHeight();

        const playerLeft = $gamePlayer.screenX() - playerWidth / 2;
        const playerRight = $gamePlayer.screenX() + playerWidth / 2;
        const playerTop = $gamePlayer.screenY() - playerHeight;
        const playerBottom = $gamePlayer.screenY();

        if (!this._gridBackgrounds) return false;

        return this._gridBackgrounds.some(bg => {
            const halfW = bg.width / 2;
            const halfH = bg.height / 2;
            const bgLeft = bg.x - halfW;
            const bgRight = bg.x + halfW;
            const bgTop = bg.y - halfH;
            const bgBottom = bg.y + halfH;

            return (
                playerRight > bgLeft &&
                playerLeft < bgRight &&
                playerBottom > bgTop &&
                playerTop < bgBottom
            );
        });
    };

    Spriteset_SkillUI.prototype.updatePlayerOverlapFade = function () {
        if (hideWhenOnPlayer) {
            const target = this.isPlayerBehindHotbar() ? 0.3 : 1.0;
            const step = 0.05;

            if (this._playerFadeOpacity < target) {
                this._playerFadeOpacity = Math.min(target, this._playerFadeOpacity + step);
            } else if (this._playerFadeOpacity > target) {
                this._playerFadeOpacity = Math.max(target, this._playerFadeOpacity - step);
            }
        }

        this.alpha = this._playerFadeOpacity * (this._fadeOpacity / 255);
    };

    Spriteset_SkillUI.prototype.createGrids = function () {
        for (const grid of gridSettings) {
            this.createGridBackground(grid);
            this.createGridSlots(grid);
        }
        this._gamepadGrids = gridSettings.filter(grid => {
            return grid.ControllableViaGamepad === 'true';
        }).map((grid, index) => {
            const slots = grid.Slots;
            const rowCol = (grid.RowColumn || '1, 1').toString();
            let rows = 1, cols = 1;
            if (rowCol.includes(',')) {
                [rows, cols] = rowCol.split(',').map(v => Number(v.trim()));
            } else {
                rows = cols = Number(rowCol.trim());
            }
            return {
                slots,
                rows,
                cols,
                index
            };
        });
    };

    Spriteset_SkillUI.prototype.createGridSlots = function (grid) {
        let rows = 1, cols = 1;
        const rowColConfig = (grid.RowColumn || '1, 1').toString();
        if (rowColConfig.includes(',')) {
            [rows, cols] = rowColConfig.split(',').map(v => Number(v.trim()));
        } else {
            rows = cols = Number(rowColConfig.trim());
        }

        const padding = Number(grid.Padding) || 4;
        let defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));

        if (!grid.Slots || grid.Slots.length === 0) {
            return;
        }

        const firstSlotKeyboardName = grid.Slots[0].Name.split(',')[0].trim();
        if (window.$uiPositions && window.$uiPositions['grid_' + firstSlotKeyboardName]) {
            defaultPosition = [
                window.$uiPositions['grid_' + firstSlotKeyboardName].x,
                window.$uiPositions['grid_' + firstSlotKeyboardName].y
            ];
        }

        const gridX = defaultPosition[0] || 0;
        const gridY = defaultPosition[1] || 0;

        if (grid.Slots.length === 0) return;

        const firstSlot = new Sprite_SkillSlot(grid.Slots[0], grid.Type);

        firstSlot.bitmap.addLoadListener(() => {
            const slotWidth = firstSlot.bitmap.width;
            const slotHeight = firstSlot.bitmap.height;

            const gridWidth = (cols - 1) * (slotWidth + padding) + slotWidth;
            const gridHeight = (rows - 1) * (slotHeight + padding) + slotHeight;
            const centerX = gridX - (gridWidth / 2) + (slotWidth / 2);
            const centerY = gridY - (gridHeight / 2) + (slotHeight / 2);

            if (window.$uiPositions[firstSlotKeyboardName]) {
                firstSlot.x = window.$uiPositions[firstSlotKeyboardName].x;
                firstSlot.y = window.$uiPositions[firstSlotKeyboardName].y;
            } else {
                firstSlot.x = centerX;
                firstSlot.y = centerY;
            }

            this._slots.set(firstSlotKeyboardName, firstSlot);
            this.addChild(firstSlot);

            for (let i = 1; i < grid.Slots.length; i++) {
                const slotConfig = grid.Slots[i];
                const slot = new Sprite_SkillSlot(slotConfig, grid.Type);

                const slotKeyboardName = slotConfig.Name.split(',')[0].trim();
                if (window.$uiPositions[slotKeyboardName]) {
                    slot.x = window.$uiPositions[slotKeyboardName].x;
                    slot.y = window.$uiPositions[slotKeyboardName].y;
                } else {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * slotWidth) + (col * padding);
                    slot.y = centerY + (row * slotHeight) + (row * padding);
                }

                this._slots.set(slotKeyboardName, slot);
                this.addChild(slot);
            }
        });
    };

    Spriteset_SkillUI.prototype.createGridBackground = function (grid) {
        let position;
        if (grid.Slots && grid.Slots.length > 0) {
            const firstSlotKeyboardName = grid.Slots[0].Name.split(',')[0].trim();
            if (window.$uiPositions && window.$uiPositions['grid_' + firstSlotKeyboardName]) {
                position = [
                    window.$uiPositions['grid_' + firstSlotKeyboardName].x,
                    window.$uiPositions['grid_' + firstSlotKeyboardName].y
                ];
            } else {
                position = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            }
        } else {
            position = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
        }

        if (grid.BackgroundImage) {
            const background = new Sprite();
            background.bitmap = ImageManager.loadSystem(grid.BackgroundImage);

            background.x = position[0] || 0;
            background.y = position[1] || 0;
            background.anchor.x = 0.5;
            background.anchor.y = 0.5;

            background._isDragging = false;
            background._dragOffsetX = 0;
            background._dragOffsetY = 0;
            background._gridSlots = [];
            background._grid = grid;
            background._isPlaceholder = false;

            this.addChild(background);
            this._gridBackgrounds = this._gridBackgrounds || [];
            this._gridBackgrounds.push(background);
        } else {
            const rowCol = (grid.RowColumn || '2, 5').split(',').map(v => parseInt(v.trim()));
            const rows = rowCol[0] || 2;
            const columns = rowCol.length === 2 ? rowCol[1] : rowCol[0];
            const padding = parseInt(grid.Padding) || 10;
            const slotSize = 64;

            const gridWidth = (columns * slotSize) + ((columns - 1) * padding);
            const gridHeight = (rows * slotSize) + ((rows - 1) * padding);

            const background = new Sprite();
            background.bitmap = new Bitmap(gridWidth + 20, gridHeight + 20);

            const ctx = background.bitmap.context;
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
            ctx.fillStyle = 'rgba(255, 215, 0, 0.25)';
            ctx.lineWidth = 4;
            ctx.setLineDash([12, 6]);

            ctx.fillRect(0, 0, gridWidth + 20, gridHeight + 20);
            ctx.strokeRect(0, 0, gridWidth + 20, gridHeight + 20);

            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = 'rgba(255, 215, 0, 1.0)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Grid ' + (this._gridBackgrounds ? this._gridBackgrounds.length + 1 : 1),
                (gridWidth + 20) / 2, (gridHeight + 20) / 2);

            background.x = position[0] || 0;
            background.y = position[1] || 0;
            background.anchor.x = 0.5;
            background.anchor.y = 0.5;

            background._isDragging = false;
            background._dragOffsetX = 0;
            background._dragOffsetY = 0;
            background._gridSlots = [];
            background._grid = grid;
            background._isPlaceholder = true;

            background.visible = editorMode;

            this.addChild(background);
            this._gridBackgrounds = this._gridBackgrounds || [];
            this._gridBackgrounds.push(background);
        }
    };

    Spriteset_SkillUI.prototype.createBackground = function () {
        if (gridSettings.BackgroundImage) {
            this._background = new Sprite();
            this._background.bitmap = ImageManager.loadSystem(gridSettings.BackgroundImage);
            this.addChild(this._background);
        }
    };

    Spriteset_SkillUI.prototype.createSlots = function () {
        const rows = parseInt(gridSettings.Rows) || 1;
        const cols = parseInt(gridSettings.Columns) || 4;
        const padding = parseInt(gridSettings.Padding) || 4;

        for (let i = 0; i < slotsConfig.length; i++) {
            const config = slotsConfig[i];
            const slot = new Sprite_SkillSlot(config);
            const row = Math.floor(i / cols);
            const col = i % cols;
            slot.x = col * (40 + padding);
            slot.y = row * (40 + padding);
            this._slots.set(config.Name, slot);
            this.addChild(slot);
        }
    };

    Spriteset_SkillUI.prototype.setSkill = function (slotName, skillId, itemId, weaponId) {
        if (_lockedSlots.has(slotName)) { return; }
        const slot = this._slots.get(slotName);
        if (slot) {
            if (skillId > 0) {
                const skill = $dataSkills[skillId];
                if (skill) {
                    slot.setSkill(skillId, skill.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'skill', id: skillId });
                    syncActorHotbarSkill(slot._config.Name, skillId);
                }
            }
            else if (itemId > 0) {
                const item = $dataItems[itemId];
                if (item) {
                    slot.setSkill(itemId, item.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'item', id: itemId });
                }
            }
            else if (weaponId > 0) {
                const weapon = $dataWeapons[weaponId];
                if (weapon) {
                    slot.setSkill(weaponId, weapon.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'weapon', id: weaponId });
                }
            }
            saveToSystem();
        }
    };

    Spriteset_SkillUI.prototype.refreshSlots = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.refreshSlotsVisual = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot && !slot._inCooldown) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.getEmptySlot = function (type) {
        for (const [name, slot] of this._slots.entries()) {
            if (!_slotData.has(name) && slot._gridType === type) {
                return name;
            }
        }
        return null;
    };

    Spriteset_SkillUI.prototype.refreshSpecialSlots = function () {
        for (const [slotName, slot] of this._slots.entries()) {
            const specialBehavior = slot._config.SpecialBehavior || 'none';
            if (specialBehavior === 'display_weapon') {
                const actor = $gameParty.leader();
                const equipSlot = actor._equips[0];
                const currentData = _slotData.get(slotName);

                if (!equipSlot || equipSlot._itemId === 0) {
                    if (currentData) {
                        slot.setSkill(0, 0);
                        _slotData.delete(slotName);
                    }
                    continue;
                }

                if (currentData && currentData.id === equipSlot._itemId) continue;

                const weapon = $dataWeapons[equipSlot._itemId];
                if (weapon) {
                    slot.setSkill(weapon.id, weapon.iconIndex);
                    _slotData.set(slotName, { type: 'weapon', id: weapon.id });
                }
            }
            else if (specialBehavior === 'display_shield') {
                const actor = $gameParty.leader();
                const equipSlot = actor._equips[1];
                const currentData = _slotData.get(slotName);

                if (!equipSlot || equipSlot._itemId === 0) {
                    if (currentData) {
                        slot.setSkill(0, 0);
                        _slotData.delete(slotName);
                    }
                    continue;
                }

                if (currentData && currentData.id === equipSlot._itemId) continue;

                const shield = equipSlot._dataClass === 'weapon' ?
                    $dataWeapons[equipSlot._itemId] :
                    $dataArmors[equipSlot._itemId];

                if (shield) {
                    slot.setSkill(shield.id, shield.iconIndex);
                    _slotData.set(slotName, {
                        type: equipSlot._dataClass,
                        id: shield.id
                    });
                }
            }
        }
        saveToSystem();
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const saveToSystem = function () {
        $gameSystem._uiSlotData = {};
        _slotData.forEach((value, key) => {
            $gameSystem._uiSlotData[key] = value;
        });
        $gameSystem._lockedSlots = Array.from(_lockedSlots);
    };

    const syncActorHotbarSkill = function (slotName, skillId) {
        if (!partyMembersHotbar) return;
        const leader = $gameParty.leader();
        const actorId = leader ? leader.actorId() : 0;
        if (!actorId) return;
        if (!$gameSystem._actorHotbarData) $gameSystem._actorHotbarData = {};
        if (!$gameSystem._actorHotbarData[actorId]) $gameSystem._actorHotbarData[actorId] = {};
        if (skillId > 0) {
            $gameSystem._actorHotbarData[actorId][slotName] = { type: 'skill', id: skillId };
        } else {
            delete $gameSystem._actorHotbarData[actorId][slotName];
        }
    };

    if (typeof hxGetOrCreateDock !== 'function') {
        window.hxGetOrCreateDock = function () {
            if (document.getElementById('hx-plugin-dock')) {
                return document.getElementById('hx-plugin-dock');
            }
            const dock = document.createElement('div');
            dock.id = 'hx-plugin-dock';
            dock.style.cssText = `
                position: fixed; bottom: 20px; right: 20px;
                display: flex; flex-direction: column; align-items: center;
                gap: 8px; z-index: 9999;
            `;
            const logo = document.createElement('img');
            logo.id = 'hx-dock-logo';
            logo.style.cssText = `
                width: 56px; height: 56px; border-radius: 50%;
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                cursor: default; transition: opacity 0.3s, transform 0.2s;
                object-fit: cover; opacity: 0;
            `;
            logo.src = 'data:image/png;base64,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AhERBv7++fb29A0MAxYUBv7rVf70qfrXR/v58P7pnxwXBvDt4ygeAiQcBf7IMu7AOuPMicq4gtrSuufhz/fz5+i0LiohCi8nFP7UbichEnRjNu7KcurPiu/TkOnPkHhrTN7Iji4gAj4vDCQcCx4YCz0zHLydWe3Kfdi5dO7OiNu+fVtPNP7fl7eicoh4VmdbQe/VmKqXbPjdn5OGaMe/rqVyDSoeBtGXIpRqGW9QE2RIEdWaJodhGM2UJaF0HXpZGC4iCTUnC+rDds6taeW/duC7c+rGetOybvTNgc6uburGfvvViebDfezKg6SLW/vXkuPEherKisSre7qwm+jm4vmmD9yRD7l9DdeWIjIjCNKSIt2bJUk0DNaWJr+HItKWJrB+IP63MOCeK92rUuSzXtKua+7GeurCeu7GflBDK+rGgkY7J/XPierGhu7Kis+xefDOjsiqdsqueurKjta5g92/iPPRlqObjLJ2FoZaE1s9DVI4DHlSEtaSItKOIsqKIfeqK++kKtuVJv2vLeigKdaSJtKSJtuWKtWULMmNKeunM9maMcqOLvauOc2SMNmdO7eENDorE/y+XJd4ROrCfu7Ggu7KjunGi8SmduPBi8qufurKlK1qBioaAtKDDKZmCiAUArd2FhkQA7FyFpNeEtGJG6ltFteNHcaDG7t6GUIrCb9+G7Z2GrJ2Gi4eB69yG9aOIuOZJ9aOJtKOJu7Cfu7GiOrChsqqes+vf6pjBqpmCqZiCqFhCrBrDapmDqZmDq13Mc6qesqqf9TRzaZgBi4aAq9mCqpiCsJxDaNdC7hsDcp3D4ZOCiYWA6ZiDoxTDK5mD6FhD3ZGC2pACsR0FLVtE4ZPDqpnE7pyFyIWB5RkKc6qfpxYC4pOCoZKCpRUDKpiDoJKC4pODk00GYpKBoFGChQLAoZKDioZB0UuFmpGI1k5GmI+Hv76+PPx8AwEAgYCAgcGBv7+/vr6+gICAv///7JXTUoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsTAAALEwEAmpwYAACIKUlEQVR4nN29CXxTZfY3fp57k9ybtJTSFBBp6ZK0tFxKoWlE2WRr2VxwqziOC+6jMuNsOuMy4/zUcZwZZ3EbHbdRx5EpjoLK1rKpoGLaQikXWpqkLQ1UhaSltMm9Se59/p/z3HRhFZX5ve/7f8Q2SdP0fu85z9nPeQiF/ydXb9I3/x0O/p9boXP+E42NikX/Myv0zX6R/D9G194LGrrGFu7VAPhDw5tsmb5vQF/+Yfh/aJ2XOuXPKbfGNtY9xt2n71ee89456UDK/z/pOvzgf16ozTn/3iFHgkOOkoPFP9xsmr70ymDa//+wvnRr5W9alP+5SYlQC+jARYktufYq20XPrbrq/z6s531IryI3XIoP33+FtM37zTeRpXlyZHGtsD2mDekYCtCVi3Kpa4hNnwRXzavoOaNPMsH/zsrbHh5SHc18mdMjYIXIXJi7Ye6oYNj5+LUTms/k9y/ylrTHH6hQbPHwOR1AINSV2gWpIXOs8aFKWJf889//30LXn/1apJGqciuh76/dlDL3I5hxf2nhTXNtFN6HpYdhnmvV1+H9z9zFn13728NWTbN2pFojaYyqqZAWgii38glb6bu+gv8bsObF99F3+EtJ5vVbeD4+3/m3rPao5QePwRCTdmRhwbCL4X293EZf//vnp/kIb+Wj3gYCPES6UqGLDO0iyMep0JXr10lK0jjT9Dczu/+PYz2vOqUJHOC2mfxZTRrvcMBYBaD64iaoAo0vDJW0xae5F1N/w6Xw+hOnoG6PIIrvOPYWqdYOGBVJ86daOyC1CwBSEXauf4jFd/k18yqczf9Hsf7st1CyLTXnHK7zIOTP1QurcsGfEQCAzELwOsiY6hbfPn5sbpsS2kvf4Su6HvnjST4kMMJqeei6OM+eRI6cA9YQpLXQ3FCaPzXNnwrBEXy49crZ4aofvPR/DmtejbVkm+2Bz4IH+fIx8/fvhXaAXD9kmv3sx7mO6lx/rv+W6g0+7Vy7ojR0rb2cvHbL8Z8SjYw9+uClQxLXGeka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';
            dock.appendChild(logo);
            document.body.appendChild(dock);

            document.addEventListener('mousemove', (e) => {
                const dockRect = dock.getBoundingClientRect();
                const logoRect = logo.getBoundingClientRect();
                const logoCx = logoRect.left + logoRect.width / 2;
                const logoCy = logoRect.top + logoRect.height / 2;
                const distToLogo = Math.hypot(e.clientX - logoCx, e.clientY - logoCy);
                const insideDock = e.clientX >= dockRect.left - 20 &&
                    e.clientX <= dockRect.right + 20 &&
                    e.clientY >= dockRect.top - 20 &&
                    e.clientY <= dockRect.bottom + 20;
                logo.style.opacity = (distToLogo < 120 || insideDock) ? '1' : '0';
                const showButtons = distToLogo < 60 || insideDock;
                dock.querySelectorAll('div').forEach(b => {
                    b.style.opacity = showButtons ? '1' : '0';
                    b.style.pointerEvents = showButtons ? 'auto' : 'none';
                    b.style.transform = showButtons ? 'translateY(0)' : 'translateY(8px)';
                });
            });
            return dock;
        };

        window.hxAddDockButton = function (id, label, onClick) {
            if (!Utils.isOptionValid('test')) return;
            const dock = hxGetOrCreateDock();
            if (document.getElementById(id)) return;
            const btn = document.createElement('div');
            btn.id = id;
            btn.textContent = label;
            btn.style.cssText = `
                background: #fff; color: #222;
                border: none; border-radius: 20px;
                padding: 6px 14px; font-size: 11px; font-weight: 600;
                font-family: Inter, system-ui, sans-serif;
                cursor: pointer; white-space: nowrap;
                box-shadow: 0 2px 10px rgba(0,0,0,0.25);
                opacity: 0; pointer-events: none;
                transition: opacity 0.2s, transform 0.2s;
                transform: translateY(8px);
            `;
            btn.onclick = onClick;
            dock.insertBefore(btn, dock.firstChild);
        };
    }

    const _Scene_Map_createDisplayObjects_Hotbar = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function () {
        _Scene_Map_createDisplayObjects_Hotbar.call(this);
        if (typeof hxAddDockButton === 'function' && showHotbarButton) {
            hxAddDockButton('hx-btn-hotbar', '⏹️ Hotbar Creator', () => {
                createHotbarVisualEditor();
            });
        }
    };

    const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.call(this);
        reloadGridSettings(false);
        this.createSkillUI();
    };

    Scene_Map.prototype.createSkillUI = function () {
        this._skillUI = new Spriteset_SkillUI();
        this.addChild(this._skillUI);
        _slotData.clear();

        if ($gameSystem._uiSlotData) {
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                if (value.type === 'item' || value.type === 'weapon' || value.type === 'armor') {
                    _slotData.set(key, value);
                }
            });
        }

        if (partyMembersHotbar) {
            const leader = $gameParty.leader();
            const leaderId = leader ? leader.actorId() : 0;
            const actorData = leaderId && $gameSystem._actorHotbarData
                ? $gameSystem._actorHotbarData[leaderId]
                : null;
            if (actorData) {
                Object.entries(actorData).forEach(([key, value]) => {
                    if (value.type === 'skill') _slotData.set(key, value);
                });
            }
        } else {
            if ($gameSystem._uiSlotData) {
                Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                    if (value.type === 'skill') _slotData.set(key, value);
                });
            }
        }

        this._lastLeaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
        this._skillUI.refreshSlots();

        this._skillUI.refreshSlots();
    };

    Scene_Map.prototype.toggleDragMode = function () {
        if (!Utils.isOptionValid('test')) return;

        this._isDragMode = !this._isDragMode;
        if (!this._isDragMode) {
            SnapIndicatorManager.hideAll();
        }
        if (this._isDragMode) {
            window.$uiPositions = readUIPositions();
        } else {
            const currentPositions = {};

            this._skillUI._slots.forEach((slot, name) => {
                currentPositions[name] = {
                    x: slot.x,
                    y: slot.y
                };
            });

            if (this._skillUI._gridBackgrounds) {
                this._skillUI._gridBackgrounds.forEach(bg => {
                    if (bg._grid.Slots && bg._grid.Slots.length > 0) {
                        const firstSlotKeyboardName = bg._grid.Slots[0].Name.split(',')[0].trim();
                        currentPositions['grid_' + firstSlotKeyboardName] = {
                            x: bg.x,
                            y: bg.y
                        };
                    }
                });
            }

            saveHotbarPositions(currentPositions);
        }
    };

    const _Scene_Map_initialize = Scene_Map.prototype.initialize;
    Scene_Map.prototype.initialize = function () {
        _Scene_Map_initialize.call(this);
    };

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        if (this._skillUI && enableTouchInput && TouchInput.isTriggered() && !this._isDragMode) {
            const touchX = TouchInput.x;
            const touchY = TouchInput.y;

            this._skillUI._slots.forEach((slot, slotName) => {
                if (slot.isPointInside(touchX, touchY)) {
                    if (slot._bounceDuration > 0) return;
                    slot.useSlotContents();
                }
            });
        }

        if (this._skillUI) {
            this._skillUI.update();
            this._skillUI.refreshSpecialSlots();
            if (Graphics.frameCount % 4 === 0) {
                this._skillUI.refreshSlotsVisual();
            }
            for (const slot of this._skillUI._slots.values()) {
                slot.refreshButtonText();
            }
            for (const [key, frames] of _globalCooldowns.entries()) {
                if (frames > 0) {
                    _globalCooldowns.set(key, frames - 1);
                }
            }
            updateGlobalCooldowns();

            if (partyMembersHotbar) {
                const currentLeaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
                if (currentLeaderId !== this._lastLeaderId) {
                    this._lastLeaderId = currentLeaderId;

                    _slotData.clear();

                    if ($gameSystem._uiSlotData) {
                        Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                            if (value.type === 'item' || value.type === 'weapon' || value.type === 'armor') {
                                _slotData.set(key, value);
                            }
                        });
                    }

                    const actorData = currentLeaderId && $gameSystem._actorHotbarData
                        ? $gameSystem._actorHotbarData[currentLeaderId]
                        : null;
                    if (actorData) {
                        Object.entries(actorData).forEach(([key, value]) => {
                            if (value.type === 'skill') _slotData.set(key, value);
                        });
                    }

                    this._skillUI._slots.forEach((slot, slotName) => {
                        if (!_slotData.has(slotName)) slot.setSkill(0, 0);
                    });

                    this._skillUI.refreshSlots();
                }
            }
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Window_SkillSlotSelect() {
        this.initialize(...arguments);
    }

    Window_SkillSlotSelect.prototype = Object.create(Window_Command.prototype);
    Window_SkillSlotSelect.prototype.constructor = Window_SkillSlotSelect;

    Window_SkillSlotSelect.prototype.initialize = function (rect) {
        if (Utils.RPGMAKER_NAME === "MV") {
            Window_Command.prototype.initialize.call(this, rect.x, rect.y);
            this.width = rect.width;
            this.height = rect.height;
        } else {
            Window_Command.prototype.initialize.call(this, rect);
        }
        this._skill = null;
        this.deactivate();
        this.hide();
    };

    Window_SkillSlotSelect.prototype.setSkill = function (skill) {
        this._skill = skill;
        this.refresh();
    };

    Window_SkillSlotSelect.prototype.setActor = function (actor) {
        this._actorId = actor ? actor.actorId() : 0;
    };

    Window_SkillSlotSelect.prototype.getSlotDataForActor = function (slotName) {
        if (this._actorId && this._actorId > 0) {
            const actorData = $gameSystem._actorHotbarData && $gameSystem._actorHotbarData[this._actorId];
            if (actorData) return actorData[slotName] || null;
            return null;
        }
        return _slotData.get(slotName) || null;
    };

    Window_SkillSlotSelect.prototype.makeCommandList = function () {
        if (Imported.Hendrix_Localization) {
            this.addCommand(Hendrix_Localization(useNowText), 'use_now', hotbarInputEnabled);
        } else {
            this.addCommand(useNowText, 'use_now', hotbarInputEnabled);
        }

        const isSkillScene = SceneManager._scene instanceof Scene_Skill;
        const isItemScene = SceneManager._scene instanceof Scene_Item;

        this._availableSlots = ALL_AVAILABLE_SLOTS.filter(slotData => {
            const specialBehavior = slotData.specialBehavior || 'none';
            return specialBehavior === 'none' ||
                (isSkillScene && specialBehavior === 'skill_only') ||
                (isItemScene && specialBehavior === 'item_only');
        });

        this._availableSlots.forEach(slotData => {
            this.addCommand(slotData.name, 'slot', true, slotData.name);
        });
    };

    Window_SkillSlotSelect.prototype.drawItem = function (index) {
        if (Utils.RPGMAKER_NAME === "MV") {
            var rect = this.itemRectForText(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            var slotData = this._availableSlots[index - 1];
            var slot = slotData.slot;
            var data = _slotData.get(slotData.name);

            var iconIndex = emptySlotIcon;
            if (data) {
                var item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                }
            }
            this.drawIcon(iconIndex, rect.x, rect.y);

            var displayName;
            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = slot._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();
                const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

                let currentButton = '';
                if (isGamepadMode) {
                    for (const buttonName in GamepadButtons) {
                        const buttonCode = GamepadButtons[buttonName];
                        if (Input.gamepadMapper[buttonCode] === actionName) {
                            currentButton = buttonName;
                            break;
                        }
                    }
                } else {
                    for (const keyCode in Input.keyMapper) {
                        if (Input.keyMapper[keyCode] === actionName) {
                            for (const keyName in charToKeyCode) {
                                if (charToKeyCode[keyName] == keyCode) {
                                    currentButton = keyName;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }

                displayName = currentButton ? `Slot ${currentButton.toUpperCase()}` : slot._keyboardName;
            } else {
                displayName = slot._keyboardName;
            }

            var nameX = rect.x + 40;
            this.changeTextColor(this.normalColor());
            this.drawText(displayName, nameX, rect.y, 120);

            var itemName = emptySlotText;
            if (Imported.Hendrix_Localization) {
                itemName = Hendrix_Localization(emptySlotText);
            }
            if (data && item) {
                itemName = item.name;
                this.changeTextColor(this.textColor(14));
            } else {
                this.changeTextColor(this.normalColor());
            }
            this.drawText(itemName, nameX + 115, rect.y, 200);

        } else {
            let rect = this.itemLineRect(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            const slotData = this._availableSlots[index - 1];
            const slot = slotData.slot;
            const data = this.getSlotDataForActor(slotData.name);
            let iconIndex = emptySlotIcon;
            let itemName = emptySlotText;
            if (Imported.Hendrix_Localization) {
                itemName = Hendrix_Localization(emptySlotText);
            }

            if (data) {
                let item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                    itemName = item.name;
                }
            }

            this.drawIcon(iconIndex, rect.x, rect.y);
            const iconPadding = ImageManager.iconWidth + 4;
            const baseX = rect.x + iconPadding;

            let displayName;
            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = slot._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();
                const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

                let currentButton = '';
                if (isGamepadMode) {
                    for (const buttonName in GamepadButtons) {
                        const buttonCode = GamepadButtons[buttonName];
                        if (Input.gamepadMapper[buttonCode] === actionName) {
                            currentButton = buttonName;
                            break;
                        }
                    }
                } else {
                    for (const keyCode in Input.keyMapper) {
                        if (Input.keyMapper[keyCode] === actionName) {
                            for (const keyName in charToKeyCode) {
                                if (charToKeyCode[keyName] == keyCode) {
                                    currentButton = keyName;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }

                displayName = currentButton ? `Slot ${currentButton.toUpperCase()}` : slot._keyboardName;
            } else {
                displayName = slot._keyboardName;
            }

            this.drawText(displayName, baseX, rect.y);

            const textX = baseX + this.textWidth(displayName + " ");
            if (data) {
                this.changeTextColor(ColorManager.textColor(14));
                this.drawText(itemName, textX, rect.y);
                this.resetTextColor();
            } else {
                this.drawText(itemName, textX, rect.y);
            }
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const _Window_SkillList_isCurrentItemEnabled = Window_SkillList.prototype.isCurrentItemEnabled;
    Window_SkillList.prototype.isCurrentItemEnabled = function () {
        if (SceneManager._scene instanceof Scene_Skill) {
            return true;
        }
        return _Window_SkillList_isCurrentItemEnabled.call(this);
    };

    const _Scene_Skill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function () {
        _Scene_Skill_create.call(this);
        this.createSlotSelectWindow();
    };

    Scene_Skill.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Skill.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        return new Rectangle(wx, wy, ww, wh);
    };


    Scene_Skill.prototype.onItemOk = function () {
        this._slotSelectWindow.setActor(this.actor());
        if (!this.item()) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            return;
        }

        if (!allowEquipNonUsable && !this.actor().canUse(this.item())) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            return;
        }

        this._slotSelectWindow.setSkill(this.item());
        this._slotSelectWindow.show();
        this._slotSelectWindow.activate();
        this._slotSelectWindow.select(0);
        this._itemWindow.deactivate();
        this._slotSelectWindow.refresh();
    };

    Scene_Skill.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            const skill = this.item();
            if (this.actor().canUse(skill)) {
                if (this.itemTargetsValid()) {
                    this._slotSelectWindow.hide();
                    this._slotSelectWindow.deactivate();
                    if (Imported.Hendrix_Action_Engine && typeof soloPlayerMenu !== 'undefined' && soloPlayerMenu) {
                        this.determineItem();
                        this.onActorOk();
                        this.onActorCancel();
                        return;
                    }
                    this.determineItem();
                } else {
                    SoundManager.playBuzzer();
                }
            } else {
                SoundManager.playBuzzer();
                this._slotSelectWindow.activate();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.deactivate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const skillId = this.item().id;

        if (_lockedSlots.has(slotName)) {
            SoundManager.playBuzzer();
            this._slotSelectWindow.activate();
            return;
        }

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            if (partyMembersHotbar) {
                const actorId = this._slotSelectWindow._actorId || ($gameParty.leader() ? $gameParty.leader().actorId() : 0);
                const leaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
                if (!$gameSystem._actorHotbarData) $gameSystem._actorHotbarData = {};
                if (!$gameSystem._actorHotbarData[actorId]) $gameSystem._actorHotbarData[actorId] = {};
                $gameSystem._actorHotbarData[actorId][slotName] = { type: 'skill', id: skillId };
                if (actorId === leaderId) {
                    slot.slot.setSkill(skillId, this.item().iconIndex);
                    _slotData.set(slotName, { type: 'skill', id: skillId });
                }
            } else {
                slot.slot.setSkill(skillId, this.item().iconIndex);
                _slotData.set(slotName, { type: 'skill', id: skillId });
            }
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Skill.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    const _Scene_Item_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function () {
        isHotbarInitializing = true;
        _Scene_Item_create.call(this);
        isHotbarInitializing = false;
    };

    Scene_Item.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Item.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        return new Rectangle(wx, wy, ww, wh);
    };

    const _Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
    Scene_Item.prototype.onItemOk = function () {
        if (isHotbarInitializing) {
            _Scene_Item_onItemOk.call(this);
            return;
        }

        if (!allowEquipNonUsable && !$gameParty.leader().canUse(this.item())) {
            _Scene_Item_onItemOk.call(this);
            return;
        }

        if (!this._slotSelectWindow) {
            this.createSlotSelectWindow();
        }

        if (this._slotSelectWindow) {
            this._slotSelectWindow.setSkill(this.item());
            this._slotSelectWindow.show();
            this._slotSelectWindow.activate();
            this._slotSelectWindow.select(0);
            this._itemWindow.deactivate();
            this._slotSelectWindow.refresh();
        } else {
            _Scene_Item_onItemOk.call(this);
        }
    };

    Scene_Item.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || $gameParty.members().length > 0;
    };

    Scene_Skill.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || this.actor().isSkillWtypeOk(item);
    };

    Scene_Item.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            if (this.itemTargetsValid()) {
                this._slotSelectWindow.hide();
                this._slotSelectWindow.deactivate();
                if (Imported.Hendrix_Action_Engine && typeof soloPlayerMenu !== 'undefined' && soloPlayerMenu) {
                    this.determineItem();
                    this.onActorOk();
                    this.onActorCancel();
                    return;
                }
                this.determineItem();
            } else {
                SoundManager.playBuzzer();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const itemId = this.item().id;

        if (_lockedSlots.has(slotName)) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            this._slotSelectWindow.activate();
            return;
        }

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            slot.slot.setSkill(itemId, this.item().iconIndex);
            _slotData.set(slotName, { type: 'item', id: itemId });
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Item.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    Sprite_SkillSlot.prototype.startFlash = function () {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        this._flashDuration = 15;
        this._flashColor = [255, 255, 255, 255];
        targetSprite._flashDuration = 15;
    };

    Sprite_SkillSlot.prototype.updateFlash = function () {
        if (this._flashDuration > 0) {
            const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
            const d = this._flashDuration--;
            this._flashColor[3] = (d / 15) * 255;
            targetSprite.setBlendColor(this._flashColor);
        }
    };

    Spriteset_SkillUI.prototype.flashSlot = function (slotName) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startFlash();
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownDuration = seconds;
            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            _cooldownStates.set(this._config.Name, {
                duration: seconds,
                total: seconds,
                showTimer: showTimer
            });

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);
        if (this._skillUI && visibilitySwitchId !== 0) {
            this._skillUI.visible = $gameSwitches.value(visibilitySwitchId);
        }
        if (this._skillUI) {
            for (const [slotName, cooldownData] of _cooldownStates.entries()) {
                const slot = this._skillUI._slots.get(slotName);
                if (slot) {
                    slot._cooldownDuration = cooldownData.duration;
                    slot._cooldownTotal = cooldownData.total;
                    slot._inCooldown = true;
                    slot._showTimer = cooldownData.showTimer;
                    slot.createCooldownEffect();

                    if (cooldownData.showTimer) {
                        slot._timerSprite = new Sprite();
                        slot._timerSprite.bitmap = new Bitmap(48, 32);
                        slot._timerSprite.anchor.x = 0.5;
                        slot._timerSprite.anchor.y = 0.5;
                        slot.addChild(slot._timerSprite);
                    }
                }
            }
        }
        if (this._skillUI && this._skillUI._gamepadGrids.length > 0) {
            this._skillUI.initializeGamepadCursor();
            if (!navigator.getGamepads || !navigator.getGamepads()[0]) {
                this._skillUI._gamepadCursor.visible = false;
            }
        }
    };

    Sprite_SkillSlot.prototype.createCooldownEffect = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.visible) return;

        this._originalScale = {
            x: targetSprite.scale.x,
            y: targetSprite.scale.y
        };

        const setupCooldown = () => {
            this._grayscaleClone = new PIXI.Sprite(targetSprite.texture);
            this._grayscaleClone.anchor = targetSprite.anchor;
            this._grayscaleClone.scale = targetSprite.scale;
            this._grayscaleClone.x = targetSprite.x;
            this._grayscaleClone.y = targetSprite.y;
            this._grayscaleClone.filters = [new PIXI.filters.ColorMatrixFilter()];
            this._grayscaleClone.filters[0].desaturate();
            this._coloredClone = new PIXI.Sprite(targetSprite.texture);
            this._coloredClone.anchor = targetSprite.anchor;
            this._coloredClone.scale = targetSprite.scale;
            this._coloredClone.x = targetSprite.x;
            this._coloredClone.y = targetSprite.y;
            this._cooldownContainer.removeChildren();
            this._cooldownContainer.addChild(this._grayscaleClone);
            this._cooldownContainer.addChild(this._coloredClone);
            this._colorMask = new PIXI.Graphics();
            this._cooldownContainer.addChild(this._colorMask);
            this._coloredClone.mask = this._colorMask;
            targetSprite.visible = false;
        };

        if (this._isUsingCustomImage && !targetSprite.bitmap.isReady()) {
            targetSprite.bitmap.addLoadListener(setupCooldown);
        } else {
            setupCooldown();
        }
    };

    Sprite_SkillSlot.prototype.cleanupCooldownEffects = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;

        if (this._grayscaleClone) {
            this._cooldownContainer.removeChild(this._grayscaleClone);
            this._grayscaleClone.destroy();
            this._grayscaleClone = null;
        }

        if (this._coloredClone) {
            this._cooldownContainer.removeChild(this._coloredClone);
            this._coloredClone.destroy();
            this._coloredClone = null;
        }

        if (this._colorMask) {
            this._cooldownContainer.removeChild(this._colorMask);
            this._colorMask.destroy();
            this._colorMask = null;
        }

        targetSprite.visible = true;

        this._cooldownContainer.removeChildren();
    };

    Sprite_SkillSlot.prototype.updateCooldown = function () {
        if (!this._inCooldown && this._bounceDuration === 0) return;

        if (this._inCooldown) {
            const key = getGlobalCooldownKey(this._lastItemType, this._lastItemId);
            const remainingFrames = _globalCooldowns.get(key);

            if (!remainingFrames || remainingFrames <= 0) {
                this._inCooldown = false;
                this._bounceDuration = 20;

                if (this._timerSprite) {
                    this.removeChild(this._timerSprite);
                    this._timerSprite = null;
                }

                _cooldownStates.delete(this._config.Name);
                this.cleanupCooldownEffects();
                return;
            }

            const progress = 1 - (remainingFrames / (this._cooldownTotal * 60));

            if (this._showTimer && this._timerSprite) {
                this._timerSprite.bitmap.clear();
                applyFontSettings(this._timerSprite.bitmap);
                const timeText = Math.ceil(remainingFrames / 60).toString();
                this._timerSprite.bitmap.drawText(timeText, 0, 0, 48, 32, 'center');
            }

            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._colorMask) {
                const height = this._isUsingCustomImage ? targetSprite.height * targetSprite.scale.y : targetSprite.height;
                const width = this._isUsingCustomImage ? targetSprite.width * targetSprite.scale.x : targetSprite.width;
                const maskHeight = height * progress;

                this._colorMask.clear();
                this._colorMask.beginFill(0xFFFFFF);

                const x = targetSprite.x - (width * targetSprite.anchor.x);
                const y = targetSprite.y + height - maskHeight - (height * targetSprite.anchor.y);

                this._colorMask.drawRect(x, y, width, maskHeight);
                this._colorMask.endFill();
            }
        }

        if (this._bounceDuration > 0) {
            this._bounceDuration--;
            const bounceProgress = this._bounceDuration / 20;
            const bounceScale = 1 + Math.sin(bounceProgress * Math.PI) * (this._isUsingCustomImage ? 0.3 : 0.3);

            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._originalScale) {
                targetSprite.scale.x = this._originalScale.x * bounceScale;
                targetSprite.scale.y = this._originalScale.y * bounceScale;

                if (this._bounceDuration === 0) {
                    targetSprite.scale.x = this._originalScale.x;
                    targetSprite.scale.y = this._originalScale.y;
                    this._originalScale = null;
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const data = _slotData.get(this._config.Name);
        if (data) {
            this._lastItemType = data.type;
            this._lastItemId = data.id;
        }

        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    Spriteset_SkillUI.prototype.startCooldown = function (slotName, seconds, showTimer) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startCooldown(seconds, showTimer);
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Sprite_GamepadCursor() {
        this.initialize(...arguments);
    }

    Sprite_GamepadCursor.prototype = Object.create(Sprite.prototype);
    Sprite_GamepadCursor.prototype.constructor = Sprite_GamepadCursor;

    Sprite_GamepadCursor.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._targetSlot = null;
        this._currentGrid = null;
        this._currentGridIndex = -1;
        this._currentSlotIndex = -1;
        this.createCursor();
    };

    Sprite_GamepadCursor.prototype.createCursor = function () {
        if (gamepadCursorImage) {
            this.bitmap = ImageManager.loadSystem(gamepadCursorImage);
        } else {
            this.bitmap = new Bitmap(40, 40);
            const ctx = this.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 38, 38);
        }
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.visible = false;
    };

    Sprite_GamepadCursor.prototype.update = function () {
        Sprite.prototype.update.call(this);
        if (!this._targetSlot || !navigator.getGamepads || !navigator.getGamepads()[0]) {
            this.visible = false;
            return;
        }
        this.visible = true;
        this.x = this._targetSlot.x;
        this.y = this._targetSlot.y;
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    if (Utils.RPGMAKER_NAME === "MZ") {
        PluginManager.registerCommand(pluginName, "LockSlot", function (args) {
            const slotName = args.SlotName;
            const shouldLock = args.Lock === 'true';

            if (shouldLock) {
                _lockedSlots.add(slotName);
            } else {
                _lockedSlots.delete(slotName);
            }
        });

        PluginManager.registerCommand(pluginName, "HotbarInputStatus", function (args) {
            hotbarInputEnabled = args.Status === 'true';
        });

        PluginManager.registerCommand(pluginName, "SetSkill", function (args) {
            if (SceneManager._scene._skillUI) {
                SceneManager._scene._skillUI.setSkill(
                    args.Name,
                    Number(args.skillId || 0),
                    Number(args.itemId || 0),
                    Number(args.weaponId || 0)
                );
            }
        });

        PluginManager.registerCommand(pluginName, "RemoveFromSlot", function (args) {
            if (SceneManager._scene._skillUI) {
                const slot = SceneManager._scene._skillUI._slots.get(args.Name);
                if (slot) {
                    slot.setSkill(0, 0);
                    _slotData.delete(args.Name);
                    syncActorHotbarSkill(args.Name, 0);
                    saveToSystem();
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSlot", function (args) {
            if (!canUseSlot(args.Name)) return;

            const slotData = _slotData.get(args.Name);
            if (!slotData) return;

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill) {
                        const mpCost = actor.skillMpCost(skill);
                        if (actor.mp >= mpCost && actor.canUse(skill)) {
                            actor.gainMp(-mpCost);

                            if (skill.scope === 11) {
                                const action = new Game_Action(actor);
                                action.setSkill(slotData.id);
                                action.setTarget(actor.index());
                                action.apply(actor);
                            }

                            if (skill.effects) {
                                const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                if (commonEventEffect && $gameMap._interpreter) {
                                    $gameMap._interpreter.clear();
                                    $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                }
                            }
                            cooldownData = extractCooldown(skill.note);
                            success = true;
                        }
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;

                        if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                            const slot = SceneManager._scene._skillUI._slots.get(args.Name);
                            if (slot) {
                                slot.setSkill(0, 0);
                                _slotData.delete(args.Name);
                                saveToSystem();
                            }
                        }
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(args.Name);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSelectedSlot", function (args) {
            if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

            const ui = SceneManager._scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slot = ui._slots.get(slotName);

            if (slot && slot._bounceDuration > 0) return;

            if (!canUseSlot(slotName)) return;

            const slotData = _slotData.get(slotName);
            if (!slotData) return;

            if (isItemDisallowedByCommand(slotData.type, slotData.id)) {
                return;
            }

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill) {
                        const mpCost = actor.skillMpCost(skill);
                        if (actor.mp >= mpCost && actor.canUse(skill)) {
                            actor.gainMp(-mpCost);

                            if (skill.scope === 11) {
                                const action = new Game_Action(actor);
                                action.setSkill(slotData.id);
                                action.setTarget(actor.index());
                                action.apply(actor);
                            }

                            if (skill.effects) {
                                const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                if (commonEventEffect && $gameMap._interpreter) {
                                    $gameMap._interpreter.clear();
                                    $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                }
                            }
                            cooldownData = extractCooldown(skill.note);
                            success = true;
                        }
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;

                        if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                            const slot = SceneManager._scene._skillUI._slots.get(slotName);
                            if (slot) {
                                slot.setSkill(0, 0);
                                _slotData.delete(slotName);
                                saveToSystem();
                            }
                        }
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
                case 'armor':
                    const armor = $dataArmors[slotData.id];
                    if (armor) {
                        cooldownData = extractCooldown(armor.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(slotName);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "PushNextStuff", function (args) {
            if (!SceneManager._scene._skillUI) return;

            const slot = SceneManager._scene._skillUI._slots.get(args.Name);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(args.Name, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(args.Name, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(args.Name, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(args.Name, { type: 'skill', id: nextSkill.id });
                            syncActorHotbarSkill(args.Name, nextSkill.id);
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "GamepadPushNextStuff", function (args) {
            const scene = SceneManager._scene;
            if (!scene || !scene._skillUI) return;

            const ui = scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slot = ui._slots.get(slotName);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(slotName, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(slotName, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(slotName, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(slotName, { type: 'skill', id: nextSkill.id });
                            syncActorHotbarSkill(slotName, nextSkill.id);
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "StartCooldownForThing", function (args) {
            var name = args.Name;
            var duration = args.Time === 'notetag' ? null : Number(args.Time);
            var showTimer = args.ShowTimer === 'true';
            var found = false;
            var itemData;

            for (var i = 1; i < $dataItems.length; i++) {
                if ($dataItems[i] && $dataItems[i].name === name) {
                    itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataItems[i].note);
                    setGlobalCooldown('item', i, itemData.duration, showTimer);
                    found = true;
                    break;
                }
            }

            if (!found) {
                for (var i = 1; i < $dataSkills.length; i++) {
                    if ($dataSkills[i] && $dataSkills[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataSkills[i].note);
                        setGlobalCooldown('skill', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataWeapons.length; i++) {
                    if ($dataWeapons[i] && $dataWeapons[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataWeapons[i].note);
                        setGlobalCooldown('weapon', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataArmors.length; i++) {
                    if ($dataArmors[i] && $dataArmors[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataArmors[i].note);
                        setGlobalCooldown('armor', i, itemData.duration, showTimer);
                        break;
                    }
                }
            }
        });

        PluginManager.registerCommand(pluginName, "AllowItemUse", function (args) {
            const targetType = args.TargetType;
            let targetIdName = args.TargetIdName;
            const allowUse = args.Status === 'true';

            if (targetIdName.startsWith('$game')) {
                targetIdName = eval(targetIdName);
            }

            let database;
            switch (targetType) {
                case 'item':
                    database = $dataItems;
                    break;
                case 'weapon':
                    database = $dataWeapons;
                    break;
                case 'armor':
                    database = $dataArmors;
                    break;
                case 'skill':
                    database = $dataSkills;
                    break;
                default:
                    return;
            }

            let targetItem = null;
            const targetId = Number(targetIdName);

            if (!isNaN(targetId) && targetId > 0) {
                targetItem = database[targetId];
            }

            if (!targetItem && targetIdName) {
                targetItem = database.find(item =>
                    item && item.name.toLowerCase() === String(targetIdName).toLowerCase()
                );
            }

            if (!targetItem) {
                return;
            }

            if (!$gameSystem._disallowedHotbarItems) {
                $gameSystem._disallowedHotbarItems = {};
            }

            const key = `${targetType}_${targetItem.id}`;

            if (allowUse) {
                delete $gameSystem._disallowedHotbarItems[key];
            } else {
                $gameSystem._disallowedHotbarItems[key] = true;
            }
        });
    }

    function isItemDisallowedByCommand(type, id) {
        if (!$gameSystem._disallowedHotbarItems) return false;
        const key = `${type}_${id}`;
        return $gameSystem._disallowedHotbarItems[key] === true;
    }

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function () {
        _Scene_Map_updateScene.call(this);
        this.updateSlotInputs();
    };

    Scene_Map.prototype.updateSlotInputs = function () {
        if (!this._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;
        if (!hotbarInputEnabled) return;

        this._skillUI._slots.forEach((slot, slotName) => {
            if (!slot._config.Button) return;
            if (slot._bounceDuration > 0) return;
            let buttonConfig = slot._config.Button.split(',')[0].trim().toLowerCase();

            if (Input.isTriggered(buttonConfig)) {
                const slotData = _slotData.get(slotName);
                if (!slotData) return;

                if (isOnGlobalCooldown(slotData.type, slotData.id)) return;

                slot.useSlotContents();
            }
        });
    };

    const _Scene_Map_updateGamepadNavigation = Spriteset_SkillUI.prototype.updateGamepadNavigation;
    Spriteset_SkillUI.prototype.updateGamepadNavigation = function () {
        _Scene_Map_updateGamepadNavigation.call(this);
        const isGamepadConnected = navigator.getGamepads && navigator.getGamepads()[0];
        if (!isGamepadConnected) return;
        const gamepad = navigator.getGamepads()[0];
        if (Imported.Hendrix_Keyboard_Gamepad) {
            if (Input.isTriggered('gamepad use slot') && this._gamepadCursor._targetSlot) {
                const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
                if (currentGrid) {
                    const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
                    if (slotConfig) {
                        if (SceneManager._scene) {
                            const interpreter = new Game_Interpreter();
                            if (Utils.RPGMAKER_NAME === "MV") {
                                interpreter.pluginCommand("UseSelectedSlot", []);
                            } else {
                                PluginManager.callCommand(interpreter, pluginName, "UseSelectedSlot", {});
                            }
                        }
                    }
                }
            }
        } else {
            const useButtonIndex = GamepadButtons[parameters.GamepadUseSlotButton];
            if (useButtonIndex !== undefined) {
                let isButtonPressed = false;

                if (Utils.RPGMAKER_NAME === "MV") {
                    if (gamepad.buttons[useButtonIndex]) {
                        if (typeof gamepad.buttons[useButtonIndex] === 'object') {
                            isButtonPressed = gamepad.buttons[useButtonIndex].pressed;
                        } else {
                            isButtonPressed = gamepad.buttons[useButtonIndex] === 1;
                        }
                    }
                } else {
                    isButtonPressed = gamepad.buttons[useButtonIndex] && gamepad.buttons[useButtonIndex].pressed;
                }

                const isNewPress = isButtonPressed && this._lastUseButtonState === false;
                this._lastUseButtonState = isButtonPressed;

                if (isNewPress && this._gamepadCursor._targetSlot) {
                    const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
                    if (currentGrid) {
                        const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
                        if (slotConfig) {
                            if (SceneManager._scene) {
                                const interpreter = new Game_Interpreter();
                                if (Utils.RPGMAKER_NAME === "MV") {
                                    interpreter.pluginCommand("UseSelectedSlot", []);
                                } else {
                                    PluginManager.callCommand(interpreter, pluginName, "UseSelectedSlot", {});
                                }
                            }
                        }
                    }
                }
            }
        }

        this._slots.forEach((slot, slotName) => {
            if (!slot._config.Button || !slot._config.Button.includes(',')) return;

            const gamepadButtonName = slot._config.Button.split(',')[1].trim();
            if (!gamepadButtonName) return;

            const buttonIndex = GamepadButtons[gamepadButtonName];
            if (buttonIndex === undefined) return;

            if (!this._lastGamepadSlotPressed) {
                this._lastGamepadSlotPressed = {};
            }

            let isCurrentlyPressed = false;
            if (Utils.RPGMAKER_NAME === "MV") {
                if (!gamepad.buttons[buttonIndex]) {
                    isCurrentlyPressed = false;
                } else if (typeof gamepad.buttons[buttonIndex] === 'object') {
                    isCurrentlyPressed = gamepad.buttons[buttonIndex].pressed;
                } else {
                    isCurrentlyPressed = gamepad.buttons[buttonIndex] === 1;
                }
            } else {
                isCurrentlyPressed = gamepad.buttons[buttonIndex] && gamepad.buttons[buttonIndex].pressed;
            }
            const wasPreviouslyPressed = this._lastGamepadSlotPressed[slotName] === true;
            const isTriggered = isCurrentlyPressed && !wasPreviouslyPressed;
            this._lastGamepadSlotPressed[slotName] = isCurrentlyPressed;
            if (isTriggered) {
                if (SceneManager._scene) {
                    const interpreter = new Game_Interpreter();
                    if (Utils.RPGMAKER_NAME === "MV") {
                        interpreter.pluginCommand("UseSlot", [slotName]);
                    } else {
                        PluginManager.callCommand(interpreter, pluginName, "UseSlot", { Name: slotName });
                    }
                }
            }
        });
    };

    if (Utils.RPGMAKER_NAME === "MV") {
        const parseSlotName = function (args) {
            if (!args[0] || !args[0].startsWith('[')) {
                return args[0];
            }
            const fullText = args.join(' ');
            const bracketEnd = fullText.indexOf(']');
            if (bracketEnd !== -1) {
                return fullText.substring(1, bracketEnd);
            }
            return args[0];
        };

        const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand.call(this, command, args);

            switch (command) {
                case 'LockSlot':
                    const lockSlotName = parseSlotName(args);
                    let shouldLockSlot;

                    if (args[0] && args[0].startsWith('[')) {
                        shouldLockSlot = args[2] === 'true';
                    } else {
                        shouldLockSlot = args[1] === 'true';
                    }

                    if (shouldLockSlot) {
                        _lockedSlots.add(lockSlotName);
                    } else {
                        _lockedSlots.delete(lockSlotName);
                    }
                    break;

                case 'HotbarInputStatus':
                    hotbarInputEnabled = args[0] === 'true';
                    break;

                case 'SetToSlot':
                    if (SceneManager._scene._skillUI) {
                        let skillId, itemId, weaponId;

                        if (args[0] && args[0].startsWith('[')) {
                            const fullText = args.join(' ');
                            const bracketEnd = fullText.indexOf(']');

                            if (bracketEnd !== -1) {
                                const afterBracket = fullText.substring(bracketEnd + 1).trim();
                                const remainingArgs = afterBracket.split(/\s+/).filter(arg => arg !== '');

                                skillId = Number(remainingArgs[0] || 0);
                                itemId = Number(remainingArgs[1] || 0);
                                weaponId = Number(remainingArgs[2] || 0);
                            } else {
                                skillId = Number(args[1] || 0);
                                itemId = Number(args[2] || 0);
                                weaponId = Number(args[3] || 0);
                            }
                        } else {
                            skillId = Number(args[1] || 0);
                            itemId = Number(args[2] || 0);
                            weaponId = Number(args[3] || 0);
                        }

                        SceneManager._scene._skillUI.setSkill(
                            parseSlotName(args),
                            skillId,
                            itemId,
                            weaponId
                        );

                        saveToSystem();
                    }
                    break;

                case 'RemoveFromSlot':
                    if (SceneManager._scene._skillUI) {
                        const slotName = parseSlotName(args);
                        const slot = SceneManager._scene._skillUI._slots.get(slotName);
                        if (slot) {
                            slot.setSkill(0, 0);
                            _slotData.delete(slotName);
                            saveToSystem();
                        }
                    }
                    break;

                case 'UseSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

                    const slotData = _slotData.get(parseSlotName(args));
                    if (!slotData) return;

                    if (isOnGlobalCooldown(slotData.type, slotData.id)) return;

                    const actor = $gameParty.leader();
                    let success = false;
                    let cooldownData = { duration: 0, showTimer: true };

                    switch (slotData.type) {
                        case 'skill':
                            const skill = $dataSkills[slotData.id];
                            if (skill) {
                                const mpCost = actor.skillMpCost(skill);
                                if (actor.mp >= mpCost && actor.canUse(skill)) {
                                    actor.gainMp(-mpCost);

                                    const action = new Game_Action(actor);
                                    action.setSkill(slotData.id);
                                    action.setTarget(0);
                                    if (skill.scope === 11) {
                                        const action = new Game_Action(actor);
                                        action.setSkill(slotData.id);
                                        action.setTarget(actor.index());
                                        action.apply(actor);
                                    }

                                    if (skill.effects) {
                                        const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                        if (commonEventEffect && $gameMap._interpreter) {
                                            $gameMap._interpreter.clear();
                                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                        }
                                    }
                                    cooldownData = extractCooldown(skill.note);
                                    success = true;
                                }
                            }
                            break;
                        case 'item':
                            const item = $dataItems[slotData.id];
                            if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                actor.useItem(item);

                                if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                                    const slot = SceneManager._scene._skillUI._slots.get(parseSlotName(args));
                                    if (slot) {
                                        slot.setSkill(0, 0);
                                        _slotData.delete(parseSlotName(args));
                                        saveToSystem();
                                    }
                                }

                                const action = new Game_Action(actor);
                                action.setItemObject(item);
                                action.setTarget(actor.index());
                                action.apply(actor);

                                cooldownData = extractCooldown(item.note);
                                success = true;
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[slotData.id];
                            if (weapon) {
                                cooldownData = extractCooldown(weapon.note);
                                success = true;
                            }
                            break;
                    }

                    if (success) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(parseSlotName(args));

                        if (cooldownData.duration > 0) {
                            setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                        }
                    }
                    break;

                case 'UseSelectedSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

                    const ui = SceneManager._scene._skillUI;
                    if (!ui._gamepadCursor._targetSlot) return;

                    const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
                    if (!currentGrid) return;

                    const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
                    if (!slotConfig) return;

                    const selectedSlotName = slotConfig.Name;
                    const selectedSlotData = _slotData.get(selectedSlotName);
                    if (!selectedSlotData) return;

                    if (isOnGlobalCooldown(selectedSlotData.type, selectedSlotData.id)) return;

                    const selectedActor = $gameParty.leader();
                    let selectedSuccess = false;
                    let selectedCooldownData = { duration: 0, showTimer: true };

                    switch (selectedSlotData.type) {
                        case 'skill':
                            const skill = $dataSkills[selectedSlotData.id];
                            if (skill) {
                                const mpCost = selectedActor.skillMpCost(skill);
                                if (selectedActor.mp >= mpCost && selectedActor.canUse(skill)) {
                                    selectedActor.gainMp(-mpCost);

                                    if (skill.scope === 11) {
                                        const action = new Game_Action(selectedActor);
                                        action.setSkill(selectedSlotData.id);
                                        action.setTarget(selectedActor.index());
                                        action.apply(selectedActor);
                                    }

                                    if (skill.effects) {
                                        const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                        if (commonEventEffect && $gameMap._interpreter) {
                                            $gameMap._interpreter.clear();
                                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                        }
                                    }
                                    selectedCooldownData = extractCooldown(skill.note);
                                    selectedSuccess = true;
                                }
                            }
                            break;
                        case 'item':
                            const item = $dataItems[selectedSlotData.id];
                            if (item && $gameParty.hasItem(item) && selectedActor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                selectedActor.useItem(item);

                                const action = new Game_Action(selectedActor);
                                action.setItemObject(item);
                                action.setTarget(selectedActor.index());
                                action.apply(selectedActor);

                                selectedCooldownData = extractCooldown(item.note);
                                selectedSuccess = true;

                                if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                                    const slot = SceneManager._scene._skillUI._slots.get(selectedSlotName);
                                    if (slot) {
                                        slot.setSkill(0, 0);
                                        _slotData.delete(selectedSlotName);
                                        saveToSystem();
                                    }
                                }
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[selectedSlotData.id];
                            if (weapon) {
                                selectedCooldownData = extractCooldown(weapon.note);
                                selectedSuccess = true;
                            }
                            break;
                        case 'armor':
                            const armor = $dataArmors[selectedSlotData.id];
                            if (armor) {
                                selectedCooldownData = extractCooldown(armor.note);
                                selectedSuccess = true;
                            }
                            break;
                    }

                    if (selectedSuccess) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(selectedSlotName);

                        if (selectedCooldownData.duration > 0) {
                            setGlobalCooldown(selectedSlotData.type, selectedSlotData.id, selectedCooldownData.duration, selectedCooldownData.showTimer);
                        }
                    }
                    break;

                case 'PushNextStuff':
                    if (!SceneManager._scene._skillUI) return;

                    const slotName = parseSlotName(args);
                    let itemType;

                    if (args[0] && args[0].startsWith('[')) {
                        const fullText = args.join(' ');
                        const bracketEnd = fullText.indexOf(']');

                        if (bracketEnd !== -1) {
                            const afterBracket = fullText.substring(bracketEnd + 1).trim();
                            const remainingArgs = afterBracket.split(/\s+/).filter(arg => arg !== '');
                            itemType = remainingArgs[0];
                        } else {
                            itemType = args[1];
                        }
                    } else {
                        itemType = args[1];
                    }

                    const pushSlot = SceneManager._scene._skillUI._slots.get(slotName);
                    if (!pushSlot) return;

                    const pushActor = $gameParty.leader();
                    if (!pushActor) return;

                    switch (itemType) {
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                pushActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    pushSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(slotName, { type: 'weapon', id: nextWeapon.id });
                                    pushActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && pushActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    pushSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(slotName, { type: 'armor', id: nextShield.id });
                                    pushActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                pushActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    pushSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(slotName, { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableSkills = pushActor.skills().filter(skill =>
                                pushActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    pushSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(slotName, { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }
                    saveToSystem();
                    break;

                case 'GamepadPushNextStuff':
                    const gamepadScene = SceneManager._scene;
                    if (!gamepadScene || !gamepadScene._skillUI) return;

                    const gamepadUi = gamepadScene._skillUI;
                    if (!gamepadUi._gamepadCursor._targetSlot) return;

                    const gamepadGrid = gamepadUi._gamepadGrids[gamepadUi._gamepadCursor._currentGridIndex];
                    if (!gamepadGrid) return;

                    const gamepadSlotConfig = gamepadGrid.slots[gamepadUi._gamepadCursor._currentSlotIndex];
                    if (!gamepadSlotConfig) return;

                    const gamepadSlotName = gamepadSlotConfig.Name;
                    const gamepadSlot = gamepadUi._slots.get(gamepadSlotName);
                    if (!gamepadSlot) return;

                    const gamepadActor = $gameParty.leader();
                    if (!gamepadActor) return;

                    switch (args[0]) { // Type
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                gamepadActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    gamepadSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'weapon', id: nextWeapon.id });
                                    gamepadActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && gamepadActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    gamepadSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'armor', id: nextShield.id });
                                    gamepadActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                gamepadActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    gamepadSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableSkills = gamepadActor.skills().filter(skill =>
                                gamepadActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    gamepadSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }

                    saveToSystem();
                    break;
            }
        };
    }

    const _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            SceneManager._scene._skillUI._slots.forEach(slot => {
                slot.setSkill(0, 0);
            });
        }
    };

    const _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.call(this, contents);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();

        if ($gameSystem._uiSlotData) {
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                _slotData.set(key, value);
            });
        }
        if ($gameSystem._lockedSlots) {
            _lockedSlots.clear();
            $gameSystem._lockedSlots.forEach(slotName => {
                _lockedSlots.add(slotName);
            });
        }
    };

    window.isSlot = function (slotName, query) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let equippedItem;
        switch (slotData.type) {
            case 'skill':
                equippedItem = $dataSkills[slotData.id];
                if (query === 'mpCost' && equippedItem) {
                    return $gameParty.leader().skillMpCost(equippedItem);
                }
                break;
            case 'item':
                equippedItem = $dataItems[slotData.id];
                break;
            case 'weapon':
                equippedItem = $dataWeapons[slotData.id];
                break;
            case 'armor':
                equippedItem = $dataArmors[slotData.id];
                break;
        }

        if (!equippedItem) return false;

        if (typeof query === 'number') {
            return slotData.id === query;
        } else if (typeof query === 'string') {
            return equippedItem.name.toLowerCase() === query.toLowerCase();
        } else {
            return equippedItem[query];
        }
    };

    window.isSlotType = function (slotName, typeName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        if ($dataSkills[slotData.id]) {
            item = $dataSkills[slotData.id];
        } else if ($dataWeapons[slotData.id]) {
            item = $dataWeapons[slotData.id];
        } else if ($dataItems[slotData.id]) {
            item = $dataItems[slotData.id];
        } else if ($dataArmors[slotData.id]) {
            item = $dataArmors[slotData.id];
        }
        if (!item) return false;

        const query = typeName.toLowerCase();

        if (item.stypeId) {
            const skillTypeName = $dataSystem.skillTypes[item.stypeId];
            if (skillTypeName.toLowerCase() === query) return true;
        }

        if (item.wtypeId) {
            const weaponTypeName = $dataSystem.weaponTypes[item.wtypeId];
            if (weaponTypeName.toLowerCase() === query) return true;
        }

        if (item.atypeId) {
            const armorTypeName = $dataSystem.armorTypes[item.atypeId];
            if (armorTypeName.toLowerCase() === query) return true;
        }

        if (item.etypeId) {
            const equipTypeName = $dataSystem.equipTypes[item.etypeId];
            if (equipTypeName.toLowerCase() === query) return true;
        }

        const elements = (item.damage ? item.damage.elementId : null);
        if (elements) {
            const elementName = $dataSystem.elements[elements];
            if (elementName.toLowerCase() === query) return true;
        }

        return false;
    };

    window.isSlotEmpty = function (slotName) {
        return !_slotData.has(slotName);
    };

    window.isSlotOnCooldown = function (slotName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return 0;

        const slot = scene._skillUI._slots.get(slotName);
        if (!slot) return 0;

        if (slot._inCooldown && slot._cooldownDuration > 0) {
            return slot._cooldownDuration;
        }

        const slotData = _slotData.get(slotName);
        if (slotData) {
            const key = getGlobalCooldownKey(slotData.type, slotData.id);
            const remainingFrames = _globalCooldowns.get(key);
            if (remainingFrames && remainingFrames > 0) {
                return Math.ceil(remainingFrames / 60);
            }
        }

        return 0;
    };

    window.isSlotMpCost = function (slotName) {
        const data = _slotData.get(slotName);
        if (!data || data.type !== 'skill') return 0;

        const skill = $dataSkills[data.id];
        return skill ? $gameParty.leader().skillMpCost(skill) : 0;
    };

    window.isSelectedSlot = function (name) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slotName = slotConfig.Name;
        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        switch (slotData.type) {
            case 'skill':
                item = $dataSkills[slotData.id];
                break;
            case 'item':
                item = $dataItems[slotData.id];
                break;
            case 'weapon':
                item = $dataWeapons[slotData.id];
                break;
            case 'armor':
                item = $dataArmors[slotData.id];
                break;
        }

        if (!item) return false;

        return item.name.toLowerCase() === name.toLowerCase();
    };

    window.isSelectedSlotOnCooldown = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slot = ui._slots.get(slotConfig.Name);
        if (!slot || !slot._inCooldown) return 0;

        return slot._cooldownDuration || 0;
    };

    window.isSelectedSlotEmpty = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return true;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return true;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return true;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return true;

        const slotName = slotConfig.Name;
        return !_slotData.has(slotName);
    };

    //======================================================================

    const SnapIndicatorManager = {
        indicators: {},

        create: function (id, isVertical) {
            const indicator = new Sprite();
            const width = isVertical ? 1 : Graphics.boxWidth;
            const height = isVertical ? Graphics.boxHeight : 1;

            indicator.bitmap = new Bitmap(width, height);
            indicator.bitmap.fillRect(0, 0, width, height, '#00ff00');
            indicator.opacity = 128;
            indicator.visible = false;

            this.indicators[id] = indicator;
            return indicator;
        },

        show: function (id, position) {
            const indicator = this.indicators[id];
            if (!indicator) return;
            if (id.includes('vertical')) {
                indicator.x = position;
            } else {
                indicator.y = position;
            }
            indicator.visible = true;
        },

        hide: function (id) {
            const indicator = this.indicators[id];
            if (!indicator) return;

            indicator.visible = false;
        },

        hideAll: function () {
            for (const id in this.indicators) {
                this.indicators[id].visible = false;
            }
        },

        initialize: function (scene) {
            this.indicators['slot_vertical'] = this.create('slot_vertical', true);
            this.indicators['slot_horizontal'] = this.create('slot_horizontal', false);

            for (const id in this.indicators) {
                scene.addChild(this.indicators[id]);
            }
        }
    };

    function calculateSnapPosition(draggedSlot, newX, newY) {
        const result = { x: newX, y: newY, snapX: null, snapY: null };
        SnapIndicatorManager.hide('slot_vertical');
        SnapIndicatorManager.hide('slot_horizontal');

        const draggedRect = {
            left: newX - draggedSlot.width / 2,
            right: newX + draggedSlot.width / 2,
            top: newY - draggedSlot.height / 2,
            bottom: newY + draggedSlot.height / 2,
            centerX: newX,
            centerY: newY,
            width: draggedSlot.width,
            height: draggedSlot.height
        };

        const snapPoints = {
            x: [0, Graphics.boxWidth / 2, Graphics.boxWidth],
            y: [0, Graphics.boxHeight / 2, Graphics.boxHeight]
        };

        if (SceneManager._scene && SceneManager._scene._skillUI) {
            SceneManager._scene._skillUI._slots.forEach((otherSlot, slotName) => {
                if (otherSlot === draggedSlot) return;

                const otherRect = {
                    left: otherSlot.x - otherSlot.width / 2,
                    right: otherSlot.x + otherSlot.width / 2,
                    top: otherSlot.y - otherSlot.height / 2,
                    bottom: otherSlot.y + otherSlot.height / 2,
                    centerX: otherSlot.x,
                    centerY: otherSlot.y
                };

                snapPoints.x.push(otherRect.left, otherRect.right, otherRect.centerX);
                snapPoints.y.push(otherRect.top, otherRect.bottom, otherRect.centerY);
            });
        }

        for (const x of snapPoints.x) {
            if (Math.abs(draggedRect.left - x) < SNAP_THRESHOLD) {
                result.snapX = x + draggedRect.width / 2;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
            if (Math.abs(draggedRect.right - x) < SNAP_THRESHOLD) {
                result.snapX = x - draggedRect.width / 2;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
            if (Math.abs(draggedRect.centerX - x) < SNAP_THRESHOLD) {
                result.snapX = x;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
        }

        for (const y of snapPoints.y) {
            if (Math.abs(draggedRect.top - y) < SNAP_THRESHOLD) {
                result.snapY = y + draggedRect.height / 2;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
            if (Math.abs(draggedRect.bottom - y) < SNAP_THRESHOLD) {
                result.snapY = y - draggedRect.height / 2;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
            if (Math.abs(draggedRect.centerY - y) < SNAP_THRESHOLD) {
                result.snapY = y;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
        }

        result.x = result.snapX !== null ? result.snapX : newX;
        result.y = result.snapY !== null ? result.snapY : newY;
        return result;
    }

    const _Game_Party_gainItem = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
        _Game_Party_gainItem.call(this, item, amount, includeEquip);

        if (unequipEmptyItems && DataManager.isItem(item) && !DataManager.isWeapon(item) && !DataManager.isArmor(item)) {
            if (!this.hasItem(item)) {
                _slotData.forEach((data, slotName) => {
                    if (data.type === 'item' && data.id === item.id) {
                        if (SceneManager._scene && SceneManager._scene._skillUI) {
                            const slot = SceneManager._scene._skillUI._slots.get(slotName);
                            if (slot) {
                                slot.setSkill(0, 0);
                            }
                        }
                        _slotData.delete(slotName);
                    }
                });
                saveToSystem();
            }
        }
    };

    initializeKeyMapping();

    const _0x7069f0 = _0x53c4; (function (_0x5b8a6d, _0x39e960) { const _0x25605d = { _0x40185a: 0x94f, _0x4b9ad5: 0x280, _0x3cd618: 0x921, _0x276dc7: 0xaf1, _0x307c37: 0x99b, _0x3ad6b1: 0x37b, _0x71e171: 0x3b3, _0x4d6a39: 0x8be, _0x519a9c: 0x557 }, _0x1eb1a9 = _0x53c4, _0x27c76d = _0x5b8a6d(); while (!![]) { try { const _0x34c179 = parseInt(_0x1eb1a9(0x4a1)) / (0x24b7 + -0x7 * 0x10d + 0x1f5 * -0xf) * (-parseInt(_0x1eb1a9(_0x25605d._0x40185a)) / (0x1c91 + 0x1 * 0x143b + 0x5 * -0x9c2)) + -parseInt(_0x1eb1a9(_0x25605d._0x4b9ad5)) / (0x227 * -0x5 + -0x12e * -0x1b + -0x1514) * (parseInt(_0x1eb1a9(_0x25605d._0x3cd618)) / (-0x2005 + 0x35 * -0x25 + 0x13d9 * 0x2)) + -parseInt(_0x1eb1a9(0x6f4)) / (-0x26fd + -0x1efd * -0x1 + -0x1 * -0x805) * (parseInt(_0x1eb1a9(_0x25605d._0x276dc7)) / (0x16 * -0xe8 + -0x131 * -0x1 + 0x9b * 0x1f)) + -parseInt(_0x1eb1a9(0x458)) / (0xc83 * -0x1 + -0xbdf + -0x3 * -0x823) * (parseInt(_0x1eb1a9(_0x25605d._0x307c37)) / (-0x1 * -0x581 + 0x2a7 * -0x8 + 0xfbf)) + parseInt(_0x1eb1a9(_0x25605d._0x3ad6b1)) / (0x1 * 0x195b + -0x22c1 + 0x96f) + parseInt(_0x1eb1a9(_0x25605d._0x71e171)) / (-0x1d98 + 0xe3f * 0x2 + 0x92 * 0x2) * (-parseInt(_0x1eb1a9(_0x25605d._0x4d6a39)) / (-0x19 * 0xf1 + -0x14d * 0xf + -0xe5d * -0x3)) + parseInt(_0x1eb1a9(_0x25605d._0x519a9c)) / (-0x1 * -0x52b + -0x8b7 + 0x398); if (_0x34c179 === _0x39e960) break; else _0x27c76d['push'](_0x27c76d['shift']()); } catch (_0x5bca06) { _0x27c76d['push'](_0x27c76d['shift']()); } } }(_0x428e, 0xb9a47 + -0x1 * 0x664f7 + 0xa1 * 0xe0f)); let VisualEditorWindow = null, editorMode = ![], currentSelectedSlot = null, currentSelectedGrid = null; function createHotbarVisualEditor() { const _0x538d4a = { _0x3b82c2: 0x75f, _0x4d60c1: 0x422, _0x1b56da: 0xa9b, _0x2f762c: 0x32d, _0x24265f: 0x605, _0x490c1d: 0x1dc, _0x3ca6a0: 0x374, _0xa0bde0: 0x96f, _0x342112: 0x99c, _0x451a0c: 0x452, _0x3755c7: 0x4d5, _0x4f1136: 0x1dc, _0x108cda: 0x577, _0x25f40c: 0x27c, _0x1856f6: 0x771, _0x4f81ab: 0x65a, _0xa87a1d: 0xa04, _0x5a44b2: 0x1dc, _0x334128: 0x49b, _0x2ae435: 0xa15, _0x23903b: 0x476, _0x52aa7b: 0x490, _0xeeaa40: 0xa38, _0x50f62f: 0x9ae, _0x6675f1: 0x5f9, _0x350ca8: 0x271, _0x2bf676: 0x337, _0xcad18b: 0x590, _0x1c2b46: 0x211, _0x4ffce3: 0x66c, _0x59f6c0: 0xb82, _0x2e4bc9: 0x57c, _0x823c4: 0x56e, _0x8e95d6: 0x381, _0x2bf40c: 0xb85, _0x44b2eb: 0x330, _0x777e2e: 0x3ed, _0x4a3e5d: 0x1dc, _0x2d2fca: 0x1bc, _0x1feb00: 0x38b, _0x1f5405: 0x781, _0x434285: 0x9fa, _0x5c3e1c: 0x585, _0x2473b9: 0x812, _0x2455d2: 0x1dc, _0x17e9df: 0x4d5, _0x49e3f9: 0x1dc, _0x2d4587: 0x1dc, _0x362dd3: 0x555, _0x1605de: 0x71b, _0x335e6c: 0x934, _0x180958: 0x99a, _0x4ea4dc: 0xa46, _0x4990c1: 0x7e6, _0x44efa0: 0x786, _0x590b07: 0x8e9, _0x4502cd: 0x7ba, _0x3ca73d: 0x1dc, _0x11cd1d: 0x275, _0x39d56e: 0x1dc, _0x13888c: 0x1dc, _0xf66875: 0x6f0, _0x305d2d: 0xa59, _0x118022: 0xa7a, _0x2f2acf: 0x9ba, _0x44d37f: 0x1dc, _0x4ac72d: 0x1dc, _0x4d9822: 0xb91, _0x52f77f: 0x1dc, _0x2eea0f: 0x9d0, _0x3774da: 0x371, _0x25549a: 0x661, _0x128cf9: 0x947, _0x1729ae: 0x205, _0x374c42: 0xadc, _0x548d61: 0x56a, _0x543cfc: 0x3d0, _0x6e4682: 0x817, _0x34e0aa: 0x3a7, _0xb107e5: 0xafc, _0x5db5c2: 0x40d, _0x13bb5d: 0x83c, _0x51e470: 0x2ee, _0x34495a: 0x711, _0x16c50a: 0x7fb, _0x127c5e: 0xa0b, _0x3860da: 0x1dc, _0x4ca4e1: 0x4d5, _0x3e2c69: 0x7ef, _0x57de39: 0x205, _0x49759b: 0xb27, _0x8ba7c5: 0x1dc, _0x513ccc: 0x4fa, _0x48db5d: 0x2d5, _0x4bb850: 0x48b, _0x14342b: 0xb0f, _0x488054: 0x1c7, _0x5a9a39: 0x70a, _0x31ad45: 0x707, _0x2c69eb: 0x1dc, _0x14d79a: 0x1dc, _0x346d54: 0x621, _0xe903c: 0x540, _0x1d1cd3: 0x75e, _0x63c6fb: 0x1fb, _0x34cf12: 0x186, _0x2e9cef: 0xacb, _0x35eeb1: 0x1dc, _0x587d21: 0x6f5, _0x529307: 0x1dc, _0x2c3b85: 0xb0f, _0xe2c90a: 0x462, _0x3e5217: 0x717, _0x140d48: 0x24f, _0x2b15fd: 0x492, _0x528caa: 0x1dc, _0x54847c: 0x1dc, _0x441728: 0x9a8, _0x22ca5a: 0x1dc, _0x2b8c72: 0x1dc, _0x1126b8: 0xb23, _0x401be9: 0x1dc, _0x5abc6a: 0x204, _0x3e7176: 0x1dc, _0x43debe: 0x7df, _0x1df0df: 0xbd9, _0x21feea: 0x78a, _0x46fb3b: 0x802, _0x501c78: 0xbf2, _0x3885db: 0x47e, _0xd7586: 0x1ca, _0x5dbeff: 0x7d8, _0xf4527f: 0xb6a, _0x4483e0: 0x46d, _0xcd8aca: 0x1ca, _0x247a7f: 0x6a8, _0x282b4d: 0x1dc, _0x4a5da1: 0x393, _0x10daf2: 0x1dc, _0x2746cd: 0x703, _0x337db5: 0x1dc, _0x3f9bb3: 0x28f, _0x5192f9: 0xbda, _0x14b3b4: 0x4eb, _0xdbc22a: 0x1dc, _0x287208: 0x9aa, _0x3bad48: 0x6e2, _0x553455: 0xada, _0xb0e60f: 0xb30, _0x2f37af: 0x662, _0x1ef40a: 0x738, _0x9dfd30: 0x47a, _0x504f30: 0x18c, _0x193616: 0xa00, _0xfe4637: 0x1dc, _0x1d4f35: 0x507, _0x8cfa01: 0x1dc, _0x5a332b: 0x58d, _0x1c6c20: 0x8cf, _0x5c2518: 0x570, _0x45946f: 0x670, _0x2474be: 0x7f4, _0x514370: 0x5f1, _0xba4d7f: 0x728, _0x425df1: 0xaa4, _0x23697c: 0x258, _0x443e91: 0xa4f, _0x223965: 0x646, _0x4c523c: 0xb4b, _0x5f035a: 0x54a, _0x1d7dbe: 0xaf6, _0xbfb4af: 0x554, _0x144a8c: 0x545, _0x128ff2: 0x8c7, _0x1541c4: 0xab4, _0x1756fc: 0x4de, _0x44fa19: 0x296, _0x3caf64: 0x479, _0x273545: 0x2f9, _0x3770b2: 0x48d, _0xb9830a: 0x7e4, _0x118435: 0x551, _0x430f78: 0x6b0, _0x51ffe1: 0x21f, _0x103386: 0x7bc, _0x18fd1d: 0x33a, _0x47860c: 0x308, _0x1f2178: 0x460, _0x4bcebd: 0x57a, _0x58fb37: 0xa22, _0x4e673a: 0xb47, _0x2da893: 0x563, _0x502437: 0x73b, _0x501cff: 0x193, _0x9e48b1: 0x491, _0x7cf8ac: 0x727, _0x5a7b84: 0x5a2, _0x49e33d: 0x941, _0x34cd2b: 0x26d, _0x334094: 0x20f, _0x599d23: 0x615, _0x323561: 0xa96, _0xc34dc9: 0xbe1, _0x5be7c9: 0x35c, _0xfb8315: 0x86f, _0x15354e: 0x726, _0x31ef31: 0x87a, _0x24ab9d: 0x208, _0x1e7b78: 0xa83, _0x267590: 0x4ed, _0x46eed1: 0x678, _0x743ec7: 0x4a2, _0x578f10: 0x1ea, _0x4feab2: 0x7bb, _0x2662d3: 0x69f, _0x1e4b8e: 0xb80, _0x1784c1: 0x392, _0x2166f6: 0x9ea, _0x1ef817: 0xbb1, _0x340207: 0x4fb, _0x3b277f: 0x70c, _0x429cb4: 0x4c7, _0x118be7: 0x27e, _0x29e8a5: 0x344, _0x309d96: 0x344, _0x191889: 0x344, _0x3fb879: 0x344, _0x381bba: 0x79e, _0x138514: 0xba7, _0x39272e: 0x3fc, _0x5b478c: 0x335, _0x5da28e: 0x6be, _0x49b19d: 0x5fc, _0x106003: 0x241, _0x49eb35: 0x587, _0x255ed5: 0x7c5, _0x18cbfe: 0x793, _0x596a1f: 0x519, _0x4b374f: 0x28d, _0x347fc0: 0x8ec, _0x259ff3: 0x66f, _0xfcde37: 0x9cd, _0x3a5896: 0x359, _0x57f219: 0xa5c, _0x2b776f: 0x755, _0x42ead0: 0xa01, _0x2c8c98: 0x6b1, _0x28510e: 0x2ef, _0x53b741: 0x23a, _0x41d8bd: 0xa31, _0x59d0f3: 0x6e8, _0x4dee21: 0x95c, _0x481b60: 0x668, _0x5231de: 0x1d8, _0x44f02b: 0x982, _0x4797f5: 0x32a, _0x1c8dc3: 0x7b6, _0x3db50e: 0x1bf, _0x1a3058: 0x1cb, _0x569a06: 0x60a, _0x5b9b2c: 0x729, _0x415441: 0x1e2, _0xb169c3: 0x25c, _0x472ef7: 0x613, _0x40aa9: 0x26a, _0x2f9582: 0x3ab, _0x48c998: 0x7c2, _0x31ed42: 0xb1d, _0x2199a3: 0x4e9, _0x2517f8: 0x32e, _0xbdbc97: 0x4dc, _0x173271: 0x677, _0x4bb6b8: 0x81c, _0x14379e: 0x5c5, _0x5cc491: 0x5ee, _0x464f37: 0x6d6, _0x20ef8b: 0x449, _0x1b2dcd: 0x8f6, _0x4e0286: 0xae3, _0x57e72b: 0x9d3, _0x488d8f: 0x294, _0x32ad3b: 0x4d9, _0x350def: 0x3c8, _0x3a5b4d: 0x8ea, _0x1c92c2: 0x65f, _0x712c2: 0xa79, _0x5a15e4: 0x250, _0x13ad1f: 0x8a5, _0x3b6f28: 0x7e8, _0x1d2dc: 0x3ec, _0x27ac50: 0x8fe, _0x132511: 0x439, _0x3da615: 0x89f, _0x231355: 0x284, _0x38ab9f: 0x1b3, _0x59024c: 0x92f, _0x596e1b: 0x4bd, _0x215254: 0x847, _0x18ec2e: 0x811, _0x30e6bf: 0x907, _0x46e592: 0x50c, _0x4e2a8d: 0x799, _0x3c1049: 0x50b, _0x36b618: 0x931, _0x14f0e7: 0xad5, _0xf581bb: 0x528, _0x6451a1: 0x639, _0xcf7b80: 0x1d1, _0x526240: 0x62a, _0x15a6ab: 0x5ed, _0x18fe34: 0x918, _0x535e8d: 0x334, _0x1b9ebd: 0x2af, _0x4f0cf: 0x4f8, _0x2c6da1: 0x418, _0x4c0423: 0x7d2, _0x41f2d8: 0x8dc, _0x30a366: 0x288, _0x18ce65: 0x3f7, _0x29a5fb: 0xae4, _0x3380bb: 0x7ac, _0x2c83d2: 0x2b6, _0x4b1db4: 0x608, _0x481e81: 0x4c5, _0x3387b8: 0x4b5, _0x2f91dd: 0x89c, _0x58c395: 0x875, _0x2aee76: 0x8fa, _0x38941b: 0x981, _0x536da9: 0x63e, _0x5d4867: 0x1a6, _0x570686: 0xab6, _0x15be32: 0x351, _0x1f3612: 0x85f, _0x53d55d: 0x684, _0x2503c2: 0x5bd, _0x25c043: 0x787, _0xf5b4cb: 0x1ec, _0x2dec89: 0x9f8, _0x1a46d1: 0x5ae, _0x301122: 0xbf9, _0x18e8c5: 0x6ae, _0x33a8ce: 0xa30, _0x4a2e38: 0xb74, _0xde0f2d: 0x8d9, _0x5684d1: 0x721, _0x18804f: 0x819, _0x48d1a9: 0x499, _0x3327f6: 0x1f6, _0x31ee69: 0x36f, _0x5d71d7: 0x911, _0x516c52: 0x457, _0x1d5330: 0x953, _0x179426: 0x427, _0x4199c1: 0xa5a, _0x377276: 0x8a2, _0x24427a: 0x2fb, _0x3e921c: 0x5a1, _0x296678: 0xbf1, _0x3261aa: 0xaa5, _0x56a12e: 0x647, _0x3a6543: 0xabc, _0x333113: 0x4d1, _0x47e51e: 0xb96, _0x531589: 0x45b, _0xcc6e6: 0x648, _0x191af0: 0x39b, _0x61670d: 0x5d9, _0xef94e0: 0x6d9, _0x15a1c2: 0x55c, _0x3e38b5: 0x9dc, _0x36d9b1: 0x834, _0x1af8e3: 0x80c, _0x32d645: 0xac4, _0x37d410: 0x34a, _0x44c4c7: 0x1f1, _0x1306f3: 0x451, _0x1e3bdd: 0x4f5, _0x66fcdb: 0x9e8, _0x4d6a3f: 0x8c5, _0xc3e4d4: 0x753, _0x342957: 0xa25, _0x4481ab: 0x9da, _0x13914e: 0x956, _0x55846d: 0x1ce, _0x7b54d7: 0x584, _0x1dbe7a: 0xa3c, _0x40e13b: 0x29f, _0x577a87: 0xa7d, _0x5c0b55: 0x27f, _0x40bc5c: 0x60b, _0x47489c: 0x262, _0x5a1a5e: 0x472, _0xaa9300: 0x9a2, _0x8d3f87: 0x353, _0x21c103: 0x5f4, _0x2b1f82: 0x3c0, _0x1989df: 0xa19, _0x24b8c2: 0x5e8, _0x316db9: 0x564, _0x377898: 0x914, _0x116d12: 0x347, _0x4169c3: 0x4a7, _0x1f069d: 0x5f6, _0x549716: 0x909, _0x48afe8: 0x571, _0x32d5d4: 0x565, _0x146963: 0x704, _0x663201: 0x408, _0xf9787c: 0x8ee, _0x4d5092: 0x2b9, _0x3ddd33: 0x34c, _0x502955: 0xbf8, _0x4c382e: 0x79d, _0x3059fc: 0xa07, _0x4f40c0: 0x185, _0x1514ac: 0x59e, _0x121354: 0x709, _0x43c770: 0x93d, _0x4c8816: 0x917, _0x24b9a0: 0xa54, _0x5ce4f8: 0x747, _0x455928: 0x41b, _0x31378f: 0x38f, _0x17f87d: 0x69b, _0x407107: 0x5e1, _0x5db120: 0xa53, _0x1717ef: 0x98d, _0x4a4807: 0x39a, _0x788128: 0xab5, _0x3c9258: 0x649, _0x381fe9: 0x1e1, _0x4a7df4: 0xa05, _0x24dcdc: 0x455, _0xd99840: 0x882, _0x116c73: 0x5b8, _0x3978fa: 0x482, _0x330727: 0x283, _0x31cd48: 0xac1, _0x56e119: 0x7b8, _0x2ec5a: 0x524, _0x3a2b19: 0x295, _0x68b0da: 0x2b0, _0x1aa375: 0x4aa, _0x1e2f1e: 0xaa3, _0x9224e5: 0x36c, _0xd71929: 0xb79, _0x3144db: 0x2a8, _0x26d355: 0x97f, _0x522181: 0xa21, _0x5e34bb: 0x3a8, _0xc45216: 0xbcb, _0xbc2e13: 0x7c6, _0x3f4401: 0xb9c, _0x50030d: 0x1b0, _0x22956c: 0x894, _0x264207: 0x6a0, _0x3ef110: 0x3c2, _0x560db9: 0x38c, _0x4e8a99: 0xa57, _0x4fe811: 0xb89, _0x330bab: 0x51e, _0x1d208f: 0x50a, _0x28d54c: 0x4c0, _0x5e444f: 0x604, _0x1f8cbe: 0x7a5, _0x102d8c: 0xa32, _0x1c1b4d: 0x548, _0x40c775: 0x370, _0x5cc482: 0x444, _0x4a81df: 0x7c8, _0x519cc7: 0xa8b, _0x83a0c4: 0x36d, _0x39f02c: 0xa36, _0x30514f: 0x1fd, _0x4e9040: 0x6e9, _0x3a3a41: 0x9a5, _0x33fd65: 0x3bb, _0x165e04: 0x2ec, _0x5c3e8f: 0x364, _0x198287: 0x736, _0x107767: 0x31a, _0x107aa8: 0x75d, _0x586539: 0x2c0, _0x51c50a: 0xacf, _0x4fe064: 0x4b6, _0x55d265: 0xa3e, _0x2af9a1: 0x33d, _0x37a84b: 0x581, _0xc88cc: 0x425, _0x1400d8: 0xb07, _0x35025: 0x3d3, _0x188322: 0x5e4, _0x5b38df: 0x4c3, _0x146506: 0x85d, _0x49868a: 0xbfc, _0x2998bf: 0x864, _0xb6b498: 0x667, _0x20f428: 0xbb2, _0x57e6ab: 0x18f, _0x2e8269: 0xbab, _0x15b9b2: 0x1ed, _0x193978: 0x2e4, _0xc6444b: 0x1e7, _0x132ea1: 0x402, _0x22e011: 0x465, _0x3a84df: 0x377, _0x1f10f1: 0x192, _0x127f30: 0xa60, _0x52bae: 0x2ce, _0x22c9a6: 0x96c, _0x5ce6d8: 0xaab, _0x1ce7f4: 0x18a, _0x418d0a: 0xa4b, _0x5e099a: 0x2b8, _0x3c9f1e: 0x2b7, _0x2e4c78: 0x414, _0x297a2a: 0x50e, _0x2f9dbf: 0x232, _0x539f84: 0x74d, _0x19f384: 0x964, _0x267f44: 0x9f6, _0x464957: 0xb1f, _0x30de45: 0x91c, _0x146060: 0x733, _0x5c08c9: 0x9e7, _0xc58866: 0x27b, _0x3c20e7: 0x249, _0x1bb082: 0x30e, _0xd90239: 0xa4a, _0x472231: 0x3ef, _0x346d3f: 0x860, _0x1afbd9: 0x2ae, _0x2960f8: 0x71d, _0x25c914: 0x45a, _0x331088: 0x59f, _0x662817: 0x86d, _0x4e0b47: 0x4b9, _0x5c5097: 0x744, _0x347a5a: 0x778, _0xc00ab5: 0x369, _0xf483fe: 0x974, _0xe4b0bc: 0x9ef, _0x1055d5: 0xabe, _0x193261: 0x840, _0x10e5dd: 0xaa1, _0x5df905: 0x298, _0x378ac3: 0x5eb, _0x843028: 0x246, _0x12bd65: 0x1b4, _0x1b595a: 0x6ee, _0x333dc2: 0x939, _0x23d0cc: 0x863, _0x323dd4: 0x692, _0x1dcebc: 0x899, _0x3f2d05: 0x84d, _0x56ceca: 0x97a, _0x182d06: 0x29e, _0x1b362b: 0x307, _0x4523d2: 0x300, _0x412fa9: 0x8fb, _0x50e88b: 0x5da, _0x3ba85f: 0x443, _0x26fc13: 0x5cd, _0x1c581c: 0x2d2, _0x3adfe3: 0x332, _0x483f3a: 0xae6, _0x39fdf7: 0x4d6, _0x2c6991: 0x416, _0x3b5eae: 0xab0, _0x42d969: 0x51a, _0x560220: 0xbc9, _0x316261: 0x69e, _0x367ced: 0x8cd, _0x2b4cc2: 0xb95, _0xa2e44a: 0x484, _0x4d4487: 0xb60, _0x27613d: 0x191, _0x30f715: 0x5a7, _0x1bb86a: 0x89e, _0x31ff8e: 0x699, _0xa9452b: 0x363, _0x21ba4: 0x9a4, _0x1a3f81: 0xbd6, _0x29bee6: 0x6c4, _0xd449cc: 0x930, _0x5e88f8: 0x594, _0x1352ac: 0x474, _0x1ae896: 0xb8b, _0x31de00: 0x9ad, _0x13d8e5: 0x22e, _0x1d663d: 0xa2d, _0x52893b: 0x372, _0x575a5a: 0x868, _0x26ba2d: 0x2a6, _0x18f199: 0x90c, _0x42b9d7: 0x77e, _0x322913: 0x74b, _0x47180f: 0x537, _0x42eea1: 0x877, _0x327c0b: 0x3e8, _0x35d13c: 0x3dc, _0x438377: 0xa81, _0x356919: 0x74e, _0x2dd0db: 0x5a9, _0x9d59a9: 0x879, _0x4a51de: 0x397, _0x46d24c: 0x5c0, _0x3b7ace: 0x616, _0x17d418: 0x95f, _0x5387c7: 0x773, _0x48eff8: 0x841, _0x35b16a: 0xb5a, _0x46fbe1: 0x7e2, _0x2af1cf: 0x260, _0x6e1c66: 0x2ba, _0xd7ef8d: 0x4b4, _0x5f192e: 0x21d, _0x1f1a17: 0xb62, _0x38d739: 0x769, _0x44d1b8: 0x256, _0xe9830a: 0xba2, _0xfeff2: 0x39e, _0x5e3cec: 0x7ce, _0x4f0081: 0x415, _0x3e2e64: 0x73c, _0x152104: 0x832, _0x1bdab3: 0x203, _0x18ed12: 0x7b5, _0x4f163b: 0x44d, _0x543889: 0x85c, _0x577636: 0xaac, _0x261e98: 0x3bd, _0x3fc9d7: 0x530, _0x3885e8: 0x423, _0x3c2558: 0xb16, _0x4fc3a6: 0x6b7, _0x49464f: 0x3df, _0x56cee6: 0x622, _0x2a8b84: 0xbd2, _0x1f7e64: 0x7d6, _0x293ac5: 0x24d, _0x4fb62d: 0x9d7, _0x8eef9e: 0x53f, _0x4f516a: 0x8f4, _0x4771dc: 0x38a, _0xa5bfad: 0xa52, _0xb81c8f: 0xab3, _0x4929ae: 0x742, _0x3a4ccd: 0x636, _0x2e84bb: 0x7b9, _0x194bad: 0xb48, _0x1117d3: 0x4ab, _0xa7d0da: 0x264, _0x34c4a2: 0x213, _0x14f271: 0x6a3, _0x25267d: 0x2ad, _0x134764: 0xb06, _0x46926c: 0x8c0, _0x3c31de: 0x829, _0x41ebb4: 0x52d, _0x3affa2: 0x343, _0x437f0b: 0x349, _0x3f0743: 0x9ed, _0x4b32b6: 0x7a9, _0x1a13cc: 0x72b, _0x3c3100: 0x683, _0x519a5e: 0x3ac, _0xe51999: 0x4e4, _0x4ba2d3: 0x1ad, _0x29cbfb: 0xbb7, _0x40c153: 0xb9a, _0x322602: 0xade, _0x548aa9: 0xa17, _0x3e6732: 0x248, _0x1a2148: 0x8bd, _0x10b6bc: 0x765, _0x53296a: 0x2b3, _0x536603: 0x43f, _0x15194f: 0x61f, _0x211751: 0x20e, _0x5670ec: 0x4c4, _0x5332be: 0x805, _0x49eaf5: 0x32f, _0x3a3638: 0x72c, _0x4b3bb9: 0x2f8, _0xdbb7dc: 0x7a0, _0x1cb75b: 0xba6, _0x5035ed: 0x376, _0x29c30f: 0x24e, _0x3d8b52: 0x78f, _0x442ab7: 0x867, _0x2ebef6: 0x1d0, _0x509702: 0x891, _0x5c06d4: 0x6ea, _0xd1bf7: 0x630, _0x2b47e6: 0x2c9, _0x1dd7b7: 0x21b, _0x31b8f5: 0xa9c, _0x584ee3: 0x640, _0x25ca30: 0x68f, _0x18589b: 0x5dc, _0x24f08a: 0x870, _0x2d0dfe: 0x50d, _0x4e55c5: 0x775, _0x2baad5: 0x567, _0x26fe1b: 0x6a1, _0x50d65f: 0xabb, _0x4b9609: 0x8f9, _0x4092a2: 0x1a5, _0x299e35: 0xa5d, _0x4347c4: 0xa1e, _0x2828b1: 0x37a, _0x2385b4: 0x735, _0x2f3c27: 0x7f7, _0x2db80c: 0xaee, _0x4ed154: 0x470, _0x519caf: 0x1f2, _0x1192a8: 0xb3d, _0x18c6ee: 0x58b, _0x15fbb4: 0x67e, _0x59dc84: 0x722, _0x558df0: 0x5d7, _0x5686f0: 0xa94, _0x3e325a: 0x41f, _0x54e4f1: 0x62f, _0x472ee5: 0x65b, _0x1c8a9e: 0xa71, _0x199406: 0x3cd, _0x5d4036: 0x7c7, _0x44613a: 0x8eb, _0x34311c: 0x75a, _0xd94e83: 0xbf4, _0x5e0436: 0x252, _0x56b93b: 0x93f, _0x52909e: 0x2cf, _0x527f7a: 0xae1, _0x32469a: 0x774, _0x361de5: 0x642, _0x15d836: 0xa95, _0x8cd92f: 0x79a, _0x2e9b7e: 0x48c, _0x564547: 0x34b, _0x25b9ff: 0x279, _0x3c9a17: 0x890, _0x57048c: 0x2db, _0x34d6d8: 0x207, _0x1f6a9f: 0x89b, _0x859413: 0x24a, _0x6b2006: 0x41c, _0x787bb4: 0x504, _0xcd2cbf: 0x45e, _0x33fe48: 0x197, _0x2b9e1f: 0x582, _0x137d48: 0xb66, _0x4ee385: 0xb8e, _0x3fd579: 0x536, _0x31bde6: 0xba0, _0x39ccb7: 0xb02, _0x3edc81: 0x19a, _0x370ba8: 0x25e, _0x4aaea5: 0xa45, _0x38ce99: 0x779, _0x2ac4e0: 0xa2a, _0x2941e5: 0x9ec, _0x37dc2d: 0x756, _0x158cb9: 0x190, _0x448770: 0x4e5, _0x197fd2: 0x547, _0x219598: 0x322, _0x1dc466: 0x7ff, _0x22264e: 0x9ab, _0x27e600: 0x485, _0x3b8cfa: 0xbeb, _0x12e696: 0xbca, _0x3926aa: 0x589, _0x1af92d: 0x663, _0x399649: 0x3bc, _0x210148: 0x1ac, _0x30d6cd: 0x84f, _0x175ea3: 0x4a0, _0x756e7: 0x4db, _0x452116: 0x2fe, _0x121aa7: 0x9bc, _0x21eae6: 0x843, _0x2e1576: 0x6cd, _0x428af6: 0xb54, _0x476180: 0x45f, _0x3c29e9: 0x871, _0x48aaae: 0x37f, _0x56958e: 0x6eb, _0x4d57b5: 0x6ca, _0x5340f: 0x78b, _0x466e09: 0x62b, _0x468116: 0xbce, _0x31bca9: 0x1f5, _0x5482c3: 0x235, _0x3e85f1: 0x2d1, _0xbef29d: 0x750, _0x585e5b: 0x82f, _0x4faf26: 0xa9e, _0x521dae: 0x2d4, _0x17bd93: 0x2cd, _0x5175cf: 0x2e0, _0x5944bc: 0x698, _0x6b2d21: 0x18b, _0x3907a9: 0xbbb, _0x1c7fe3: 0x541, _0x97d920: 0x675, _0x32e192: 0x495, _0x3354f2: 0x827, _0x4520c7: 0x680, _0x59efdd: 0x66d, _0x2425a8: 0x902, _0x38265e: 0x853, _0x15445b: 0x78c, _0x347597: 0x1e8, _0x17bdf0: 0x9b0, _0x5f494f: 0x98b, _0x5dda4c: 0x7f0, _0x1ff7fb: 0x6e7, _0x5a154b: 0xb18, _0x433052: 0x20a, _0x4422f5: 0x453, _0x52f5e9: 0x73a, _0x34a093: 0x72e, _0x7c62af: 0xa7f, _0x482359: 0x7a4, _0x65a6c8: 0x7e5, _0xeb6873: 0x4df, _0x14201f: 0xb14, _0x5b3614: 0xac0, _0x288034: 0xbdc, _0xae8c9a: 0xaec, _0x5533a8: 0x665, _0x418488: 0x821, _0x3ed1d6: 0xa42, _0x48ef2f: 0x5c4, _0x310714: 0x691, _0x59398b: 0x92e, _0x4338e5: 0x4c2, _0x352227: 0xa61, _0x3c1d84: 0x7a2, _0x4f5be7: 0x7b4, _0x4201a3: 0x4cb, _0x69aea8: 0x247, _0x98626e: 0x6bc, _0x46cd72: 0x1c9, _0x9fc9a2: 0x8ca, _0x58e61f: 0x68b, _0x18d657: 0x1ff, _0x1c15f0: 0x865, _0x1cc64d: 0x215, _0x5c0f49: 0x96e, _0x3c03d6: 0x8c3, _0x42d87b: 0xaaf, _0x3411eb: 0x855, _0x1affdb: 0xaf4, _0xd8934c: 0x61e, _0x9adb3b: 0x54b, _0x2b9954: 0x9e1, _0x3ae276: 0x22c, _0x2692ff: 0x5af, _0x39785a: 0xb33, _0x530e19: 0x266, _0x142271: 0x798, _0xe87297: 0xba9, _0x3f0316: 0xaa0, _0x35a921: 0x212, _0x399078: 0x857, _0x50a2d8: 0x236, _0x4e4f2c: 0x81e, _0x4a1432: 0xa76, _0x454a65: 0x99e, _0x52f91d: 0xbe8, _0xa5bc27: 0x737, _0x5c22eb: 0x421, _0x152394: 0x48f, _0x59d857: 0x969, _0x53acd2: 0x1ab, _0x124d04: 0x5d0, _0x553344: 0x517, _0x450fa1: 0x919, _0x1b174e: 0xbd8, _0xfdd048: 0x75c, _0x9fca6a: 0x394, _0xd3b622: 0xa49, _0x5bb110: 0xbbc, _0x31c3fb: 0x561, _0x58e5aa: 0x18e, _0x839822: 0x9c3, _0x570a87: 0xa9f, _0x11e5fc: 0x53c, _0x20d36b: 0x37c, _0x502244: 0x989, _0x4539c5: 0xa75, _0x2ac489: 0x28a, _0x5d5c97: 0x38e, _0xf77d31: 0x5bb, _0x412c5f: 0x5b3, _0xb43401: 0x285, _0x59645e: 0x7b3, _0x65c895: 0x888, _0x16c4ff: 0xa3a, _0x5aa01f: 0x293, _0x20331d: 0x3f3, _0x1d0d09: 0x7f1, _0xfaa83b: 0x36a, _0x58b547: 0x6aa, _0x3fd953: 0x9f5, _0x500279: 0x5e6, _0x55bae4: 0x3d1, _0x1e4884: 0x782, _0x14dcb4: 0x261, _0x2d5b55: 0xa33, _0x2af40c: 0xa9a, _0x32a913: 0x7d4, _0x3887df: 0x83f, _0x275b07: 0x6a6, _0x2708d4: 0x216, _0x3b6e77: 0x3b7, _0x382a60: 0x628, _0x1a58f5: 0x995, _0x41aeec: 0x31e, _0x56b181: 0x854, _0x423ac5: 0x650, _0x515534: 0x512, _0x37de98: 0x84e, _0x15cc54: 0xa11, _0x1d1412: 0x2f1, _0x4a1b2c: 0x944, _0xbadaf5: 0x2fa, _0x76ef5: 0x6cf, _0xc4f8b2: 0x5df, _0x5f3f19: 0xab9, _0x569f6f: 0x4f0, _0x4b9b67: 0x510, _0x5cfc0d: 0x908, _0x36d164: 0x617, _0x252879: 0x3ee, _0x4c8bac: 0x666, _0xcda905: 0x20d, _0x440786: 0x61d, _0x594f8c: 0x28b, _0x5d6822: 0x7bd, _0x3e2be8: 0x569, _0x1f61cb: 0x6bd, _0x5f637e: 0x28b, _0x314b7b: 0x200, _0x5c05f5: 0x849, _0xf3618b: 0x5b7, _0x25ecfe: 0x991, _0x5543b8: 0x85b, _0x5ad052: 0x90b, _0x9489e4: 0x94d, _0x31d19f: 0x611, _0x57e89e: 0x1dc, _0x25d402: 0x7f6, _0x1dfe24: 0x448, _0x50060e: 0x3e5, _0x17116c: 0x19f, _0x318ee8: 0x745, _0x300cde: 0x625, _0x5e239f: 0x98a, _0x5af948: 0x1dc, _0x471049: 0x1dc, _0x47227f: 0x1dc, _0x3615b8: 0x1dc, _0x267025: 0x2e3, _0x593949: 0x2b4, _0x5daf8d: 0x9d6, _0xc69a08: 0x314, _0x2993c8: 0x1dc, _0x3f7aa9: 0x5ec, _0x1ff225: 0x291, _0x4ac7df: 0x552, _0x327b61: 0xb72, _0x494c79: 0xadd, _0x2c87da: 0x566, _0x28024d: 0x1dc, _0x137b3d: 0x1dc, _0x3dc4c2: 0x4b7, _0x5dfa3a: 0x66b, _0x1e6b6b: 0x1dc, _0x772ff2: 0x24f, _0x469d87: 0x4d5, _0x58b3ea: 0x4a3, _0x210fb7: 0x1dc, _0xfa6ae6: 0x1bc, _0x42bc74: 0x84b, _0x69f88a: 0x76b, _0x288310: 0xbee, _0x22972f: 0x1dc, _0x3da92e: 0xb73, _0x205900: 0xa51, _0x4b37cb: 0x1dc, _0x22cedb: 0x1dc, _0x91ff89: 0x345, _0x5711b7: 0x263, _0x1fc6bc: 0x1dc, _0x2ae06f: 0x28b, _0x582769: 0xa0c, _0x31181b: 0x6d8, _0x46ad59: 0x1dc, _0x3a1464: 0x477, _0x4cf215: 0x1dc, _0x134419: 0x796, _0x1212fd: 0x1dc, _0x3dc484: 0x4dd, _0x37266c: 0xb57, _0x1a50ed: 0x1cf, _0x5512da: 0x1dc, _0x18a38f: 0x1dc, _0x104293: 0x253, _0x3b8d29: 0x659, _0x2e7a95: 0x8d5, _0x25b6a8: 0xa37, _0x153109: 0x635, _0x297508: 0x1dc, _0x4de54f: 0x1dc, _0xe5e5a1: 0x7d5, _0x366eaa: 0x1f0, _0x2c4367: 0x251, _0x61876: 0x712, _0x31aa66: 0x657, _0x3a2b7a: 0x53b, _0x40f315: 0xae7, _0x4a5902: 0x1dc, _0x5d1d99: 0x716, _0xc605e4: 0x9a0, _0xbc1012: 0x1dc, _0x34a6db: 0x1dc, _0xce8373: 0x1dc, _0x2681ae: 0x4b8, _0x2c1e80: 0x1dc, _0x4b6c74: 0x5be, _0x43b301: 0x7c3, _0x3a1b26: 0xabf, _0xddb312: 0x77c, _0x262ce4: 0xa13, _0x3520ed: 0xac2, _0x3210d6: 0x40a, _0x13cead: 0xb25, _0x4e5be8: 0x1dc, _0x1d17a3: 0x1dc, _0x11632a: 0x1dc, _0x4f4a9f: 0x46e, _0x11075a: 0xbe9, _0x5805e9: 0x4a5, _0x19e09c: 0x643, _0x47a120: 0xabf, _0xb3fbb0: 0x1dc, _0x47782b: 0x1e0, _0x423b8b: 0x3fd, _0x20c38f: 0x64c, _0x254b42: 0x1dc, _0x450e4d: 0x1dc, _0x12cee3: 0x681, _0x5959c7: 0x1dc, _0x32ff05: 0xb75, _0x13526f: 0x428, _0x4b3d0a: 0x614, _0x35e98f: 0x997, _0x169632: 0x1dc, _0x33cab0: 0x1dc, _0xe60406: 0x8c8, _0x11ff2e: 0x508, _0x268b06: 0x1dc, _0x1105df: 0x1dc, _0x49f739: 0xb6b, _0x1e2cd0: 0xb76, _0x465ad4: 0x463, _0x341500: 0x448, _0x4ba2bd: 0x30f, _0x2c0db5: 0x1dc, _0x4e0366: 0x28b, _0x24907b: 0x7c1, _0x1e2fb8: 0xbb0, _0x57a868: 0xb4e, _0x4fe5b8: 0x1dc, _0x36bfe2: 0x1dc, _0x4151d6: 0x8b3, _0x386867: 0x313, _0x2757c5: 0x741, _0x247867: 0x1dc, _0x480e60: 0xad6, _0x10057a: 0x948, _0x5be4dd: 0x1dc, _0x143732: 0x1dc, _0x1d1258: 0x1dc, _0x3c4de9: 0x8e5, _0x4144ae: 0x52f, _0x5d6ccc: 0xa87, _0x2c3892: 0x960, _0x202338: 0x731, _0x5e4ec7: 0x1dc, _0x4db4d7: 0x2d6, _0x4cdad3: 0x1dc, _0x56bc55: 0xb8a, _0x46e306: 0x1dc, _0x2ca393: 0x7b1, _0x4b1604: 0x76c, _0x1810c8: 0x1dc, _0x184f07: 0xa43, _0xf45df1: 0x7db, _0x25736f: 0x88e, _0x3ab98a: 0x407, _0x3c1faa: 0x1dc, _0x741eab: 0x961, _0x274a90: 0x9de, _0x11aa91: 0x1dc, _0xaf036: 0x1dc, _0x4069ee: 0x1dc, _0x3efa1c: 0x1dc, _0x413f52: 0x54f, _0x19b9ca: 0x8a1, _0x2cf084: 0x1dc, _0x4d389c: 0x1d9, _0x54ec03: 0x1dc, _0x4e7b34: 0x189, _0x400a6a: 0x1dc, _0x34fa83: 0x1dc, _0x431f7f: 0x89a, _0x5626eb: 0x1dc, _0x362b8b: 0x940, _0x266d76: 0x1dc, _0xb27a6: 0x550, _0x128e74: 0x1bc, _0x4aab8c: 0x70e, _0x168882: 0x1dc, _0x4bbdce: 0x8f3, _0x38ed72: 0xbd4, _0x1611c7: 0x1dc, _0x303353: 0x1dc, _0x5954bb: 0xb26, _0x15ede3: 0x26e, _0x5e9924: 0x8fc, _0x170501: 0x46c, _0xc31daf: 0xaef, _0x462d33: 0x1dc, _0x49d6a4: 0x558, _0x57e89a: 0x1da, _0xeedda5: 0x2be, _0x343c59: 0x47d, _0x2ccb35: 0x8bb, _0x183d14: 0x93c, _0x1bc2c7: 0x1c0, _0x227ca5: 0x67f, _0x2a53e9: 0x5b1, _0x3e02d7: 0xa3b, _0x3c0235: 0x689, _0x351e14: 0x1dc, _0x790858: 0x1dc, _0x81110a: 0xa64, _0x1560d8: 0x4ad, _0x709cb2: 0x269, _0x2b4799: 0x1dc, _0x1c8b38: 0x1dc, _0x394691: 0x5a4, _0x18272e: 0x6b2, _0xad1f65: 0x23b, _0x19c7a2: 0x1dc, _0x2c986b: 0x783, _0x3c495e: 0x4ca, _0x5674ad: 0x858, _0xa14a7a: 0x825, _0x5eed07: 0xb09, _0x483bf1: 0x4fd, _0x2affb7: 0x525, _0x4448cf: 0x419, _0x3f5432: 0x44a, _0x864099: 0x9c7, _0x454562: 0x8af, _0x13702f: 0x1dc, _0x567f85: 0x287, _0xb8b212: 0x5f5, _0x339352: 0x1dc, _0x5ddbf5: 0x1dc, _0x3f04e6: 0x1c1, _0x2835ed: 0xbad, _0x79ef57: 0x713, _0x391cf7: 0xb3e, _0x10f8a3: 0x1dc, _0x58d0fc: 0x822, _0x125197: 0x1dc, _0x4e0ca7: 0x386, _0x34b796: 0x98f, _0x3a87a9: 0x24b, _0x5b8b0f: 0x1dc, _0x532621: 0x1dc, _0x148ff2: 0xa6f, _0x3ce0ac: 0x217, _0x321477: 0x9fe, _0x498e13: 0x837, _0x41a3e7: 0xa88, _0x22892c: 0xb1e, _0x1809c7: 0x5fb, _0x26accd: 0x91b, _0x8bca1d: 0x626, _0x5b40b0: 0x8de, _0x5dc82d: 0x2ed, _0x552c0a: 0xaf9, _0x19c0d0: 0x2f6, _0x26fe8e: 0xa12, _0x5cbbea: 0xa78, _0x4621b8: 0x59a, _0x5e7f87: 0xb4d, _0x58c10e: 0x955, _0x55fd09: 0xb50, _0x7dc8b7: 0x743, _0x22b834: 0x4fc, _0x413e6e: 0x99d, _0x24b6fd: 0x1dc, _0x2f6a1b: 0xb68, _0xb2645a: 0x1dc, _0x2b391e: 0x429, _0x3b7ecf: 0x91d, _0x361976: 0x233, _0x249dd8: 0x1dc, _0x5d3961: 0x580, _0x3212ec: 0x1dc, _0x53769b: 0x895, _0x3339cb: 0x3ba, _0x4435b2: 0xb2d, _0x53bf5b: 0x518, _0x333d19: 0x1dc, _0x373d2b: 0xb68, _0x5acc59: 0x866, _0x45e2a2: 0xad9, _0x27a5b7: 0x3ce, _0x17b042: 0xa41, _0x11d458: 0x705, _0x4e938d: 0x3e7, _0x5cd320: 0x2a7, _0x4325a3: 0x78d, _0x6b5b40: 0x31d, _0x102ad1: 0xb87, _0x4be0ac: 0xa62, _0x1cabad: 0x311, _0x281a6a: 0x1dc, _0x39c6cd: 0x76c, _0x2e5aed: 0x7f2, _0x15b748: 0x54c, _0x27b3ea: 0x18c, _0x548726: 0x943, _0x2f210a: 0x7f5, _0x4b1d78: 0x734, _0x46534e: 0x1d4, _0x7bb9a8: 0x619, _0x12b64d: 0x784, _0x3f93d6: 0x31c, _0x25352e: 0xbde, _0x22ff77: 0x29c, _0x27f8c6: 0x1dc, _0x1b8371: 0x781, _0x16bcde: 0x7aa, _0x3fdbfb: 0x7eb, _0x5e5bde: 0x1dc, _0x28df70: 0x1dc, _0x164432: 0x253, _0x25c486: 0xb6e, _0x333200: 0x8dd, _0x10fbaf: 0x4ba, _0x4819c9: 0x814, _0x5d0d1d: 0x8b4, _0x4745e4: 0x638, _0x365b89: 0x634, _0x4c7894: 0xa14, _0x52c441: 0xb27, _0x3a9580: 0x1dc, _0x436f8b: 0x76c, _0x133963: 0x9d9, _0x42d4a4: 0xb63, _0x403adb: 0xadf, _0x6d5b82: 0x1dc, _0x412234: 0x2f3, _0x42722a: 0xa48, _0x402c1e: 0x1dc, _0x3d6613: 0x1dc, _0x1559e7: 0x1d4, _0x2f3881: 0x88f, _0x563c87: 0x1dc, _0x7c0ba2: 0x1dc, _0x3d5fc7: 0x1dc, _0x3d96fc: 0x9b7, _0x50f132: 0x24c, _0x46c341: 0x1dc, _0x2e06fa: 0x583, _0x1e254c: 0x7e9, _0x340124: 0x1dc, _0x2e8206: 0x26b, _0x3c1190: 0x1dc, _0x17b147: 0x4f4, _0x30cd34: 0xb65, _0x2534e5: 0x1dc, _0xa3495d: 0x791, _0x21179c: 0x1dc, _0x1519cc: 0x47c, _0x4302eb: 0x1dc, _0x408895: 0x8a0, _0x205c79: 0x583, _0x52378d: 0x64e, _0x3440f6: 0x1bc, _0x273f71: 0xa35, _0x375bc4: 0x1dc, _0x5ccd54: 0x1dc, _0x185a0c: 0x4da, _0xd1118a: 0xb4f, _0x1b1edc: 0x1dc, _0x3dc008: 0x255, _0xa1034a: 0x1dc, _0x4aed27: 0x8a4, _0x19603b: 0x1dc, _0x2fd452: 0x1dc, _0x27a94f: 0x398, _0x3b19a4: 0x1dc, _0x14b4e6: 0x1bc, _0x590a8c: 0x2e7, _0x4d80eb: 0xb68, _0x520fea: 0x413, _0x2f8b11: 0x1dc, _0x151331: 0x4f3, _0x4954a4: 0x1bc, _0x39f081: 0x1ee, _0x304d77: 0x701, _0x193319: 0x913, _0x2107aa: 0x1dc, _0xc77ec6: 0x696, _0x4f0eaa: 0x1dc, _0x15c743: 0x441, _0x398d18: 0x1dc, _0x4509be: 0x424, _0x5eb72f: 0xbb6, _0xf59f33: 0x276, _0x1862c1: 0x5b2, _0x468f44: 0x6df, _0x4cc266: 0x461, _0xb4ab72: 0xb8c, _0x58758e: 0x1dc, _0x5ef19e: 0x49c, _0x1db600: 0xa63, _0x1c64e9: 0x9e0, _0x38e19c: 0x253, _0x480aa9: 0x1dc, _0x476b0d: 0x9d5, _0x116fca: 0x1dc, _0x2c3c61: 0x41a, _0xfa0002: 0x6b5, _0x56f91c: 0x600, _0x988162: 0x1dc, _0x492ea7: 0xb64, _0x313d02: 0x754, _0x3abcc7: 0x1c2, _0x1d4e52: 0x591, _0x2c77c3: 0x1dc, _0x4f86a1: 0x259, _0x472b3f: 0xbe7, _0x1d3de8: 0x920, _0x57fc24: 0xb0a, _0x44116e: 0x1dc, _0xf38f30: 0x1dc, _0x484f12: 0x21e, _0x1fd390: 0x1dc, _0x17ebff: 0x1aa, _0x11a484: 0x1dc, _0xc5add1: 0x352, _0x57afd7: 0x1dc, _0x41e17c: 0xb78, _0xdc24c6: 0xa9d, _0x251f64: 0xbea, _0xea25af: 0x30c, _0x695ee7: 0x5fa, _0x319bd8: 0x1dc, _0x4216ff: 0x8b4, _0x43317e: 0x946, _0x2dd50c: 0x1dc, _0x35d0ca: 0x58a, _0x1cf7c7: 0xb21, _0x14c491: 0x378, _0x3e405a: 0xa3d, _0x40c35b: 0x91e, _0x10ab8b: 0x3d9, _0x1f6825: 0xb4f, _0x5509ba: 0x8d7, _0xf1f047: 0xb4c, _0x44457b: 0x9be, _0x12d804: 0xacc, _0x5ddf83: 0x317, _0x452249: 0x1dc, _0x2c4af0: 0x1dc, _0x36557e: 0x1ae, _0x21653e: 0x61a, _0xc8088c: 0x93a, _0x432445: 0x614, _0x47cac2: 0x8d0, _0x3a498f: 0x5ac, _0x413a3a: 0x1dc, _0x436b20: 0x1a7, _0x20b69b: 0x4d3, _0xf7f636: 0xbe3 }, _0x5e2cfc = { _0x3f69a1: 0x3ad }, _0x4358b8 = { _0x5d1f4c: 0x6c0, _0x17d52d: 0x306 }, _0x3d85e3 = { _0x557d33: 0x382, _0x4be12b: 0x77a, _0x4367c2: 0x767, _0x5e552d: 0x767 }, _0x270b77 = { _0x2f8557: 0x59b, _0x413633: 0x1b5, _0x542b4b: 0x4a5, _0x19ea15: 0xb55, _0x579b20: 0x509, _0x23c0c7: 0x3ad }, _0x1e5182 = _0x53c4; if (VisualEditorWindow && !VisualEditorWindow['closed']) { if ('XoxEy' !== _0x1e5182(_0x538d4a._0x3b82c2)) { VisualEditorWindow['focus'](); return; } else return; } enableEditorMode(), VisualEditorWindow = window[_0x1e5182(_0x538d4a._0x4d60c1)]('about:blan' + 'k', _0x1e5182(0x4c8), 'width=900,' + 'height=700'); if (VisualEditorWindow) { VisualEditorWindow['document']['write']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<head>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<tit' + _0x1e5182(0x694) + 'Builder</t' + _0x1e5182(_0x538d4a._0x1b56da) + _0x1e5182(0x1dc) + '\x20\x20<style>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '*\x20{\x20box-si' + _0x1e5182(0x595) + _0x1e5182(_0x538d4a._0x2f762c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20p\x20{\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + 'argin-top:' + '\x200;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20:ro' + _0x1e5182(0x358) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20-' + '-bg:\x20#1e3a' + '2f;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + 'surface:\x20#' + _0x1e5182(0x403) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20--surfac' + _0x1e5182(0x40e) + _0x1e5182(_0x538d4a._0x24265f) + _0x1e5182(_0x538d4a._0x490c1d) + '\x20\x20\x20\x20\x20\x20\x20\x20--' + _0x1e5182(_0x538d4a._0x3ca6a0) + '\x20#494949;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20--text' + ':\x20#e8e8e8;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xa0bde0) + 't-muted:\x20#' + _0x1e5182(0x5e3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x5f3) + _0x1e5182(_0x538d4a._0x342112) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20--ac' + 'cent:\x20#ff9' + _0x1e5182(0xa0e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20-' + _0x1e5182(_0x538d4a._0x451a0c) + 'ft:\x20rgba(2' + _0x1e5182(0x8f7) + '.15);\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x490c1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '--shadow:\x20' + '0\x202px\x2012px' + _0x1e5182(0x1c4) + _0x1e5182(0x910) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20--shadow' + '-sm:\x200\x201px' + '\x204px\x20rgba(' + _0x1e5182(0x560) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20--ra' + 'dius:\x2014px' + _0x1e5182(_0x538d4a._0x3755c7) + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20\x20\x20\x20--ra' + _0x1e5182(0xb1b) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + _0x1e5182(_0x538d4a._0x108cda) + _0x1e5182(0x8b1) + _0x1e5182(0x999) + '-serif;\x0a\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x660) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb94) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20font-fa' + 'mily:\x20var(' + '--mono);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x3f6) + _0x1e5182(0x599) + '-bg);\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + 'color:\x20var' + _0x1e5182(_0x538d4a._0x25f40c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20min-he' + _0x1e5182(0x4d4) + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + _0x1e5182(_0x538d4a._0x1856f6) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x4f81ab) + 'in:\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20font-size' + _0x1e5182(_0x538d4a._0xa87a1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x527) + 'font-smoot' + 'hing:\x20anti' + 'aliased;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20body::bef' + 'ore\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'content:\x20\x27' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x74a) + 'ition:\x20fix' + 'ed;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20\x20\x20\x20\x20\x20\x20\x20to' + 'p:\x200;\x20left' + ':\x200;\x20right' + ':\x200;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + 'eight:\x2050v' + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20bac' + _0x1e5182(_0x538d4a._0x334128) + 'lor:\x20#0d22' + '18;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground-i' + 'mage:\x20line' + 'ar-gradien' + 't(135deg,\x20' + _0x1e5182(0x7d9) + '%,\x20transpa' + 'rent\x2025%),' + '\x20linear-gr' + 'adient(225' + 'deg,\x20#0612' + '09\x2025%,\x20tr' + _0x1e5182(0x3f0) + _0x1e5182(_0x538d4a._0x2ae435) + _0x1e5182(0x1d3) + 't(45deg,\x20#' + _0x1e5182(_0x538d4a._0x23903b) + ',\x20transpar' + 'ent\x2025%),\x20' + _0x1e5182(0x33e) + 'dient(315d' + 'eg,\x20#06120' + _0x1e5182(0xbfd) + '2218\x2025%);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + 'round-posi' + 'tion:\x2039px' + _0x1e5182(0x9f4) + ',\x200\x200,\x200\x200' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52aa7b) + 'ground-siz' + 'e:\x2039px\x2039' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground-r' + _0x1e5182(_0x538d4a._0xeeaa40) + _0x1e5182(_0x538d4a._0x50f62f) + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20o' + _0x1e5182(_0x538d4a._0x6675f1) + '25;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20-w' + _0x1e5182(0x42b) + _0x1e5182(0x63b) + _0x1e5182(_0x538d4a._0x350ca8) + 'ent(to\x20bot' + _0x1e5182(0x542) + _0x1e5182(0xb5f) + 'parent\x2030%' + _0x1e5182(_0x538d4a._0x2bf676) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x759) + 'k-image:\x20l' + _0x1e5182(_0x538d4a._0xcad18b) + _0x1e5182(0xbc7) + 'ttom,\x20blac' + 'k\x200%,\x20tran' + _0x1e5182(_0x538d4a._0x1c2b46) + _0x1e5182(_0x538d4a._0x4ffce3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20po' + 'inter-even' + 'ts:\x20none;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbc5) + 'x:\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x1e5182(0x842) + 't-scrollba' + 'r\x20{\x20width:' + _0x1e5182(0x43d) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'dy::-webki' + 't-scrollba' + _0x1e5182(0xb98) + 'background' + ':\x20transpar' + 'ent;\x20}\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x97d) + 'y::-webkit' + '-scrollbar' + '-thumb\x20{\x20b' + 'ackground:' + _0x1e5182(0x602) + 'der-radius' + _0x1e5182(0x3a5) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x59f6c0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '.container' + _0x1e5182(_0x538d4a._0x2e4bc9) + 't,\x20.main-c' + _0x1e5182(_0x538d4a._0x823c4) + 'osition:\x20r' + 'elative;\x20z' + '-index:\x201;' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x46c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20.conta' + _0x1e5182(_0x538d4a._0x8e95d6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x2bf40c) + _0x1e5182(0x1d7) + 'surface-2)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1d6) + 'width:\x20122' + '0px;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + 'argin:\x200\x20a' + 'uto;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'order-radi') + ('us:\x2020px;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x7da) + 'g:\x2018px;\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20box-sha' + 'dow:\x20var(-' + '-shadow);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x326) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1f4) + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20.header' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pos' + 'ition:\x20rel' + 'ative;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20text-alig' + _0x1e5182(_0x538d4a._0x44b2eb) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20margi' + _0x1e5182(0x6f2) + _0x1e5182(0x5f7) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + _0x1e5182(_0x538d4a._0x490c1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + _0x1e5182(_0x538d4a._0x777e2e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'ext-align:' + '\x20center;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x949) + 'ze:\x2020px;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20font-w' + 'eight:\x20600' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + _0x1e5182(0x3db) + 'ext);\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'letter-spa' + 'cing:\x20-0.3' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ma' + _0x1e5182(0x23e) + 'm:\x202px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4a3e5d) + '\x20.credit\x20{' + _0x1e5182(_0x538d4a._0x2d2fca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20text-' + 'align:\x20cen' + 'ter;\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'color:\x20var' + _0x1e5182(_0x538d4a._0x1feb00) + 'ted);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + 'font-size:' + '\x2011px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb82) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4a3e5d) + '.credit\x20a\x20' + _0x1e5182(_0x538d4a._0x1f5405) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + 'r:\x20var(--a' + _0x1e5182(_0x538d4a._0x434285) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa67) + _0x1e5182(0xa02) + 'one;\x20\x0a\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + _0x1e5182(0x1fa) + 'over\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20text-deco' + 'ration:\x20un' + 'derline;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x614) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20.hint\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20font-s' + 'ize:\x2011px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + ':\x20var(--te' + 'xt-muted);' + _0x1e5182(_0x538d4a._0x2d2fca) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x5c3e1c) + _0x1e5182(0x6f2) + '14px;\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa68) + 'px\x2014px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20backgro' + 'und:\x20var(-' + _0x1e5182(0x9c2) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20borde' + 'r-radius:\x20' + _0x1e5182(_0x538d4a._0x2473b9) + 'us-sm);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2455d2) + '\x20\x20text-ali' + 'gn:\x20center' + _0x1e5182(_0x538d4a._0x17e9df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20box-' + 'shadow:\x20va' + _0x1e5182(0x73e) + '-sm);\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x49e3f9) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'toolbar\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20displa' + 'y:\x20flex;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2d4587) + _0x1e5182(_0x538d4a._0x362dd3) + _0x1e5182(_0x538d4a._0x1605de) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x335e6c) + 'rgin-botto' + _0x1e5182(_0x538d4a._0x180958) + _0x1e5182(_0x538d4a._0x490c1d) + _0x1e5182(0x1dc) + '\x20\x20\x20justify' + '-content:\x20' + _0x1e5182(0xa7e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4ea4dc) + _0x1e5182(_0x538d4a._0x4990c1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20positio' + _0x1e5182(_0x538d4a._0x44efa0) + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20z-i' + 'ndex:\x201;\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x590b07)) + (_0x1e5182(0xa91) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x4502cd) + _0x1e5182(0xa2e) + _0x1e5182(_0x538d4a._0x3ca73d) + _0x1e5182(_0x538d4a._0x11cd1d) + 'order-radi' + _0x1e5182(0xb20) + 'radius-sm)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x39d56e) + '\x20\x20\x20\x20\x20\x20curs' + 'or:\x20pointe' + 'r;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb0f) + _0x1e5182(0x1c7) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x13888c) + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-weight:' + '\x20600;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-famil' + 'y:\x20var(--m' + 'ono);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding:\x208' + 'px\x2016px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20transit' + 'ion:\x20opaci' + _0x1e5182(0x37d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20backgr' + 'ound:\x20var(' + _0x1e5182(_0x538d4a._0xf66875) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbf2) + ':\x20#fff;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x1e5182(_0x538d4a._0x4a3e5d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20.toolbar-' + _0x1e5182(0xb67) + _0x1e5182(_0x538d4a._0x1f5405) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20opac' + 'ity:\x200.85;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x305d2d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x758) + 'ar-btn.act' + _0x1e5182(0x265) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x118022) + ':\x20var(--ac' + 'cent);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20color:\x20#f' + _0x1e5182(_0x538d4a._0x2f2acf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20op' + _0x1e5182(0xa89) + _0x1e5182(0x4d5) + _0x1e5182(_0x538d4a._0x44d37f) + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x478) + _0x1e5182(_0x538d4a._0x4ac72d) + '\x20\x20\x20\x20\x20.main' + _0x1e5182(_0x538d4a._0x4d9822) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52f77f) + '\x20\x20\x20\x20\x20displ' + 'ay:\x20flex;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20gap:\x201' + '5px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20.s' + _0x1e5182(_0x538d4a._0x2eea0f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20width:\x20' + _0x1e5182(_0x538d4a._0x3774da) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1a1) + 'd:\x20var(--s' + _0x1e5182(0xbc8) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20border-' + 'radius:\x20va' + 'r(--radius' + _0x1e5182(_0x538d4a._0x2bf676) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding:\x2014px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20box-' + 'shadow:\x20va' + 'r(--shadow' + '-sm);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x25549a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'content-pa' + _0x1e5182(0x5e5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52f77f) + 'flex:\x201;\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x3f6) + 'und:\x20var(-' + '-surface);' + _0x1e5182(_0x538d4a._0x2d2fca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20borde' + 'r-radius:\x20' + 'var(--radi' + 'us);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x128cf9) + _0x1e5182(0x9b2) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1729ae) + _0x1e5182(0xa34) + _0x1e5182(0x6f7) + 'ow-sm);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2d2fca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20.section-' + 'header\x20h3\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20marg' + 'in:\x200\x200\x2012' + 'px\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x74c) + _0x1e5182(0x38b) + 'ted);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x374c42) + '\x2010px;\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2d4587) + _0x1e5182(0x1dc) + '\x20font-weig' + 'ht:\x20600;\x0a\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20letter-' + 'spacing:\x200' + '.8px;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + 'text-trans' + 'form:\x20uppe' + 'rcase;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20text-alig' + _0x1e5182(_0x538d4a._0x548d61) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20border-') + (_0x1e5182(_0x538d4a._0x543cfc) + 'x\x20solid\x20va' + 'r(--surfac' + 'e-3);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding-bo' + _0x1e5182(0xa03) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x5fe) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20.scro' + 'llable-lis' + 't\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x934) + 'x-height:\x20' + '500px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x6e4682) + 'y:\x20auto;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x34e0aa) + 'w-x:\x20hidde' + _0x1e5182(0x598) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding-right' + ':\x205px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x788) + 'e-list::-w' + 'ebkit-scro' + 'llbar\x20{\x20wi' + 'dth:\x204px;\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20.scrolla' + 'ble-list::' + _0x1e5182(_0x538d4a._0xb107e5) + _0x1e5182(_0x538d4a._0x5db5c2) + _0x1e5182(_0x538d4a._0x13bb5d) + _0x1e5182(0x62d) + _0x1e5182(_0x538d4a._0x51e470) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20.scroll' + _0x1e5182(_0x538d4a._0x34495a) + ':-webkit-s' + _0x1e5182(_0x538d4a._0x16c50a) + 'humb\x20{\x20bac' + 'kground:\x20#' + '444;\x20borde' + _0x1e5182(0x229) + _0x1e5182(0xaf5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x127c5e) + 'ist-item\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x950) + _0x1e5182(0x36b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20align-' + _0x1e5182(0xa8e) + 'ter;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3860da) + _0x1e5182(0xb3c) + 'argin-bott' + 'om:\x208px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20padding' + ':\x2010px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb85) + 'nd:\x20var(--' + 'surface-2)' + _0x1e5182(_0x538d4a._0x4ca4e1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + 'er:\x201.5px\x20' + 'solid\x20var(' + _0x1e5182(0xb9d) + _0x1e5182(_0x538d4a._0x3e2c69) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x57de39) + 'rder-radiu' + _0x1e5182(0x1db) + 'adius-sm);') + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20curso' + 'r:\x20pointer' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20tran' + 'sition:\x20bo' + 'rder-color' + '\x200.15s,\x20ba' + _0x1e5182(0x92d) + _0x1e5182(0xa40) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x49759b) + _0x1e5182(_0x538d4a._0x2455d2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'list-item:' + 'hover\x20{\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x49e3f9) + _0x1e5182(0x1dc) + '\x20\x20border-c' + 'olor:\x20var(' + '--accent);' + _0x1e5182(_0x538d4a._0x2d2fca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + 'round:\x20var' + '(--surface' + _0x1e5182(0x88c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa0b) + _0x1e5182(0x6e6) + 'ctive\x20{\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x8ba7c5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border-c' + 'olor:\x20var(' + '--accent);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x513ccc) + 'round:\x20var' + '(--surface' + _0x1e5182(0x90d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.l' + 'ist-item-n' + 'ame\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x48db5d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4bb850) + 'var(--text' + _0x1e5182(0x337) + _0x1e5182(_0x538d4a._0x490c1d) + _0x1e5182(_0x538d4a._0x14342b) + _0x1e5182(_0x538d4a._0x488054) + _0x1e5182(0x71b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-weight:' + _0x1e5182(_0x538d4a._0x5a9a39) + _0x1e5182(_0x538d4a._0x52f77f) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x5c9) + _0x1e5182(_0x538d4a._0x31ad45) + 't-btn\x20{\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x2c69eb) + _0x1e5182(0x1dc) + '\x20\x20width:\x202' + '2px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + 'eight:\x2022p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x14d79a) + _0x1e5182(0x7f3) + 'kground:\x20#' + _0x1e5182(_0x538d4a._0x346d54) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20color:\x20#' + 'e05050;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x690) + _0x1e5182(0x5e9)) + (_0x1e5182(0xbcd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xe903c) + 'ius:\x2050%;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20\x20\x20\x20cursor' + ':\x20pointer;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20font-' + _0x1e5182(0x8ba) + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fon' + 't-size:\x2011' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x7cf) + _0x1e5182(0x462) + 'background' + _0x1e5182(0x188) + _0x1e5182(_0x538d4a._0x4a3e5d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20display:' + _0x1e5182(_0x538d4a._0x1d1cd3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20align-ite' + 'ms:\x20center' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20just' + 'ify-conten' + 't:\x20center;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20margi' + _0x1e5182(_0x538d4a._0x63c6fb) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2d4587) + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x34cf12) + _0x1e5182(0x790) + 'tn:hover\x20{' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x4fa) + 'round:\x20#4a' + '2020;\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x2e9cef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'add-slot-b' + 'tn\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + 'idth:\x2022px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20heig' + 'ht:\x2022px;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20backgr' + 'ound:\x20var(' + _0x1e5182(0xb9d) + _0x1e5182(0x7ef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'lor:\x20var(-' + '-text);\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x35eeb1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border:\x20' + '1px\x20solid\x20' + '#555;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + 'border-rad' + 'ius:\x2050%;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x587d21) + ':\x20pointer;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x529307) + '\x20\x20\x20\x20\x20font-' + 'weight:\x2070' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c3b85) + 't-size:\x2014' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + _0x1e5182(_0x538d4a._0xe2c90a)) + (_0x1e5182(0x22b) + '15s;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20d' + 'isplay:\x20fl' + 'ex;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20al' + _0x1e5182(_0x538d4a._0x3e5217) + '\x20center;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x22f) + '-content:\x20' + 'center;\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x140d48) + _0x1e5182(_0x538d4a._0x2b15fd) + _0x1e5182(_0x538d4a._0x528caa) + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + 'ansform:\x20t' + 'ranslateY(' + '-2px);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '.add-slot-' + 'btn:hover\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20opac' + 'ity:\x200.85;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20.field' + '-group\x20{\x0a\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20display' + ':\x20grid;\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x529307) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20grid-tem' + 'plate-colu' + _0x1e5182(0x3d4) + 'fr;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb69) + _0x1e5182(0x844) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x54847c) + '\x20\x20\x20margin-' + 'bottom:\x2012' + _0x1e5182(0x71b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c69eb) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x85a) + 'eld\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + ':\x20transpar' + 'ent;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + _0x1e5182(0x1b1) + _0x1e5182(_0x538d4a._0x2d2fca) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20borde' + _0x1e5182(_0x538d4a._0x441728) + _0x1e5182(_0x538d4a._0x22ca5a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + _0x1e5182(0x5ef) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x791) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x558) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20.fie' + 'ld.full-wi' + 'dth\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + 'grid-colum' + 'n:\x201\x20/\x20-1;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c69eb) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20.field' + '\x20label\x20{\x0a\x20' + _0x1e5182(_0x538d4a._0x3ca73d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20display' + ':\x20block;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + 'bottom:\x203p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2b8c72) + '\x20\x20\x20\x20\x20\x20\x20fon' + 't-weight:\x20' + '500;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'ont-size:\x20' + _0x1e5182(0xb42) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'color:\x20var' + '(--text-mu' + 'ted);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'letter-spa' + _0x1e5182(_0x538d4a._0x1126b8) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x401be9) + _0x1e5182(0x558) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5abc6a) + _0x1e5182(0xb77) + _0x1e5182(_0x538d4a._0x3e7176) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x43debe) + _0x1e5182(_0x538d4a._0x1df0df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'width:\x20100' + _0x1e5182(_0x538d4a._0x21feea) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding:\x205px\x20' + '9px\x20!impor' + _0x1e5182(0x873) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'border:\x201.' + _0x1e5182(_0x538d4a._0x46fb3b) + '#444\x20!impo' + 'rtant;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x46a) + 'dius:\x20var(' + '--radius-s' + 'm)\x20!import' + 'ant;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'ackground:' + '\x20#353434\x20!' + 'important;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x501c78) + ':\x20var(--te' + _0x1e5182(0xa1f) + 'tant;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-size:' + _0x1e5182(0x7e3) + 'ortant;\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x401be9) + _0x1e5182(0x1dc) + '\x20\x20font-fam' + 'ily:\x20var(-' + _0x1e5182(_0x538d4a._0x3885db) + 'portant;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20box-sha' + 'dow:\x20inset' + '\x200\x201px\x203px' + '\x20rgba(0,0,' + '0,0.2)\x20!im' + 'portant;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20transit' + 'ion:\x20borde' + 'r-color\x200.' + '15s;\x0a\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0xd7586) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.f' + _0x1e5182(0x3be) + ':focus,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.f' + 'ield\x20selec' + _0x1e5182(0x5a8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20outlin' + 'e:\x20none\x20!i' + 'mportant;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x3ff) + '-color:\x20va' + _0x1e5182(_0x538d4a._0x5dbeff) + _0x1e5182(_0x538d4a._0xf4527f) + 'nt;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'x-shadow:\x20' + 'inset\x200\x201p' + 'x\x203px\x20rgba' + '(0,0,0,0.0' + '4),\x200\x200\x200\x20' + _0x1e5182(0x623) + _0x1e5182(_0x538d4a._0x4483e0) + 't)\x20!import' + 'ant;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xcd8aca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.e' + 'mpty-state' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20tex' + _0x1e5182(_0x538d4a._0x247a7f) + 'enter;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x282b4d) + '\x20padding:\x20' + _0x1e5182(_0x538d4a._0x4a5da1) + _0x1e5182(_0x538d4a._0x10daf2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'color:\x20var' + _0x1e5182(_0x538d4a._0x2746cd) + 'int);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-size:' + '\x2013px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + _0x1e5182(_0x538d4a._0x337db5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '.info-box\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x401be9) + '\x20\x20\x20\x20\x20\x20font' + _0x1e5182(0x321) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3f9bb3) + _0x1e5182(_0x538d4a._0x5192f9) + _0x1e5182(_0x538d4a._0x14b3b4) + _0x1e5182(_0x538d4a._0x2bf676) + _0x1e5182(_0x538d4a._0xdbc22a) + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding:\x208px\x20' + _0x1e5182(0x52b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + ':\x20var(--su' + _0x1e5182(_0x538d4a._0x287208) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border-r' + _0x1e5182(_0x538d4a._0x3bad48) + '(--radius-' + 'sm);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + _0x1e5182(0x96d) + _0x1e5182(_0x538d4a._0x553455) + 'dow-sm);\x0a\x20' + _0x1e5182(_0x538d4a._0x14d79a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xb0e60f)) + ('bottom:\x2015' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20li' + _0x1e5182(0x502) + _0x1e5182(0x2f0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x618) + _0x1e5182(_0x538d4a._0x2f37af) + _0x1e5182(0x91f) + _0x1e5182(_0x538d4a._0x1ef40a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + _0x1e5182(_0x538d4a._0x9dfd30) + 'n\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground:\x20' + 'var(--acce' + 'nt);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x504f30) + 'olor:\x20#fff' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x337db5) + _0x1e5182(_0x538d4a._0x193616) + 'er:\x20none;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20paddin' + 'g:\x207px\x2016p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x22ca5a) + '\x20\x20\x20\x20\x20\x20\x20fon' + _0x1e5182(_0x538d4a._0x488054) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xfe4637) + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder-radiu' + 's:\x2020px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1d4f35) + _0x1e5182(0x3cf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x8cfa01) + '\x20\x20\x20\x20font-w' + 'eight:\x20500' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x401be9) + _0x1e5182(_0x538d4a._0x5a332b) + '-family:\x20v' + _0x1e5182(_0x538d4a._0x1c6c20) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20tran' + 'sition:\x20op' + 'acity\x200.15' + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20.save' + '-button:ho' + 'ver\x20{\x20opac' + _0x1e5182(0x230) + '\x20}\x0a</style' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</head' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<body>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5c2518) + 'v\x20class=\x22h' + 'eader\x22\x20sty' + _0x1e5182(0x2bd) + '-top:\x2015px' + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20style=\x22' + _0x1e5182(_0x538d4a._0x45946f) + 'lex;\x20align' + '-items:\x20ce' + 'nter;\x20just' + 'ify-conten' + _0x1e5182(_0x538d4a._0x2474be) + '\x20gap:\x2015px' + _0x1e5182(_0x538d4a._0x514370) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xdbc22a) + '\x20\x20\x20\x20\x20\x20<img' + '\x20src=\x22data' + _0x1e5182(0x2a5) + ';base64,iV') + (_0x1e5182(0x8ae) + _0x1e5182(0x389) + 'AAAOsAAAEu' + _0x1e5182(_0x538d4a._0xba4d7f) + _0x1e5182(0x6c2) + 'Q1BzUkdCIE' + 'lFQzYxOTY2' + 'LTIuMQAASI' + 'mdU2dUU+kW' + 'Pffe9EJLiI' + 'CU0HtVIIBI' + 'Cb1Ir6ISkw' + _0x1e5182(0xbfb) + _0x1e5182(_0x538d4a._0x425df1) + 'Io4ICjIyBj' + 'RRQLg2LvAz' + _0x1e5182(0x697) + _0x1e5182(_0x538d4a._0x23697c) + '03b/aPb+21' + _0x1e5182(_0x538d4a._0x443e91) + 'DQAkJE4mxU' + 'BSBLLJNG+n' + 'uz4xMS2cR+' + _0x1e5182(_0x538d4a._0x223965) + _0x1e5182(_0x538d4a._0x4c523c) + 'AIG+XHZOpL' + _0x1e5182(_0x538d4a._0x5f035a) + _0x1e5182(_0x538d4a._0x1d7dbe) + _0x1e5182(0x4e7) + _0x1e5182(0x5aa) + _0x1e5182(_0x538d4a._0xbfb4af) + _0x1e5182(_0x538d4a._0x144a8c) + 'yfoeAoTsGl' + '8QmJAKiGgq' + 'd+5lafYj5z' + 'TwUXZIkFAK' + 'jizRJBlkDB' + 'ewBgXa5cKA' + 'DAQgCgMFck' + 'zAPArgCAUa' + 'Y8SwSAvVbk' + 'Zgl5OQA4mk' + _0x1e5182(_0x538d4a._0x128ff2) + _0x1e5182(0x9f9) + 'gZACRa6ld8' + _0x1e5182(_0x538d4a._0x1541c4) + 'TFzZYskopS' + _0x1e5182(0x6c8) + _0x1e5182(0xaeb) + _0x1e5182(_0x538d4a._0x1756fc) + 'MnFbC52VkS' + 'nngRwOeaP0' + 'FN0Vt2oC/X' + 'yd7Fycnawc' + 'b+q0b918u/' + 'CYW3n9nziE' + _0x1e5182(_0x538d4a._0x44fa19) + _0x1e5182(_0x538d4a._0x3caf64) + 'BNX7T5lQAd' + _0x1e5182(_0x538d4a._0x273545) + 'YCKBcAtF/4' + _0x1e5182(0x2fc) + 'KJq61tXl6e' + 'jUjIt1E09A' + _0x1e5182(0x8c6) + 'Z6P43B/tYf' + 'sIU3jyTBlb' + '0Td+dma2XM' + 'rOkfD4Qrb1' + _0x1e5182(_0x538d4a._0x3770b2) + 'usIoUpQqlQ' + 'zBeyY0XCPJ' + 'E4lc3NFgtE' + 'MlG2mC0S/y' + _0x1e5182(0x4a6) + 'rgGA0fABmP' + 'NsQOUCE7Bf' + '+wDHoAKWtE' + 'Ph+h++hZBj' + 'QbF5cXqjn+' + 'f+Ez5t878D' + _0x1e5182(0xa98) + 'ncyGg2Xy7N' + _0x1e5182(_0x538d4a._0xb9830a) + 'WUgQmaoAuG' + _0x1e5182(_0x538d4a._0x118435) + _0x1e5182(0x7af) + _0x1e5182(_0x538d4a._0x430f78) + 'VSyIOlsAoK' + 'oRg2wVaogl' + 'pogCZohf3Q' + 'AYfhBJyG83' + _0x1e5182(_0x538d4a._0x51ffe1) + 'eAzj8BImEQ' + 'QhInSEgWgi' + 'eogxYok4IB' + _0x1e5182(_0x538d4a._0x103386) + 'SAKSjKQiYk' + 'SOLEVWI8VI' + 'KVKF1CFNyP') + (_0x1e5182(0xb38) + _0x1e5182(0x59d) + _0x1e5182(0x693) + _0x1e5182(_0x538d4a._0x18fd1d) + '5oMBqNzkFT' + '0QXoYrQA3Y' + 'hWoPXoXrQd' + 'PYGeR6+ig+' + 'hjdAIDjIqx' + 'MH3MGuNgXC' + 'wMS8RSMCm2' + 'HCvCyrF6rB' + 'Xrwnqxy9gg' + '9gR7gyPgGD' + _0x1e5182(_0x538d4a._0x47860c) + 'xeD4uAW45b' + 'gNuCrcHlw7' + _0x1e5182(0xb7c) + 'd9wNPx2nhL' + 'vCs+EB+PT8' + 'Xn4Qvx5fhG' + '/EH8KfxV/A' + _0x1e5182(_0x538d4a._0x1f2178) + 'Cc6EAEICIZ' + '2whLCBsJ3Q' + 'RjhOGCAMEy' + 'aIRKIm0ZLo' + 'Tgwj8ogyYi' + 'GxkriXeIx4' + _0x1e5182(0xac6) + 'RIDiQ/UiJJ' + 'TMonlZOaSU' + 'dJl0ijpEmy' + 'CtmY7EoOIw' + 'vIi8gl5AZy' + _0x1e5182(_0x538d4a._0x4bcebd) + 'GlmFLcKdGU' + 'dMoqSgWllX' + _0x1e5182(0xb90) + 'GlBdqBFUEX' + 'UltYK6j3qG' + 'OkR9Q1OjWd' + 'C4tCSanLaR' + 'tpt2nHaT9p' + 'xOp5vQPemJ' + 'dBl9I72Jfp' + _0x1e5182(0x355) + 'oxSoJFBaoV' + 'St1K50Semp' + 'MlnZWNlLea' + '7yYuVy5QPK' + 'F5SfqJBVTF' + 'S4KjyV5SrV' + 'KodUrqtMqD' + 'JU7VXDVLNU' + 'N6g2q55Vfa' + 'hGVDNR81UT' + 'qBWo7VI7qT' + 'bMwBiGDC6D' + 'z1jNaGCcYo' + 'wwCUxTZiAz' + _0x1e5182(_0x538d4a._0x58fb37) + 'xXV1Ofrh6r' + _0x1e5182(_0x538d4a._0x4e673a) + 'ALY5mwAlmZ' + 'rBLWftY11t' + 'spOlO8pgin' + 'rJ/SOuXSlF' + 'caUzU8NYQa' + 'RRptGlc13m' + 'qyNX01MzQ3' + 'a3Zo3tXCaV' + 'loRWjlae3Q' + 'OqX1ZCpzqt' + 'tU/tSiqfun' + '3tJGtS20I7' + _0x1e5182(_0x538d4a._0x2da893) + _0x1e5182(0x543) + 'TqnNR5osvS' + '9dRN1y3TPa' + 'o7psfQm6kn' + '0ivTO6b3iK' + '3O9mJnsivY' + 'PexxfW39AH' + _0x1e5182(0x818) + 'galBjEG+QZ' + 'vBXUOKIccw' + 'xbDMsNtw3E' + _0x1e5182(0x967) + _0x1e5182(_0x538d4a._0x502437) + '14m3Gv8SsT' + 'U5M4k7UmHS' + 'YPTTVMA00X' + _0x1e5182(0xaed) + 'mYLTCrN7ti' + _0x1e5182(0x81d) + 'e/aIFaOFqk' + 'WVRbXLBELZ' + '0sRZbbLQes' + '8FYuVmKreq') + ('vr1jRrL+tc' + '6xbrIRuWTY' + _0x1e5182(_0x538d4a._0x501cff) + 'I9tE2822vb' + 'Yf7BztMu0a' + _0x1e5182(_0x538d4a._0x9e48b1) + 'fbd9n/7mDh' + 'wHeodrgyjT' + '7Nb9qKaZ3T' + 'nk23nC6cvm' + 'P6DUeGY6jj' + _0x1e5182(_0x538d4a._0x7cf8ac) + '5Sp1anMWcj' + _0x1e5182(0x390) + 'YnnLOBc8YF' + _0x1e5182(0xbdf) + 'sbVydXmet+' + _0x1e5182(0x198) + 'rdHs4wnSGc' + _0x1e5182(_0x538d4a._0x5a7b84) + 'de5z44kz0z' + 'eebOmYMe+h' + '48j3qP+56G' + _0x1e5182(_0x538d4a._0x49e33d) + 'OvdK+9Xk+9' + '7byl3ge9X3' + 'Fducu4x30w' + _0x1e5182(0x69a) + 'XfGN8q33t+' + _0x1e5182(_0x538d4a._0x34cd2b) + '6O/kv8jwfg' + _0x1e5182(_0x538d4a._0x334094) + 'QJ5Ac2BY4H' + 'OQctC+oJpg' + _0x1e5182(_0x538d4a._0x599d23) + _0x1e5182(0x597) + 'GhW0LvzDKe' + 'JZ7VEQZhgW' + _0x1e5182(0x3a6) + 'CP8xghARHl' + 'Ed8SDSPnJp' + 'ZG8UI2peVH' + 'PUy2jv6JLo' + '2zFmMfKY7l' + 'jl2KTYpthX' + 'cT5xpXGD8b' + 'bxy+LPJ2gl' + 'iBI6E4mJsY' + 'mNiROzfWdv' + _0x1e5182(_0x538d4a._0x323561) + _0x1e5182(0x3f1) + _0x1e5182(0x95e) + 'zlebx5B5Lx' + 'yXHJzcnveG' + 'G8et7E/MD5' + 'NfPH+Vz+Nv' + _0x1e5182(_0x538d4a._0xc34dc9) + _0x1e5182(_0x538d4a._0x5be7c9) + _0x1e5182(_0x538d4a._0xfb8315) + 'SR1L80grT3' + 'si4oqqRM/S' + 'A9Jr019lhG' + _0x1e5182(0xb04) + 'lkXKSs46JF' + _0x1e5182(_0x538d4a._0x15354e) + _0x1e5182(0x3f8) + _0x1e5182(_0x538d4a._0x31ef31) + 'lwZLG3OQnD' + 'k5nTKmTCLr' + 'k5vJ18iHcm' + _0x1e5182(_0x538d4a._0x24ab9d) + 'O7BQdaF4Yd' + '8ii0XrF40u' + '9lv87RLcEv' + _0x1e5182(0xb9e) + 'HVrmtaxuOb' + 'J8/vLuFYYr' + 'ClaMrPRfuW' + _0x1e5182(0x1eb) + '7fJL81+sjl' + _0x1e5182(0x63c) + _0x1e5182(_0x538d4a._0x1e7b78) + 'Jp4fW1bmtr' + _0x1e5182(0x3f5) + '+2vnL9hyJB' + '0bliu+Ly4n' + 'cb+BvOfWP/' + 'TcU3HzembO' + 'wvcSrZsYmw' + 'Sbzp2maPzX' + _0x1e5182(_0x538d4a._0x267590) + 'Cd3SXsYuKy' + 'p7sXXe1rPl' + _0x1e5182(_0x538d4a._0x46eed1) + 'cNVoRUdFYa' + _0x1e5182(0x2ea) + 'W12ru6rUa7' + 'Zn3Nq+2C7Z' + 'd2eO5ordWp' + 'La59u1O080') + (_0x1e5182(_0x538d4a._0x743ec7) + '+S7CrtxdDx' + 'piG3q/5Xzb' + _0x1e5182(_0x538d4a._0x578f10) + 'd49+CeyD09' + _0x1e5182(0x7b2) + 'UtaIu8ZWxv' + _0x1e5182(_0x538d4a._0x4feab2) + 'lq3VrXxmor' + '3gf75PsefZ' + '/8/bX9wfu7' + 'D3AOtP5g/E' + 'PNQcbBonak' + 'fVH7eEdax2' + 'BnQufAoaBD' + '3V1uXQd/tP' + 'lx92H9w9VH' + '1I+UHKUcLT' + 'j68djiYxPH' + 'JcefnEg9Md' + 'w9r/v2yfiT' + 'V3oievpPBZ' + '86c9rv9Mle' + 'r95jZ9zPHD' + '7revbQOc65' + 'jvNO59v7HP' + 'sO/uT408F+' + 'p/72C84XOi' + '+6XOwamDFw' + '9JLHpROXfS' + '6fvhJ45fzV' + 'WVcHrsVcu3' + 'E96frgDcGN' + 'hzczbz67lX' + 'tr8vbKO/g7' + _0x1e5182(_0x538d4a._0x2662d3) + '5X/7P5z22D' + 'ToNHhnyG+u' + '5H3b89zB9+' + '/EvOL+9GCh' + '7QH5SP6o02' + _0x1e5182(0x1a3) + 'zio9mPRh5L' + 'Hk8+KfxV9d' + 'eap2ZPf/jN' + _0x1e5182(0x1e4) + 'fSZx9/3/Bc' + '8/nuF9NfdE' + '+ET9x7mfVy' + _0x1e5182(0x58c) + '5w3vS+jXs7' + 'Opn3jviu4r' + '35+64PwR/u' + 'fMz6+PFfA5' + 'jz/DT+dQEA' + 'AAMAUExURQ' + 'AAAP///ykc' + 'BAICBgIGCg' + 'IGBggKCgIG' + 'AgYLBAYGAh' + 'ERBv7++fb2' + '9A0MAxYUBv' + '7rVf70qfrX' + 'R/v58P7pnx' + 'wXBvDt4yge' + 'AiQcBf7IMu' + _0x1e5182(_0x538d4a._0x1e4b8e) + _0x1e5182(_0x538d4a._0x1784c1) + 'fz5+i0Lioh' + _0x1e5182(_0x538d4a._0x2166f6) + _0x1e5182(0x23f) + 'curPiu/TkO' + 'nPkHhrTN7I' + 'ji4gAj4vDC' + 'QcCx4YCz0z' + 'HLydWe3Kfd' + 'i5dO7OiNu+' + _0x1e5182(0x323) + 'eicoh4Vmdb' + 'Qe/VmKqXbP' + 'jdn5OGaMe/' + 'rqVyDSoeBt' + _0x1e5182(_0x538d4a._0x1ef817) + 'E2RIEdWaJo' + 'dhGM2UJaF0' + 'HXpZGC4iCT' + _0x1e5182(0x187) + 'aeW/duC7c+' + 'rGetOybvTN' + 'gc6uburGfv' + 'vViebDfezK' + _0x1e5182(0x1c8) + 'PEherKisSr' + 'e7qwm+jm4v' + 'mmD9yRD7l9' + 'DdeWIjIjCN' + 'KSIt2bJUk0' + 'DNaWJr+HIt' + 'KWJrB+IP63' + 'MOCeK92rUu') + ('SzXtKua+7G' + 'eurCeu7Gfl' + _0x1e5182(0x57b) + 'J/XPierGhu' + '7Kis+xefDO' + 'jsiqdsqueu' + 'rKjta5g92/' + 'iPPRlqObjL' + 'J2FoZaE1s9' + _0x1e5182(0x651) + _0x1e5182(0x5e0) + 'IfeqK++kKt' + _0x1e5182(_0x538d4a._0x340207) + 'KdaSJtKSJt' + 'uWKtWULMmN' + 'KeunM9maMc' + 'qOLvauOc2S' + 'MNmdO7eEND' + _0x1e5182(_0x538d4a._0x3b277f) + 'ROrCfu7Ggu' + '7KjunGi8Sm' + 'duPBi8qufu' + 'rKlK1qBioa' + 'AtKDDKZmCi' + 'AUArd2FhkQ' + _0x1e5182(0x4e6) + 'GJG6ltFteN' + 'HcaDG7t6GU' + 'IrCb9+G7Z2' + _0x1e5182(0xaea) + '9yG9aOIuOZ' + 'J9aOJtKOJu' + _0x1e5182(0x687) + 'hsqqes+vf6' + 'pjBqpmCqZi' + 'CqFhCrBrDa' + 'pmDqZmDq13' + 'Mc6qesqqf9' + 'TRzaZgBi4a' + 'Aq9mCqpiCs' + 'JxDaNdC7hs' + 'Dcp3D4ZOCi' + _0x1e5182(0x523) + 'DK5mD6FhD3' + 'ZGC2pACsR0' + _0x1e5182(0x559) + 'pnE7pyFyIW' + 'B5RkKc6qfp' + 'xYC4pOCoZK' + _0x1e5182(0xbd5) + _0x1e5182(0x954) + _0x1e5182(0x724) + 'QLAoZKDioZ' + _0x1e5182(_0x538d4a._0x429cb4) + 'k5GmI+Hv76' + '+PPx8AwEAg' + _0x1e5182(0x19b) + '/vr6+gICAv' + _0x1e5182(_0x538d4a._0x118be7) + 'AAEAdFJOU/' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + _0x1e5182(0x344) + _0x1e5182(0x344) + _0x1e5182(0x344) + '//////////' + _0x1e5182(_0x538d4a._0x29e8a5) + '//////////' + _0x1e5182(_0x538d4a._0x309d96) + '//////////' + '//////////' + '//////////' + '//////////' + _0x1e5182(0x344) + _0x1e5182(_0x538d4a._0x309d96) + '//////////' + '//////////' + _0x1e5182(_0x538d4a._0x29e8a5) + '//////////' + '//////////' + '//////////' + '//////////' + _0x1e5182(0x344) + _0x1e5182(_0x538d4a._0x191889) + '//////////' + '//////////' + _0x1e5182(_0x538d4a._0x3fb879) + _0x1e5182(0x344) + '//////////' + '//////////' + _0x1e5182(0x5ce) + _0x1e5182(_0x538d4a._0x381bba) + _0x1e5182(_0x538d4a._0x138514) + 'sTAAALEwEA' + _0x1e5182(_0x538d4a._0x39272e) + 'lEQVR4nN29' + 'CXxTZfY3fp') + ('57k9ybtJTS' + 'FBBp6ZK0tF' + 'xKoWlE2WRr' + _0x1e5182(_0x538d4a._0x5b478c) + '6jMuNsOuMy' + '4/zUcZwZZ3' + 'EbHbdRx5Ep' + 'joLK1rKpoG' + 'LaQikXWpqk' + 'LQ1UhaSltM' + 'm9Se59/p/z' + '3HRhFZX5ve' + '/7f8Q2SdP0' + 'fu85z9nPeQ' + _0x1e5182(0x290) + '/x0O/p9boX' + _0x1e5182(_0x538d4a._0x5da28e) + 'Myv0zX6R/D' + _0x1e5182(_0x538d4a._0x49b19d) + 'Fu7VAPhDw5' + _0x1e5182(_0x538d4a._0x106003) + 'Yfh/aJ2XOu' + _0x1e5182(_0x538d4a._0x49eb35) + 'xt2n71ee89' + '456UDK/z/p' + 'Ovzgf16ozT' + 'n/3iFHgkOO' + 'koPFP9xsmr' + _0x1e5182(_0x538d4a._0x255ed5) + 'vnRr5W9alP' + _0x1e5182(0x761) + 'RYktufYq20' + 'XPrbrq/z6s' + '531IryI3XI' + 'oP33+FtM37' + 'zTeRpXlyZH' + 'GtsD2mDekY' + 'CtCVi3Kpa4' + 'hNnwRXzavo' + 'OaNPMsH/zs' + 'rbHh5SHc18' + 'mdMjYIXIXJ' + 'i7Ye6oYNj5' + '+LUTms/k9y' + '/ylrTHH6hQ' + _0x1e5182(0x459) + 'SV2gWpIXOs' + '8aFKWJf889' + _0x1e5182(0x62c) + 'pJGqciuh76' + '/dlDL3I5hx' + 'f2nhTXNtFN' + _0x1e5182(0x968) + '1+H9z9zFn1' + '3728NWTbN2' + _0x1e5182(_0x538d4a._0x18cbfe) + _0x1e5182(0x2c5) + '6bu+gv8bsO' + 'bF99F3+EtJ' + '5vVbeD4+3/' + 'm3rPao5QeP' + 'wRCTdmRhwb' + 'CL4X293EZf' + _0x1e5182(_0x538d4a._0x596a1f) + 'Wj3gYCPES6' + _0x1e5182(0x664) + _0x1e5182(_0x538d4a._0x4b374f) + '0jjT9Dczu/' + '+PYz2vOqUJ' + 'HOC2mfxZTR' + 'rvcMBYBaD6' + _0x1e5182(_0x538d4a._0x347fc0) + _0x1e5182(_0x538d4a._0x259ff3) + 'w6Xw+hOnoG' + _0x1e5182(0x5dd) + 'qdYOGBVJ86' + _0x1e5182(_0x538d4a._0xfcde37) + 'EXauf4jFd/' + 'k18yqczf9H' + 'sf7st1CyLT' + 'XnHK7zIOTP' + '1QurcsGfEQ' + 'CAzELwOsiY' + '6hbfPn5sbp' + _0x1e5182(0x95d) + 'HvnjST4kMM' + _0x1e5182(0x3a0) + 'RI6cA9YQpL' + 'XQ3FCaPzXN' + 'nwrBEXy49c' + 'rZ4aofvPR/' + _0x1e5182(0x8e6) + _0x1e5182(_0x538d4a._0x3a5896) + '8/fvhXaAXD' + '9kmv3sx7mO' + _0x1e5182(0xa0f) + '0+7Vy7ojR0' + _0x1e5182(_0x538d4a._0x57f219) + '8SjYw9+uCl' + 'QxLXGekaZR') + ('A1FVnYeAB6' + 'ip5UZLv0uf' + 'ev+D9lD0/Y' + '0/K+/NisTx' + 'uKF82fH3hp' + _0x1e5182(_0x538d4a._0x2b776f) + _0x1e5182(_0x538d4a._0x42ead0) + 'pfy8+e8WN/' + _0x1e5182(_0x538d4a._0x2c8c98) + _0x1e5182(_0x538d4a._0x28510e) + 'PizU1mUCMA' + 'XaOsiDE1lf' + '0wDSAVIJcz' + 'iUpNdMXlc6' + 'P/Z+gaGrJS' + _0x1e5182(0x6c6) + 'Czn9Ey1+Fj' + _0x1e5182(_0x538d4a._0x53b741) + 'HPdVRDZkF1' + '+d6tu8fHuJ' + '9eubehwuEd' + '+JjYyltK/m' + '4y+Jcta6QD' + _0x1e5182(0xaa6) + _0x1e5182(0x529) + _0x1e5182(_0x538d4a._0x41d8bd) + 'tYAyPu/Fv4' + 'Avvu26QqJC' + _0x1e5182(0x5c6) + 'V27iUVk1AG' + _0x1e5182(_0x538d4a._0x59d0f3) + _0x1e5182(_0x538d4a._0x4dee21) + 'd546y/JbYq' + 'AHSMgo7cSC' + _0x1e5182(0x315) + '9jR/UlK4tW' + 'LmD+e/eMIm' + '+C/zcC/91P' + '/yL6WOzL+O' + '25uZ6UdWzQ' + _0x1e5182(_0x538d4a._0x481b60) + '8abyTPBDbm' + '4m5EI1QDlY' + _0x1e5182(_0x538d4a._0x5231de) + 'dXSH8k97K3' + 'xCpvrnw6fg' + 'xnjvJHulAG' + 'p0FaPx/bIQ' + 'S9GuQ0fHzv' + 'outR9P0v0n' + _0x1e5182(0x990) + _0x1e5182(_0x538d4a._0x44f02b) + 'jAATn51bng' + 'Z7RMkDpB2L' + _0x1e5182(0x77f) + _0x1e5182(_0x538d4a._0x4797f5) + 'QOpGak6gOL' + 'h3ScM/DJHb' + 'khFEeJZ4yq' + _0x1e5182(0xa8f) + 'Q6fekl45r/' + _0x1e5182(_0x538d4a._0x1c8dc3) + '5Ubvso80AM' + _0x1e5182(0x984) + '9r1tf7HI4s' + _0x1e5182(_0x538d4a._0x3db50e) + '7fwIocnOvP' + _0x1e5182(0x29b) + _0x1e5182(0x41d) + _0x1e5182(_0x538d4a._0x1a3058) + 'jOi6T5EWwX' + 'Q9wFGtiPxI' + 'HHV1KDqUdf' + 'rKx4/6ujyf' + '9LPPxSbOxP' + _0x1e5182(_0x538d4a._0x569a06) + 'Sep2lasqZN' + _0x1e5182(0x5f8) + '0V5OeLL67P' + _0x1e5182(_0x538d4a._0x5b9b2c) + _0x1e5182(_0x538d4a._0x415441) + _0x1e5182(0x2f7) + '2rvDx10leT' + 'biiKbC8KDF' + 'xgRwf71hUx' + _0x1e5182(0x486) + _0x1e5182(0x76d) + 'yWL78TWV42' + '4Wiv936HoE' + 'pv5m7qR0U1' + _0x1e5182(_0x538d4a._0xb169c3) + _0x1e5182(_0x538d4a._0x472ef7) + _0x1e5182(0xb81) + _0x1e5182(0xa08) + _0x1e5182(0x8bc) + _0x1e5182(_0x538d4a._0x40aa9) + '6znt75wUW/' + '/UQSBn96R2' + 'rXqH7RZEim' + _0x1e5182(_0x538d4a._0x2f9582)) + ('dST4owwTb5' + 'TVs06b+OtW' + 'fIiOcucVud' + 'm28hayx70S' + _0x1e5182(0x1f8) + _0x1e5182(_0x538d4a._0x48c998) + 'Huy9ekR49+' + _0x1e5182(0x515) + _0x1e5182(_0x538d4a._0x31ed42) + 'vriTc/0Z+9' + 'detM3373uO' + 'NsgT8Qo7Rk' + 'Hf10haCLEZ' + _0x1e5182(0x68a) + _0x1e5182(_0x538d4a._0x2199a3) + _0x1e5182(0x976) + '0H0/7LWP8z' + 't6Pw55/QJo' + _0x1e5182(_0x538d4a._0x2517f8) + 'hsQPmfM2OR' + _0x1e5182(0x916) + 'eHjhO1dupU' + '5/U/l8r6P6' + 'GN2DWzcTtT' + 'H4YfX44N63' + 'X3l32YPxqH' + 'XgL1gjwFg5' + _0x1e5182(_0x538d4a._0xbdbc97) + 'AH+dSu1KA9' + 'mBcKJQ+Rr7' + _0x1e5182(0x6e3) + '7TX7cyMX79' + 'FuW7g2UE6h' + _0x1e5182(0x42d) + 'jKfP7Mtva9' + 'wx/8oH7hhr' + 'lr0lrU8jGB' + '8ioo80HMHA' + 'OUTf26N9ef' + 'sW23dLTmB5' + 'UHvoweI2o6' + 'qF1HwYTQup' + _0x1e5182(_0x538d4a._0x173271) + _0x1e5182(_0x538d4a._0x4bb6b8) + 'ctuPJ4u+Is' + 'Yj1ve1Phz2' + _0x1e5182(_0x538d4a._0x14379e) + _0x1e5182(0x56b) + 'zPbMddmQnt' + 'me1ZG3xjc9' + _0x1e5182(_0x538d4a._0x5cc491) + _0x1e5182(0x6f1) + 'uTy0jaWy47' + _0x1e5182(_0x538d4a._0x464f37) + 'ylhjDWAeon' + 'AUTBFKZ9MQ' + _0x1e5182(0x80f) + _0x1e5182(_0x538d4a._0x20ef8b) + 'KRYcMyxGve' + '/+q4SNTZw7' + 'ri5s8LCzv4' + 'WwK5x1hJ+I' + 'A97lepjury' + 'pg2+uzeELq' + _0x1e5182(_0x538d4a._0x1b2dcd) + _0x1e5182(_0x538d4a._0x4e0286) + _0x1e5182(_0x538d4a._0x57e72b) + '8jsVSfdNmE' + 'h3FHPRhqmg' + 'd9q57uVwpQ' + 'rEnNZsN0SU' + 'ZkfnPYhGRZ' + 'fGQ+oRLVkP' + _0x1e5182(0x9b3) + 'mLmTp/P+H8' + 'zf47JwWgE6' + _0x1e5182(_0x538d4a._0x488d8f) + _0x1e5182(_0x538d4a._0x32ad3b) + '2Z6Z3QCck7' + 'jtjLm7ePMR' + '2dvq8lfd6j' + _0x1e5182(_0x538d4a._0x350def) + '4J0JnZllv6' + 'VTdAJ/7G+f' + _0x1e5182(0x6a5) + 'uzCFpidzNg' + 'dPuSQSN4/l' + '53oXxbtjyV' + '2KCMq5XcOC' + 'pKs3YrfZgt' + 'HUjM5cKx2t' + '0ZSRK5yj6x' + _0x1e5182(_0x538d4a._0x3a5b4d) + _0x1e5182(_0x538d4a._0x1c92c2) + _0x1e5182(_0x538d4a._0x712c2) + 'cyGzvaysHT' + '26dmTjmDkX' + 'ch3cn6atNX' + '1pnRFZO67n' + 'J3lOP3P4yq') + ('Ad/NVoTAJA' + _0x1e5182(_0x538d4a._0x5a15e4) + 'fjXp7x1h4t' + _0x1e5182(_0x538d4a._0x13ad1f) + 'YRky1r//K8' + _0x1e5182(_0x538d4a._0x3b6f28) + 'UPDeLb0Wjm' + 'U4PNWijU1f' + 'yVqXfxL7Y4' + 'unL+CzwcGL' + 'JhrtT7V2+/' + 'ZOn7Ae49Zt' + 'n3vcj2prFB' + _0x1e5182(0x6ab) + 's32LjDh281' + 'OB3lMNvZ/W' + _0x1e5182(0x3d8) + _0x1e5182(_0x538d4a._0x1d2dc) + 'kAIbSAifbq' + 'r+Y/oVuHMi' + '/HKgDKYQ3s' + 'XW1QjBsYIE' + 'VQ9lfMWk3P' + 'OtYeiz/35g' + '9uD6AJX5V4' + 'LbPduPIEYo' + _0x1e5182(_0x538d4a._0x27ac50) + 'SyHrBQfpvg' + 'g+cK1FIWWY' + _0x1e5182(_0x538d4a._0x132511) + 'GmzfPcvGr8' + '21GzFhoRp5' + _0x1e5182(_0x538d4a._0x3da615) + _0x1e5182(_0x538d4a._0x231355) + 'kOND0Idvxn' + 'hyDwqfUZ9r' + 'RQEFKIxVr6' + _0x1e5182(_0x538d4a._0x38ab9f) + 'eUOGZ/cHsg' + 'A2AvunB4mc' + 'iTPsbBZZCJ' + 'WhPZE6C9DM' + 'CRC5C5Nxfd' + 'Hv5Pd3rpJ1' + 'ssI/MWvJSV' + '2y/B2tF+BM' + 'Cb47f8Z0Hz' + _0x1e5182(_0x538d4a._0x59024c) + 'xP+yqEUNNI' + 'B0m/5IN/7N' + 'c77XHgCdh5' + '5OG8rnqwp0' + 'IxpPmDdug2' + _0x1e5182(_0x538d4a._0x596e1b) + 'nrKEkulu8I' + 'lAcgs3p0nl' + 'fXm5vb8kZn' + _0x1e5182(0x772) + 'MzfzPRKMJV' + _0x1e5182(0x723) + _0x1e5182(_0x538d4a._0x215254) + _0x1e5182(0x2a4) + _0x1e5182(0xa5b) + _0x1e5182(0x9b9) + 'w9f9/UHSN3' + _0x1e5182(0x44f) + 'FpoVAakBF5' + '0y97b+QRPi' + '+VDwZTwa4F' + 'IXUWQDDYBR' + _0x1e5182(0x2a2) + 'zju7PBzire' + _0x1e5182(0x1a2) + '4Oi+yumnAH' + 'mPQVoTaDws' + 'C3PtmWZHdW' + 'LX5vpzY+25' + 'MYxM+A2TOB' + _0x1e5182(0x336) + _0x1e5182(0x430) + 'XfBu/btLn+' + 'PFj/oZg2/t' + '+aWQshXUPo' + _0x1e5182(_0x538d4a._0x18ec2e) + 'czBs5rRgZG' + _0x1e5182(0x404) + '1Ln1m+/94X' + 'zipd+ankUq' + _0x1e5182(0x7ad) + _0x1e5182(_0x538d4a._0x30e6bf) + _0x1e5182(_0x538d4a._0x46e592) + _0x1e5182(_0x538d4a._0x4e2a8d) + 'RqAF8ZQFmu' + 'A/wFuQ5zDK' + 'mMqrY91+Gv' + 'uutt76zPPp' + 'q+xvmC7qyG' + _0x1e5182(0xb5d) + _0x1e5182(_0x538d4a._0x3c1049) + _0x1e5182(_0x538d4a._0x36b618)) + ('OkpYVGo4zi' + _0x1e5182(0x81b) + _0x1e5182(_0x538d4a._0x14f0e7) + 'vF3rEnDTBu' + '28HbrhXtoR' + 'OKt0jfBwYe' + _0x1e5182(0x8ff) + 'kjAAbJiL/w' + 'CsABHn441r' + _0x1e5182(_0x538d4a._0xf581bb) + _0x1e5182(_0x538d4a._0x6451a1) + 'GfrpBn5Kqx' + 'b4punbuKZb' + 'LBiAwp2aoC' + 'kTYebZgUfr' + _0x1e5182(_0x538d4a._0xcf7b80) + 'SUxiiS9chk' + _0x1e5182(_0x538d4a._0x526240) + 'YEnxsK8rn+' + 'OGHmsWaPmm' + _0x1e5182(_0x538d4a._0x15a6ab) + _0x1e5182(_0x538d4a._0x18fe34) + '91x1wK9jFp' + 'i3/66rStr3' + '4vf+wGdL6e' + _0x1e5182(_0x538d4a._0x535e8d) + 'cV1L+0TgfI' + '9BlBGH+ZPx' + 'clFG7PXL8f' + '1e1a8jFMp+' + 'JLGgEw+/25' + 'EIPcXMDwDe' + 'Tme6syry4O' + 'jFzh0eIsv4' + 'F8HOKSz9Gm' + '8D32QJfdrg' + 'LkBaAZIDVk' + 'zechTwvm5h' + '3h7DxgzPLs' + '0fU/zzgWXB' + 'yxvv9Khs+i' + 'FuiQsymar+' + 'W1QCuQ6fSt' + 'PUnBcFW5jY' + '4bwXUe5G/X' + 'LOj6QC44qv' + 'utSENB3fpC' + 'Fe7azxrL5z' + 'N1BH1Sudzr' + _0x1e5182(0xbaa) + _0x1e5182(_0x538d4a._0x1b9ebd) + _0x1e5182(_0x538d4a._0x4f0cf) + 'f2kl7N3qWx' + '7co0D9iDwG' + 'u4Y7nkZXub' + 'hp5FrBetnb' + _0x1e5182(_0x538d4a._0x2c6da1) + 'OY55vyKA+q' + 'axxQ2gUQBT' + 'M20l0/xPjn' + 'pDXwxjz9HN' + 'uxfMR63k8A' + '3ETw2Vm+uo' + _0x1e5182(_0x538d4a._0x4c0423) + 'tM0buqBvwd' + _0x1e5182(0x440) + '7rfewHbzVY' + 'zYcAYEQcQj' + 'AMHlwV+pgj' + 'YBWCdrUHzS' + 'Y7GhL2w/ko' + 'qvJ86T+qPY' + 'tYX7oKMsm9' + 'm/IdnD6xhg' + _0x1e5182(0x596) + 'iCDt4uJg69' + '0c+/Lh697Q' + _0x1e5182(0x5d6) + 'FEkPDPE44N' + '89Kdz4JwHr' + 'f1yJd3MheW' + 'vczA5lZe7d' + 'xHTc5fNV72' + '+Wc2M4kbGx' + 'b0V5+gO1S9' + _0x1e5182(0x6d7) + 'fz/BiG6kqN' + 'C7fuDXefJa' + _0x1e5182(0x6db) + _0x1e5182(_0x538d4a._0x41f2d8) + _0x1e5182(_0x538d4a._0x30a366) + '3CsKVIygKK' + 'U7oNnc0u7v' + 'XFWe6rB09/' + 'Jvv4Qhf7Of' + 'RccZDZmuyX' + 'Wuq3LqM7fe' + '9aPb2xhfMx' + '42hJMjC9po' + _0x1e5182(0x52e)) + ('A8aUAsBdrk' + _0x1e5182(_0x538d4a._0x18ce65) + 'nNyMTIu/Yg' + 'UAJ8any4FF' + _0x1e5182(_0x538d4a._0x29a5fb) + 'OLmg3KSbVC' + '9IANCYjbSU' + 'HeDDZ4rYmA' + '0ggrxkheY0' + 'Udps3pf1rz' + _0x1e5182(0x3b8) + _0x1e5182(_0x538d4a._0x3380bb) + 'SrA6rRRL6r' + _0x1e5182(_0x538d4a._0x2c83d2) + '+B09jdmsmZ' + _0x1e5182(0x9d2) + '3yi0eHGpbx' + 'iK/snhvDO1' + 'QLJCxEPjUI' + 'wGsJzPZoyo' + 'Ttf3zprMjh' + 'xo/j112/kO' + _0x1e5182(0xbf0) + _0x1e5182(0x3a2) + _0x1e5182(_0x538d4a._0x4b1db4) + _0x1e5182(0x240) + 'YCywVVlw7p' + '+HBV3oLnX8' + 'rw50JZGVOk' + '1WVMw/gAqs' + 'x/Whf6AKaN' + '27DOibcC3Z' + _0x1e5182(_0x538d4a._0x481e81) + _0x1e5182(_0x538d4a._0x3387b8) + 'AIDQ+FAOKg' + '7YzCCj4WxO' + 'hpDKHa0aUF' + 'DFPgS3FoMI' + 'KP35WuKxYP' + _0x1e5182(0x87f) + _0x1e5182(0xb2c) + _0x1e5182(_0x538d4a._0x2f91dd) + 'FDAnTm/t78' + 'WRYG0QgP4x' + 'uYn37rvb68' + '6fCxKToLNW' + '2unzkJWZQj' + 'AAWZBIUxk0' + _0x1e5182(0x8fd) + 'sjfk5BGH7J' + _0x1e5182(_0x538d4a._0x58c395) + 'CkAi5zUPsU' + '34x5FbzgJd' + '/3Np6gW5nO' + _0x1e5182(0xac3) + 'qIxQG0FR+q' + 'DK+KARlIaG' + 'f/NktvX+qQ' + _0x1e5182(_0x538d4a._0x2aee76) + _0x1e5182(_0x538d4a._0x38941b) + _0x1e5182(_0x538d4a._0x536da9) + 'suZP9OlB02' + 'anD8r8uVW5' + _0x1e5182(0x958) + 'igtPe154ZY' + 'OH04unZpQC' + 'I/m3T5WIWH' + 'oJ8FJoq7gl' + _0x1e5182(0xa1d) + 't8Ny083fg+' + '+KtWzhSxfP' + 'm154eWOJQw' + 'AF3A4xgQ3A' + '50DJVADAOB' + _0x1e5182(0x5cc) + 'wCOxfVzOgu' + '8tnDy0am+s' + 'qP2FLPRpkF' + _0x1e5182(0x34e) + '9Xubb23cuu' + 'Ui+qOfzMnF' + '++AHsDS1GT' + 'ZXteO+DyNP' + _0x1e5182(_0x538d4a._0x5d4867) + 'ChMAoPQCqG' + '1Nh/baCBph' + _0x1e5182(0x83a) + _0x1e5182(_0x538d4a._0x570686) + 'N3WtMPr1qy' + '9MAcKHmLB6' + _0x1e5182(_0x538d4a._0x15be32) + 'KjRqUiO+rI' + 'iNfSUbiqjS' + _0x1e5182(0x808) + _0x1e5182(0xbf3) + 'bMqfZTHiUC' + 'zIlAihQtlP' + 'xXNnbi1/Zj' + _0x1e5182(0x5d5) + '+xAqLa/O96') + ('/76Adv3X8T' + 'atm00DAwuS' + _0x1e5182(0x3c1) + 'Pah6UMMGMs' + _0x1e5182(0xad8) + '91u+C9ajw9' + '9YVmiD8B7y' + '5fjbo5yxO1' + 'WvQ2wsUEBE' + 'eKhZixoApF' + 'oUw4YCAkVM' + '7Fx8PqGO85' + '37RDukTO49' + 'eKdmAUd1rs' + 'MIriV2761X' + 'jBw6bctB5U' + '/M88/TnfvK' + 'oLoM2jOry2' + 'yrj/523t7G' + 'aBDjEwB63Y' + _0x1e5182(_0x538d4a._0x1f3612) + _0x1e5182(_0x538d4a._0x53d55d) + 'XKqfcNNiW+' + 'OdYj1nl7h3' + _0x1e5182(0x9e3) + 'X+fgEILClE' + 'xjAchFelED' + 'I7AkI00Vke' + 'FHiK0F0Fgg' + _0x1e5182(_0x538d4a._0x2503c2) + _0x1e5182(_0x538d4a._0x25c043) + 'tIE3ABmZ6F' + _0x1e5182(_0x538d4a._0xf5b4cb) + 'HoZg5wNkWf' + 'bNbyqvLgOo' + 'Yl830Xd/fd' + _0x1e5182(0x9d8) + 'j0yy/CO7Jx' + _0x1e5182(0x65e) + 'haksbejwCV' + 'sWtHx7rNHI' + 'YtsbVvwlQi' + 's8z113YVkM' + 'KPTJXVUoal' + 'AAObcxm31D' + 'lSNCI2SLIK' + _0x1e5182(0xbc0) + 'pLTO9k7Ovz' + 'pSfr724J1j' + 'WaCq3/lx+A' + _0x1e5182(_0x538d4a._0x2dec89) + '195qdvqcWd' + 'UovKoZbaHN' + '3/j6pssbrG' + 'YtNDoSGkZu' + _0x1e5182(0x725) + 'cDxejwoNEY' + 'HGKa8dxrH3' + 'xr2RQm+bYV' + '1ggooFBY8d' + 'hdr33oM7td' + 'mKECRVJAgB' + 'oQfSiHCkSf' + 'yugqigAF2a' + 'IhnhXRCwpQ' + 'Igo+ocalLF' + 'ry0LndT7YX' + 'PfdslEUscm' + 'MsGe2v9vvB' + 'e1ec/2BGk1' + _0x1e5182(0x3e1) + 'qiFrVsHU2U' + 'OmEB3SEKqe' + 'sRueBOjqCg' + _0x1e5182(_0x538d4a._0x1a46d1) + _0x1e5182(_0x538d4a._0x301122) + _0x1e5182(_0x538d4a._0x18e8c5) + _0x1e5182(0x966) + '307jcq99VV' + 'CooKIMooNA' + 'UFaekDRZaE' + 'PtGsSKCqIi' + 'O+hEJapApI' + 'irArNrFBuH' + '6atf3Dm7tf' + _0x1e5182(_0x538d4a._0x33a8ce) + 'ny8furfh+9' + _0x1e5182(_0x538d4a._0x4a2e38) + 'uQpBiuYGSt' + 'TqrSF7iejf' + 'xaC0EojQB/' + 'L7yzPD2qgR' + '201DxoDqba' + _0x1e5182(_0x538d4a._0xde0f2d) + 'KLvzXWo2/v' + '/Q+JiCAiay' + 'JYd0XvGG4J' + 'iIIks2SqIo' + 'uoZiRFdCig' + 'gCgqigRipS') + ('gIDLd5r0AF' + 'yplFtKpA/H' + _0x1e5182(_0x538d4a._0x5684d1) + '/VuL9KJeno' + 'Ewkb5mjMcB' + 'bMxrKv8EdI' + 'evlalfqK6u' + 'RtBlK4mTS7' + 'qk8p2wnUfF' + _0x1e5182(_0x538d4a._0x18804f) + _0x1e5182(_0x538d4a._0x48d1a9) + _0x1e5182(0x8c4) + _0x1e5182(0x809) + 'fiUjRnyGDI' + 'vsyEQsuXKd' + _0x1e5182(_0x538d4a._0x3327f6) + 'Sw8bIhjhR0' + 'BoyliKCaKC' + _0x1e5182(0x30a) + 'KMqhDS2pQm' + 'PFDtLc/lF7' + '6gUkPhvay4' + _0x1e5182(0x91a) + 'p3y08gXtsp' + 'Vl1WWQtBIp' + 'W00LM2376n' + '47+h9uaoQn' + 'Xvn9Vat2hY' + _0x1e5182(0x6d5) + 'PzOIYXjocP' + 'EIy7el66Ku' + '0k+3VPxLBy' + 'tuRCQUfWN4' + _0x1e5182(0x3e0) + 'NEF4CIhFdA' + _0x1e5182(0x7cc) + 'zUsm59dHHj' + 'TTPf7ZDXr2' + '+h5qtVr1yw' + 'i4/lzpw86u' + '0tvQc20aym' + 'QbUUfsgqd0' + _0x1e5182(_0x538d4a._0x31ee69) + 'MmTglUw8FZ' + 'DM6pXxrZHQ' + '93p0nk+DEL' + _0x1e5182(_0x538d4a._0x5d71d7) + _0x1e5182(_0x538d4a._0x516c52) + _0x1e5182(0x503) + _0x1e5182(0x84c) + _0x1e5182(0x194) + _0x1e5182(_0x538d4a._0x1d5330) + 'bFcI+KkGPR' + _0x1e5182(_0x538d4a._0x179426) + 'Z+WWkExUfi' + '5uZNaz79p2' + 'f772/cC8tg' + 'e/n2T2c3rn' + '/bfLVTAaA6' + 'v+BCSP/cnm' + 'utGpuVlYlh' + 'F5bjKGvxgR' + 'Pe3jptBeGR' + 'gcvKyqoXV+' + 'HPysqrFyxQ' + 'rM1H4xoGiw' + '9P/XzFX/S4' + _0x1e5182(_0x538d4a._0x4199c1) + '7X7HxQSzUd' + '3f30a9+Wh8' + '/bemdl+7Qp' + 'Lynv3VX4Pm' + 'cYCKBcsf0B' + _0x1e5182(_0x538d4a._0x377276) + 'hrDPcxSiGm' + 'dkFszBF0rb' + 'VJfHPUGxXp' + 'pBBsozpGwV' + 'U3bJnZNEqd' + _0x1e5182(0x2de) + 'XK9E4E5i/L' + _0x1e5182(0x897) + _0x1e5182(_0x538d4a._0x24427a) + _0x1e5182(_0x538d4a._0x3e921c) + 'ZMJpkYaQFg' + '05yrtky+9y' + 'aW96BwQfbn' + _0x1e5182(_0x538d4a._0x296678) + _0x1e5182(_0x538d4a._0x3261aa) + 'YcJBNCW/Fd' + _0x1e5182(0x4b0) + '837TZnV4aS' + 'Xbl2C96oZH' + 'p+Sr4F5+db' + _0x1e5182(_0x538d4a._0x56a12e) + 'FXAPqyaib5' + _0x1e5182(0x4b1) + _0x1e5182(_0x538d4a._0x3a6543) + 'uSmsLdhxdl' + 'OWhcUKmo8r') + ('B+W4d14oOZ' + 'P3/mfdI8rw' + 'qAOmOFTaSg' + 'sWz/M/qMbX' + _0x1e5182(0x222) + 'f8jP+f5/12' + 'e+VgwYfOK/' + 'eO+Jq96qoR' + _0x1e5182(0xb9f) + '9L3fdk77/N' + _0x1e5182(_0x538d4a._0x333113) + _0x1e5182(0x49e) + 'XO0hXMLLJq' + 'zu4L5usU3H' + 'VXpLyqC2hC' + 'yQ7Eqoiqa9' + _0x1e5182(_0x538d4a._0x47e51e) + _0x1e5182(_0x538d4a._0x531589) + 'ryd+T6msKV' + 'o2bOmlQrgE' + _0x1e5182(_0x538d4a._0xcc6e6) + 'es8+B0ATvq' + _0x1e5182(_0x538d4a._0x191af0) + _0x1e5182(0x9b5) + 'Mw2jK9UwYb' + '5/7uxluQsC' + 'FIo3DNXo1f' + _0x1e5182(_0x538d4a._0x61670d) + 'Y1Q14H33rj' + 'QfO33K/tb7' + 'Q7sywxnsRy' + 'c6fCc7BIIa' + 'IiUq6wiyOC' + 'KO4q2vur/Q' + 'KIkgISIx8Z' + 'b65c/5dP/2' + 'm1zff6V/BW' + 'oDRxYyml1L' + 'pij2Nsytro' + 'DosKINAonX' + 'fdhvC2neCD' + _0x1e5182(_0x538d4a._0xef94e0) + _0x1e5182(_0x538d4a._0x15a1c2) + _0x1e5182(0x6bb) + _0x1e5182(0x8e2) + _0x1e5182(0x800) + '0Oz41cejSo' + _0x1e5182(_0x538d4a._0x3e38b5) + 'gM9mbrkXd5' + 'jFZ/K6xb5z' + '7rKFFERaHk' + 'srIX7/rXoS' + 'sijFWTIl8Q' + _0x1e5182(_0x538d4a._0x36d9b1) + 'oUNStREam+' + 'bumQ89zeFT' + 'zpx9m3KLU+' + '/SjMvD8ad8' + 'ki+Gg85nhx' + 'MX30ddo8Fr' + 'N4GNdFHw4y' + _0x1e5182(_0x538d4a._0x1af8e3) + _0x1e5182(0x46f) + 'w2Kf/kL+nS' + 'tWUB6jMSNu' + 'qfRdc817Kc' + 'OD0Ds0zoPd' + _0x1e5182(0x84a) + 'h5/UY83GtO' + 'nT6PY3a8Kk' + _0x1e5182(0x7dd) + 'NapYbf0rF5' + _0x1e5182(0x48e) + 'rp0aOnfKef' + 'qufS3mTUnc' + _0x1e5182(_0x538d4a._0x32d645) + 'ERuGdV4ZY5' + 'C2kMXLWiwp' + 'Hmgx8dHncN' + _0x1e5182(0x81a) + _0x1e5182(0x2e6) + _0x1e5182(0x2c1) + 'lVpAydAMj3' + '/9M7svQVin' + 'Fxaqq9wQUf' + '71TiPfYgb+' + 'zYIbbjRNM3' + 'oOv5q1JyiW' + 'HlC1AZK7vK' + '9i+4CkSFRu' + '+6sW0ngbwC' + 'PsPy7kazu1' + _0x1e5182(_0x538d4a._0x37d410) + 'S4dw7v+sEI' + '+naP+i9C97' + _0x1e5182(_0x538d4a._0x44c4c7) + _0x1e5182(_0x538d4a._0x1306f3) + _0x1e5182(0x876) + 'VVAaoYAlWM' + 'hk6yYeuUFW') + (_0x1e5182(_0x538d4a._0x1e3bdd) + _0x1e5182(0x274) + 'v/sr1H52E0' + 'wJHfFa67zl' + '4kmoZj0qor' + _0x1e5182(_0x538d4a._0x66fcdb) + _0x1e5182(_0x538d4a._0x4d6a3f) + 't6CmUUSIkp' + 'YVz99VWgmg' + 'uEIrdu1zaK' + _0x1e5182(0xb10) + 'mMXrLS1ko9' + 'dFSk9N074/' + 'Hxn39M3X5u' + 'qCVFciq8DT' + _0x1e5182(_0x538d4a._0xc3e4d4) + 'aVt2dWDaQn' + _0x1e5182(_0x538d4a._0x342957) + _0x1e5182(_0x538d4a._0x4481ab) + 'AvPqbecaxp' + 'O9Z4oLbtLv' + 'De5Qj2KQGL' + 'RAFg3eeGCw' + '1fQN6JpH4h' + 'v5BtXQJ6Ii' + '6bqzYinU6E' + 'QR58T/DPl5' + 'sGOfTp/q+o' + _0x1e5182(0x7cd) + 'Uksf27PCek' + 'qaJhYVvMtg' + 'KzEBeGUQBG' + '2SdWrq/p+v' + '9Y+FRiBVUF' + '1dVYWuzb7Z' + 'dzvgvOdN+b' + 'hhGVSA8nKH' + 'hY4sthAIDQ' + 'MYeWPhFeW/' + 'd00Sh8RH5K' + 'Zq9ozkrJv5' + _0x1e5182(0x2df) + 'NagDLTUFVE' + _0x1e5182(_0x538d4a._0x13914e) + _0x1e5182(0x674) + 'WWJx7FrffS' + _0x1e5182(0x5c7) + '0tI9134tUi' + 'QsX2rbXU1U' + '2SFjdKZ2wo' + 'Ipoy7+qZdv' + 'K4MCFE9Aqp' + _0x1e5182(_0x538d4a._0x55846d) + _0x1e5182(0xbc3) + 'JtnNuzTXpO' + 'w+qJt1ovfQ' + 'SGVqycXvRX' + 'iHiDdrDr4a' + _0x1e5182(_0x538d4a._0x7b54d7) + _0x1e5182(0x9a1) + 'KNUNtAF01T' + _0x1e5182(0x63f) + _0x1e5182(0xb52) + _0x1e5182(_0x538d4a._0x1dbe7a) + _0x1e5182(0xaf2) + 'rsrCt3fKLg' + 'AnyJQKtRMW' + 'Thlavm4331' + 'adWQ1QBQVl' + 'ZQxtVvnWKb' + _0x1e5182(0xb7f) + 'rLqcLLJZPy' + _0x1e5182(0x2cc) + '7876ZyB9KM' + 'cDD/82pU77' + _0x1e5182(0x6fb) + 'samD2ELo2E' + 'hiA/Xr/bCy' + _0x1e5182(0x901) + 'N2+Kz/r86T' + _0x1e5182(_0x538d4a._0x40e13b) + _0x1e5182(0x95a) + _0x1e5182(_0x538d4a._0x577a87) + _0x1e5182(0x856) + _0x1e5182(_0x538d4a._0x5c0b55) + 'pZHM9ulmmo' + '9bEgiav1BV' + _0x1e5182(0x4e2) + 'LIKZRVL15Z' + _0x1e5182(_0x538d4a._0x40bc5c) + _0x1e5182(_0x538d4a._0x47489c) + '1R8Bhg4/eN' + 'n3ozu6oxqf' + _0x1e5182(_0x538d4a._0x5a1a5e) + 'rOBvWyCT5t' + _0x1e5182(0x780) + _0x1e5182(0x23d) + 'kHp1Xj13jb' + 'pX4QmA9drv' + 'fW5IJFSzLA') + ('iDQBXtzYor' + 'xgUerOnt9f' + 'XW1DjH/fDN' + 'iEFcwl/05W' + 'eNpgpwKujy' + _0x1e5182(_0x538d4a._0xaa9300) + 'MmIflAystZ' + 'OQGLLs6+Ww' + _0x1e5182(0x718) + '4l5anZnp5M' + 'XLo//WBJW/' + 'BDD3CnDol6' + 'ufLil6SRyZ' + _0x1e5182(0x6f8) + 'sq+B9lR3yD' + 'njB1fZinEU' + _0x1e5182(_0x538d4a._0x8d3f87) + _0x1e5182(_0x538d4a._0x21c103) + _0x1e5182(_0x538d4a._0x2b1f82) + 'ZZEIRQRCQK' + 'u4YuiDvXuf' + _0x1e5182(_0x538d4a._0x1989df) + 's//Gyh78Fx' + _0x1e5182(_0x538d4a._0x24b8c2) + _0x1e5182(_0x538d4a._0x316db9) + 'FSEKC655f8' + _0x1e5182(_0x538d4a._0x377898) + 'mlZVQVk5vF' + 'hVlXXbmpnd' + 'NPvFaiCZ70' + _0x1e5182(0x56f) + 'P+mg9N2PE9' + '7bH52Xr7/m' + 'gyIp73Pv28' + _0x1e5182(0x52c) + 'XJeZwbzRRs' + 'AAiyyBQIt1' + _0x1e5182(0x2b1) + _0x1e5182(_0x538d4a._0x116d12) + _0x1e5182(0x66e) + '4a4uyF0P66' + 'wqrJUy5wu9' + _0x1e5182(0x3c4) + '4fs5yyjayN' + _0x1e5182(0x1b8) + 'ogiiBLov65' + 'nhn4fzvVU0' + 's6y8HLVs9a' + '3l5eubN2y9' + _0x1e5182(_0x538d4a._0x4169c3) + _0x1e5182(0x4cd) + 'y6pee3fPB/' + 'KCxIU2W15/' + _0x1e5182(_0x538d4a._0x1f069d) + _0x1e5182(_0x538d4a._0x549716) + '/eRGh1kpYT' + 'EyaC0oapBq' + 'MTLsghr8Vl' + 'Xmq9i5aZvt' + '0Wup4eyxTw' + 'eq3/MBHEqK' + 'O6/elqNr+X' + _0x1e5182(0x94e) + _0x1e5182(_0x538d4a._0x48afe8) + 'li5gzfOIxT' + 'VVRKiqh6L6' + 'a3PLd46qLZ' + _0x1e5182(_0x538d4a._0x32d5d4) + 'vLoI08f/5H' + '3HzfrUzHoj' + 'iu4tZtHX7f' + 'UohM6h5cZj' + _0x1e5182(_0x538d4a._0x146963) + 'omeIlTdPM6' + '+70xEzQg2J' + '8LYsMRcdFF' + _0x1e5182(_0x538d4a._0x663201) + 'B99MO8Qiqg' + 'ZQ5frePeNW' + _0x1e5182(0xa16) + 'WJ9TwLzCii' + 'auKo5m/z9A' + '7RJ68AoIs+' + 'f3dXHFzo9c' + 'qKq863OPr0' + 'Z/9YPO77s6' + 'oIRcvYMCuq' + _0x1e5182(_0x538d4a._0xf9787c) + 'lL+Dywed1H' + _0x1e5182(0x33c) + 'iP5uTrDHlY' + '2elYt4AUJ6' + 'IqBlSQJMCQ' + 'S6NYK1LRCa' + 'I4qSCSAvdS' + 'VCkoja76eF' + _0x1e5182(_0x538d4a._0x4d5092) + _0x1e5182(0x51c) + _0x1e5182(_0x538d4a._0x3ddd33) + 'i3TH3J8/cO') + ('Q5z0IKkKQ9' + _0x1e5182(0x978) + _0x1e5182(0xbdb) + 'eXPmnnWbmU' + 'nMzF9AzUP/' + _0x1e5182(_0x538d4a._0x502955) + _0x1e5182(0x3c9) + 'v3xg4i9/fj' + 'GcLax5lj8+' + 'M35WTgPLuB' + _0x1e5182(0xbb4) + _0x1e5182(_0x538d4a._0x4c382e) + 'bR+Y/rvqs0' + 'LaJtqnA51v' + 'a0Nz380Pet' + '88ymomiBDD' + _0x1e5182(0x862) + 'cEOd1xTjLF' + _0x1e5182(_0x538d4a._0x3059fc) + '6lopE95U8A' + 'KoZpFOOC+8' + _0x1e5182(_0x538d4a._0x4f40c0) + 'BzdNVlZQBz' + 'NnG68owPZX' + _0x1e5182(0x221) + _0x1e5182(_0x538d4a._0x1514ac) + '+sYZ3d9UHq' + '7RBXsGguEX' + 'VQ0YKyejWT' + _0x1e5182(_0x538d4a._0x121354) + _0x1e5182(_0x538d4a._0x43c770) + '6Cyu+WMk6d' + 'UFSy4QcvS9' + _0x1e5182(_0x538d4a._0x4c8816) + _0x1e5182(_0x538d4a._0x24b9a0) + 'B4CJK7z+N7' + _0x1e5182(_0x538d4a._0x5ce4f8) + _0x1e5182(_0x538d4a._0x455928) + 'sC2A3cD++7' + _0x1e5182(0x631) + 'V1O96I6moY' + 'M3fbzG6aBV' + 'CNSbGyzDay' + 'xgbPPmehzW' + 'cN6+VTv7ww' + _0x1e5182(0x993) + _0x1e5182(_0x538d4a._0x31378f) + 'kQwiC6bRWt' + '4yd9mypkj3' + '9sKHz5saXz' + _0x1e5182(_0x538d4a._0x17f87d) + 'NVBrhBdBqX' + _0x1e5182(0x7d1) + 'vPOnt3+wyf' + 'rqJ3s0FyB/' + _0x1e5182(0xb40) + _0x1e5182(0x815) + '0uoy9NKrmD' + 'Sid265aN/+' + 'fCQqql1OK6' + _0x1e5182(_0x538d4a._0x407107) + '3wHr+b9ZmE' + 'Fwl+ITRUIS' + _0x1e5182(0xb01) + 'y/AigU7wQl' + '2qK8Ky53X7' + _0x1e5182(0x810) + _0x1e5182(_0x538d4a._0x5db120) + _0x1e5182(_0x538d4a._0x1717ef) + '8fdlIitCLH' + '/uZd3Pac+c' + 'k4cRegqqBC' + 'oReIsVFF5/' + 'Z3jTM1wh6h' + 'fKXHSoBidx' + '6G0kGwqMEF' + 'sjWTj2TVho' + _0x1e5182(_0x538d4a._0x4a4807) + 'xuKY4YAUIQ' + 'AWFDKz7e5f' + 'ePF0WPC2WV' + 'JCk+EcS9Ju' + 'f8RXu84Nxn' + _0x1e5182(_0x538d4a._0x788128) + _0x1e5182(_0x538d4a._0x3c9258) + 'H2LyqZIXXH' + _0x1e5182(0x23c) + 'bESRFUV0Ua' + 'BAVVXTkmVd' + 'o6+s9KxbXc' + 'WC/ixFV1ad' + 'lZW/ZtozbW' + _0x1e5182(_0x538d4a._0x381fe9) + 'Vy2w6T+Fs4' + 'b1fLg1a/Hn' + 'bl9foYAXc+' + 'asxmXTB/6d' + 'mMqR0W6sZF' + 'kOh0o4/7Ls' + _0x1e5182(0x673)) + (_0x1e5182(0x9cf) + _0x1e5182(_0x538d4a._0x4a7df4) + 'VUdSi1Dt2r' + '54197Unjc1' + '2M4vj5wEXA' + _0x1e5182(_0x538d4a._0x24dcdc) + '3XRquNiAxq' + 'GUrSdI1ugs' + 'UYMMbI+Vbb' + 'k+1/PHtYfy' + _0x1e5182(0x7ed) + 'aFQUqMUaCA' + 'KA5uuzOkV+' + 'xECTKCERRe' + _0x1e5182(_0x538d4a._0xd99840) + 'UBVEggkd5H' + '0qgigTxsSA' + _0x1e5182(0x51d) + 'ygumNT5krW' + 'VyWrCrhE6n' + 'IIgFFPsPCT' + _0x1e5182(0x54e) + 'YxV66q2jl7' + '7pqZz0Fbb1' + 'mZUYJO6ai/' + _0x1e5182(_0x538d4a._0x116c73) + _0x1e5182(_0x538d4a._0x3978fa) + 'gxIGBFCBNu' + 'Rczid2MSpa' + _0x1e5182(0x8da) + _0x1e5182(0x7f8) + 'E8lmFrxhex' + '2gVtQ0IkEF' + 'vr9Ez3Onwq' + 'Z6RVS8oiKr' + 'LhnUJoyqWj' + '3cXTOgaQ3X' + _0x1e5182(_0x538d4a._0x330727) + 'ApW6Zu8DEf' + _0x1e5182(_0x538d4a._0x31cd48) + 'xh3Q6vkQkA' + 'OcyAaDTSx3' + _0x1e5182(0x473) + _0x1e5182(0xbbf) + 'TAp6hc86a5' + 'Dl0QAUpkgj' + 'ypuBSf4gYF' + 'hZqM5ocIPs' + _0x1e5182(0x405) + 'ZUoX3bZqDB' + 'AFKvCT6xIG' + 'plwDUf6Oo+' + '9ta9zcBsjF' + _0x1e5182(_0x538d4a._0x56e119) + '7muRCLM6LU' + _0x1e5182(0x5f0) + 'tL+GU4bOIb' + 'FJHKoqIo2c' + 'xAZLoDRLgU' + _0x1e5182(_0x538d4a._0x2ec5a) + _0x1e5182(0x20b) + 'WThBQGaXKw' + 'TFBwqRxQrR' + _0x1e5182(0x231) + 'A4Ypq/rqhC' + 'WMLskji5tL' + _0x1e5182(0x220) + 'lBJFGL+X/X' + 'lrbLdnaXjD' + _0x1e5182(0x77b) + 'aXQfOdWxZu' + '2MTeUAZzl7' + _0x1e5182(_0x538d4a._0x3a2b19) + 'rljxs97KmQ' + 'v8uN0kcBk5' + 'KdQdjBW5J+' + _0x1e5182(0x740) + 'Ik/YtfrLKZ' + _0x1e5182(0x789) + _0x1e5182(_0x538d4a._0x68b0da) + 'iM7J5AZFF0' + '5UGVykONpP' + 'hUGaKWrNoG' + 'sYG4oMRJ3B' + 'TkGGgglUKN' + _0x1e5182(0x9dd) + 'yYZYvpVSdF' + 'wuKzKoxF7S' + 'svPxtYm7sW' + '/+ahUXc5Yr' + '4YjcXGQ52I' + 'RY2KC3PF6K' + _0x1e5182(0xaba) + 'RRVbXWIjdd' + 'Y1b100h+4C' + _0x1e5182(0xa7c) + 'OEtU2yTxRd' + _0x1e5182(0x94c) + 'fnywJdKVFB' + 'ohIIu8ehqK') + (_0x1e5182(0x43b) + 'Dzaw1gCUhk' + '0Tpr//+Drm' + 'oifQQpbvzi' + _0x1e5182(_0x538d4a._0x1aa375) + '89CnPgtYYW' + 'i+DBUu3yMf' + _0x1e5182(0x8db) + 'RqLpVZ9Y5X' + _0x1e5182(0xaa9) + 'QKikihoFbK' + 'Fks5r6px8U' + 'aoAC+jtALL' + '1Vqs6ZIrVE' + 'XGJKRSAUqd' + 'OInAX3cQWS' + 'CqqAIojVSF' + 'ElAUmXhdcp' + '2sQVgipe7S' + 'GlnRlOvfWz' + _0x1e5182(0x562) + '5vj4mSHniy' + 'xlV7VvldV2' + _0x1e5182(0xaaa) + '7Xv6r+Uds0' + _0x1e5182(_0x538d4a._0x1e2f1e) + 'unMKk+XiKD' + 'WrKriTy/fn' + _0x1e5182(_0x538d4a._0x9224e5) + 'QSH2aAU3Ni' + _0x1e5182(0x8a9) + 'QAaViqzYCy' + _0x1e5182(0x20c) + 'r12igohKWA' + 'WvQ1SI1+Gq' + 'Q4GmEEHhnL' + 'JkozWSjUZM' + 'DT8nUxfF0W' + 'oqQ+fuxVth' + '43oduHlz2P' + 'UFHt0pvHzT' + 'WaArACSX3v' + 'jYfSvbq3K/' + 't/exTzzvdq' + 'zf0FpXzO2M' + 'jxfkYmf5Od' + '6JotujuqBA' + 'cWNshm452m' + '6JUwVEHWqx' + 'Sq+2VgGvqB' + 'BBRH5QBFmR' + _0x1e5182(0xa8c) + '/gYtELQXC4' + 'JZ/gEGXwCn' + _0x1e5182(0x184) + '1EgyrQHTpH' + 'nvbdtY2FZF' + '0d6vrr4Vqp' + 'zz+ZkE22qr' + 'UceS6ONnTe' + 'dUCKNmXfjY' + '/pX7/5E7HR' + '7e/ulvP1yx' + _0x1e5182(_0x538d4a._0xd71929) + _0x1e5182(_0x538d4a._0x3144db) + 'ZQV8DSD5Cl' + 'o4qzObiiJB' + '7aLIIIsikS' + _0x1e5182(_0x538d4a._0x26d355) + 'hCXEKVPJB+' + 'LEWWoLrfNR' + 'qpIi8Hkqna' + _0x1e5182(0xa1b) + 'aaRHBkmS3T' + _0x1e5182(0x3ae) + _0x1e5182(0xa6a) + _0x1e5182(_0x538d4a._0x522181) + '241Q91C684' + 'ywkq+PS/DK' + '9CYe7MOIdn' + 'iHjZac74O9' + 'kVjX6Et5Pz' + 'fjwQVzY6zw' + 'Has/BID4+H' + 'l3FIxH5BJG' + 'IFSv1F+6pi' + _0x1e5182(_0x538d4a._0x5e34bb) + 'ZPlq+f77LT' + 'qakURgkQ0C' + _0x1e5182(_0x538d4a._0xc45216) + 'q1iXpYdkPY' + _0x1e5182(0x27d) + '3ciFnlrG6N' + '7Vin7/aLPr' + _0x1e5182(0x2a9) + 'xJR0tuhqh/' + 'ylcxd7m/3X' + 'L5oxLfzqL2' + _0x1e5182(_0x538d4a._0xbc2e13) + 'vv3jv3Tl6A') + (_0x1e5182(_0x538d4a._0x3f4401) + _0x1e5182(_0x538d4a._0x50030d) + 'BLfigAXcJU' + 'E2EVa8vdtS' + 'AJ+F6BciDV' + _0x1e5182(_0x538d4a._0x22956c) + 'GQRVa5SJU6' + 'LxWJWIuh7Y' + _0x1e5182(_0x538d4a._0x264207) + _0x1e5182(_0x538d4a._0x3ef110) + 'EV+uysgA2e' + 'a0uHw1ntZe' + '0AjUfg3DNB' + _0x1e5182(0x434) + 'ZT29z5c/c0' + 'NjenR54Kh3' + _0x1e5182(0x55d) + '9/mtl6HqEb' + _0x1e5182(0x362) + 'arfG/RwvjB' + 'dFIqogenwu' + 'UXFheanoXb' + _0x1e5182(_0x538d4a._0x560db9) + 'PIo6sXDKW1' + 'oxUKekVICP' + 'UBBEAg5QBC' + _0x1e5182(0x55a) + _0x1e5182(_0x538d4a._0x4e8a99) + 'utM7hyI/+K' + 'qzzr1q0Lf9' + _0x1e5182(_0x538d4a._0x4fe811) + _0x1e5182(_0x538d4a._0x330bab) + 'BkQzzbMWsu' + 'DxAGeKo1Gw' + 'D2ZF25Y9dE' + 'w9KVnEqc7n' + _0x1e5182(_0x538d4a._0x1d208f) + 'b/L+kepc3C' + 'UBccrg47Ba' + _0x1e5182(_0x538d4a._0x28d54c) + 'pyKFEIuIXl' + 'QOl4ICKtdV' + _0x1e5182(0xbc2) + '0U1kGXx1aA' + _0x1e5182(_0x538d4a._0x5e444f) + 'qcz9ZMb7j7' + '4fqGJQmc++' + '3kc5zWlsQC' + _0x1e5182(0xbf5) + 'LzseyM7UWo' + 'Ss8hkR+IUt' + 'nG2DVlv2C+' + 'lbJzQwDlaK' + _0x1e5182(_0x538d4a._0x1f8cbe) + 'r+g989srzS' + _0x1e5182(0xa27) + 'jHj5eW1BCH' + 'rCyh6J0LIk' + _0x1e5182(_0x538d4a._0x102d8c) + 'QWT1Ti8Qcb' + 'mzUgCvCBVQ' + 'p3igYonXAV' + 'CILWoej+SR' + 'pUiNOxo9f2' + 'lkzr47B1qH' + _0x1e5182(_0x538d4a._0x1c1b4d) + '4vb4xB13FJ' + 'qlOsM8jnSK' + '31ANmtrQDZ' + 'pKXlXCs8tQ' + 'ehZu+Zkzmn' + 'vFZQMUDhA1' + 'GJm2bNrH44' + _0x1e5182(0x1f3) + 'ujTLsmj1rP' + 'c7o3nwPT1T' + 'UNhDLvzu2R' + 'RVUEyVcrAP' + 'hzJJXKDuoE' + 'waGinyiqQi' + _0x1e5182(_0x538d4a._0x40c775) + 'lYShFGrcHi' + 'le/NaYwzNI' + 'PktIYrQps+' + _0x1e5182(0x1dd) + 'eDFnOJzh4r' + '7+Lf+GhQ7a' + 'mp2dCRCfDw' + 'C/CI9rhfA4' + _0x1e5182(0x1b7) + _0x1e5182(_0x538d4a._0x5cc482) + _0x1e5182(0x57e) + 'Mrtxyomrwi' + 'dMNja95f/j' + _0x1e5182(0x8b2) + 'cReDSmqY24' + _0x1e5182(_0x538d4a._0x4a81df) + 'fwmQEqzNdK' + _0x1e5182(0x9d1) + 'us+tNVSGGl') + ('LqAWuyFt3/' + _0x1e5182(_0x538d4a._0x519cc7) + 'Zd1ggrNyET' + 't8Gt+VPOFC' + 'v5ep2Tt2fl' + 'jo2zAvFMbH' + 'x5dZh3IUDY' + _0x1e5182(0x1ba) + 'iGpcBMo4BL' + 'Vgi3btP5jb' + 'x9WHfyoSZC' + _0x1e5182(0x4d2) + _0x1e5182(_0x538d4a._0x83a0c4) + '3MJdhXEgE+' + 'thQp0AWtOn' + 'D2+4YrciSn' + 'VoNgHeAW+F' + _0x1e5182(_0x538d4a._0x39f02c) + 'OatQYLOiUZ' + 'JHxUtPafXT' + 'NmFzQZKYBq' + 'KNu04fxPfo' + _0x1e5182(0x8ed) + 'Pxs8PHZlxf' + 'n7xvDAt2KQ' + 'Z+SeH3SAbc' + '9TNlgzdwEF' + 'V613iS4rIK' + 'p1XolVdfJL' + _0x1e5182(0x5cb) + _0x1e5182(0x816) + 'y6TvcbVbab' + _0x1e5182(0xba3) + _0x1e5182(_0x538d4a._0x30514f) + '7su6+U1fNo' + _0x1e5182(0x6ba) + 'LZWQlOxaXU' + 'ili6RsAqgb' + 'XG7ZEBCwXm' + _0x1e5182(_0x538d4a._0x4e9040) + 'V5GTp21eWO' + 'v8Xvnzt747' + _0x1e5182(_0x538d4a._0x3a3a41) + 'nfVvfzHSnA' + 'mt2e2t7Tcf' + 'HvskhPc8Hx' + _0x1e5182(_0x538d4a._0x33fd65) + 'Fh2eOsUlyk' + _0x1e5182(_0x538d4a._0x165e04) + '9Zy5vTmxZv' + 'LrP8wpnnbE' + '3LRj5WFXyY' + 'pZi6G2fPsj' + '79zy+seRdZ' + 'vXbWzecHiK' + 'TmPgVIEsJ5' + 'gRqQPB6QRS' + '6wZQeA2ou0' + _0x1e5182(_0x538d4a._0x5c3e8f) + 'gGD6/oZ3qz' + 'ZhPBGgsQrK' + 'qJfO1JzgzM' + 'm1fsKfJayR' + 'yDx9H7dWyj' + 'a1Ap/pP3xu' + '6pO2cWD716' + 'ybgMPKZwwQ' + 'yeAEcCuVcB' + _0x1e5182(0x5db) + 'S8d8n6pDnJ' + 'v/cMOMCxes' + _0x1e5182(0x383) + 'MaOTH58Be/' + _0x1e5182(0x496) + 'qXR9R1Gi2h' + '4CyVYYkPiw' + 'hAEMhyopCI' + 'Ta7xSBD2yJ' + 'hrKPUA0TKX' + 'hqsxIo4MXF' + '4NVXlmONLc' + 'xtUQ+BXb3m' + 'cB6xpo/h+6' + 'c+yPmzIyIb' + 's9e0zj+bnr' + _0x1e5182(0x5a3) + _0x1e5182(0x9ff) + _0x1e5182(_0x538d4a._0x198287) + '27CFAbZwLo' + _0x1e5182(0x831) + 'Z9gZBtHGTf' + _0x1e5182(_0x538d4a._0x107767) + 'nPm/7Oa9aX' + 'C+H2Q088uM' + 'lv4kTBW+Ok' + 'NQ6MxoAqeS' + 'UwY0TA7ZYl' + '2e0GqcZW43' + 'Z74sVvbbA0' + 'bWjra2Yv9+') + (_0x1e5182(0xb8f) + 'w1FDln132U' + 'Tgzr2fdaWn' + '9M7DOQqZ+7' + _0x1e5182(0x830) + 'PKKVYseG4g' + 'OJmcLYt1Ba' + '92TPj7BSFF' + _0x1e5182(_0x538d4a._0x107aa8) + 'fOIf4V/8Dt' + '3McOs49vWP' + 'S20XzSvfcN' + _0x1e5182(_0x538d4a._0x586539) + '+n8yqhpBBa' + _0x1e5182(0x2b2) + _0x1e5182(_0x538d4a._0x51c50a) + 'CHTfLjh++f' + 'OGZjHgqxi/' + _0x1e5182(0x483) + '+kfcq70fYa' + 'bgu2O96J15' + 'TqG5qmtMkZ' + _0x1e5182(_0x538d4a._0x4fe064) + 'dc/ISbMn1W' + 'L7hlQpSdhf' + _0x1e5182(_0x538d4a._0x55d265) + '5YUr0UWvnM' + _0x1e5182(0x325) + _0x1e5182(0x8e0) + '2/P872zhXz' + 'wVtu0Zt3Lq' + '0aGBlNbrTJ' + 'DFkTgICqFo' + 'OFICXmdJpZ' + 'OCzRkTwpig' + 'dIMngVSWLP' + 'wzN5Yvorlx' + 'gAPReWPj4y' + 'L3Tv9sz4id' + 'wk//zK5U+8' + '48/K7ZWuic' + 'O9e2f1Nhz+' + 'ZX/9Ys3fip' + 'Z84lZWNrBR' + 'FUqdLRKAMQ' + 'bM8gIHhVuh' + 'VqYD9mDLP3' + 'g47mR3Zrq7' + _0x1e5182(_0x538d4a._0x2af9a1) + '/A5s4exRFs' + 'cXtDfW630n' + 'h9fiAlXcXq' + 'wl8booOKHO' + _0x1e5182(0x26c) + _0x1e5182(_0x538d4a._0x37a84b) + _0x1e5182(0x658) + 'NiW698/vn3' + _0x1e5182(0x777) + 'FiT30e6fIY' + 'OXX+m2LN+1' + 'k4dHso/LPe' + 'vL5A4q2z/T' + 'F+9/yx/g/D' + _0x1e5182(0x433) + '+xsDD2PlUU' + 'kdZJItaaCC' + 'CJIq2QKwQ9' + 'x2qbR5mVNS' + 'abQ9T7OQDf' + 'HQKA7Slb2G' + 'bbA622J3N2' + 'OODuA7Pzfl' + 'YcK6Hgg+Uo' + _0x1e5182(_0x538d4a._0xc88cc) + 'tF8HyPR2sj' + 'LKPtLXk8bg' + 'DZUwO+Hwjr' + _0x1e5182(_0x538d4a._0x1400d8) + '9+/uFrO+/4' + 'vW5+TrNesO' + _0x1e5182(_0x538d4a._0x35025) + 'U47+6lKA9F' + 'cBlraDjb7/' + 'aqUNVnCNBx' + 'th1sc8V3PR' + _0x1e5182(_0x538d4a._0x188322) + _0x1e5182(_0x538d4a._0x5b38df) + _0x1e5182(0xa73) + 'q08e/nN88Z' + _0x1e5182(0x3a4) + 'vbWlo//ume' + _0x1e5182(_0x538d4a._0x146506) + _0x1e5182(0x6d2) + _0x1e5182(_0x538d4a._0x49868a) + 'R8FbICRFAB' + '1YxXkh1mbe' + 'J2d5htWCiN' + 'YICuFCIW/a' + '8/+ePdl7z3' + '8DlmjY8Jb4') + ('J11a8h/byH' + _0x1e5182(0x29d) + 'zY2NT/6N7H' + 'Pn37rnuTsq' + _0x1e5182(_0x538d4a._0x2998bf) + 'eToWC/9j1A' + 'dNmfFNAFbT' + 'qi8eIx9lCQ' + '7Ni3FBn4SR' + 'JOLFwCAGnF' + 'hQSQTqhS/s' + 'BmGzW7Nb9+' + _0x1e5182(0x64a) + 'zbAnOwy/Q6' + _0x1e5182(0x752) + _0x1e5182(_0x538d4a._0xb6b498) + 'RaIoIqO6Gk' + '0iWguoXCCF' + _0x1e5182(0x929) + _0x1e5182(_0x538d4a._0x20f428) + 'mTXs65ezeG' + 'YkxLxjzNfV' + 'oWn2yd2WIG' + _0x1e5182(0x354) + 'vpmueNZrr2' + 'f2hkUbFI/c' + _0x1e5182(_0x538d4a._0x57e6ab) + _0x1e5182(_0x538d4a._0x2e8269) + 'zTFePiwMUF' + _0x1e5182(_0x538d4a._0x15b9b2) + 'AAtQRfYI35' + '0q7Wlveljj' + _0x1e5182(_0x538d4a._0x193978) + _0x1e5182(0x539) + 'B0fs+ceRUX' + _0x1e5182(0x4f9) + _0x1e5182(0x310) + '3iolhZTU4V' + 'NTYWxXaU1p' + 'DUg2jzvM5L' + 'El/mwVtyhy' + 'BSePw8krmj' + 'kO7239h7bo' + 'QEk6zuiI1f' + '9q7ddSlhhY' + 'z9u28rXXrb' + 'qxfRMBV44q' + _0x1e5182(_0x538d4a._0xc6444b) + 'L5+iuyCOFR' + '4iLXgUtm5W' + _0x1e5182(0x533) + 'fRIoxLx605' + 'Af/W1qfj9W' + _0x1e5182(_0x538d4a._0x132ea1) + _0x1e5182(0x3c6) + '/7rnwuxXCj' + '+9LY80SlId' + 'CuASjLxgGR' + 'vD7XW4aov5' + '7YB1bDKU1k' + 'g2lMFx+cEh' + '0y7iKOLk8Q' + 'vwZNUnL93d' + 'Pncru9jY7P' + _0x1e5182(0x62e) + 'zQmCCjFz2p' + 'IagP2RKy+N' + 'kuLPjeYy7P' + _0x1e5182(0x68c) + 'dB8pLkycu+' + 'tiD2QLQ7PH' + _0x1e5182(0x8b6) + '7Nhv0bhdFN' + '+21Dzzkn1j' + 'Ima8v85UMe' + _0x1e5182(0x74f) + 'f7nKhwgPqc' + 'uGtN2ljNFg' + 'YZ3GGwRlDD' + 'QvHTG0ZeUR' + 'TDkeGIFRAx' + 'kFUfTl6Z18' + 'Ec9Zh5OvfR' + '14AlDGt01X' + 'OrKSLVj5fL' + 'aINPPgTQJU' + 'x15ESJgC2P' + _0x1e5182(_0x538d4a._0x22e011) + 'OrsrIuBfuZ' + 'FeRpfs3roy' + 'cJkK0zHdsn' + 'o/bzVeL0Vr' + '7zy9lE3yBt' + 'g9mLYl5Jwo' + _0x1e5182(0x720) + 'LEqMxkRJnT' + _0x1e5182(0x544) + 'uD0ggc0zWd' + 'n1UPZPOIoQ' + 'mbQ1CAvkP9') + ('u6bvmncaEx' + '88O/+RouJo' + 'g1zzvzfVh+' + 'ufUEpAm03H' + 'mH4OkKKbNs' + 'AtZ4oBdWut' + 'xBSlcUgCIW' + 'eUDELDLBDC' + _0x1e5182(0x57d) + 'n38I2UwYM/' + 'OJbd6Nzk3g' + 'mNkKzS3Sri' + _0x1e5182(_0x538d4a._0x3a84df) + 'sp3qpKLqra' + 'jDPyfITjre' + _0x1e5182(_0x538d4a._0x1f10f1) + 'CNmE0LR/5K' + '3TdB6xM/jJ' + _0x1e5182(0x53e) + _0x1e5182(0x746) + '4sQaznPP2P' + 'fwMsX8IRBD' + 'YIZuKxDhjb' + 'ee7aafOIxq' + 'xB1sNqNM5h' + _0x1e5182(0xb49) + _0x1e5182(_0x538d4a._0x127f30) + _0x1e5182(_0x538d4a._0x52bae) + 'W7XWM2hLF7' + _0x1e5182(0x893) + _0x1e5182(_0x538d4a._0x22c9a6) + _0x1e5182(0xbdd) + 'lI2BJZzQPc' + 'owkmrgEo/v' + _0x1e5182(_0x538d4a._0x5ce6d8) + 'IME9C5rp7U' + '8iGQf6LjdW' + _0x1e5182(0x41e) + 'P57tctAMth' + _0x1e5182(_0x538d4a._0x1ce7f4) + _0x1e5182(_0x538d4a._0x418d0a) + _0x1e5182(_0x538d4a._0x5e099a) + 'FecLigVkTK' + 'ABQtR0nF9o' + 'MIRfWrP404' + '0psWxDgdt6' + _0x1e5182(_0x538d4a._0x3c9f1e) + 'PWWX+piFj6' + 'LrK6pQUiui' + 'svI5mTT2Sa' + _0x1e5182(0x39d) + _0x1e5182(_0x538d4a._0x2e4c78) + '3QHeN3T0AM' + 'yLvm3QXQyK' + 'Qx6Hv+eXjO' + '5r7IWoycjy' + 'U0cCqw7Pqi' + '1heWGE+XLw' + 'EG90SDSofz' + 'D6XvuGwORF' + 'twx6LlICBG' + _0x1e5182(_0x538d4a._0x297a2a) + 'dCExET8VUe' + 'VmfGWhzTAl' + 'iHjs5gKwCX' + '/bJDCLToi2' + 'aZYs1Lljsw' + 'rEQxc+VFAU' + 'UEVZCgzuuk' + 'E2Ia2sLsz0' + _0x1e5182(0x1b6) + _0x1e5182(_0x538d4a._0x2f9dbf) + _0x1e5182(0x4e0) + _0x1e5182(_0x538d4a._0x539f84) + '84DVYTAFzw' + _0x1e5182(_0x538d4a._0x19f384) + '22JIpZRh04' + 'nRvYwZz+GX' + 'X+4P078lxe' + '1C+JMpEGSc' + _0x1e5182(_0x538d4a._0x267f44) + 'nwS+ilqvk2' + 'a7sgRIH5G/' + 'dV9+Vo5/zP' + '7M9tz2KhDK' + 'Mp9Ss++eS6' + 'Mg6eD2CQoh' + _0x1e5182(_0x538d4a._0x464957) + 'UILlvBujZm' + '7oPNAzCx/v' + 'dvUeRYhEu4' + 'D85dbhtqGs' + 'OjINHIOeBO' + _0x1e5182(0x30b) + 'ad2qRAuubt' + 'KX8/QdQEdW' + 'EA8CAC6zTn' + '0peZZYeESO' + 'xPTDQpIipb' + 'EGUHU5EO8D') + ('l5qN7XCl2P' + 'rEnRulOxDb' + _0x1e5182(_0x538d4a._0x30de45) + _0x1e5182(0x637) + 'WFMUWUaAoQ' + 'L25OZwnUeQ' + 'EK8nXBUxqR' + 'ES3YPJItJt' + _0x1e5182(0xb35) + _0x1e5182(_0x538d4a._0x146060) + 'DiRUA0IO9+' + _0x1e5182(0x7de) + _0x1e5182(_0x538d4a._0x5c08c9) + _0x1e5182(0x656) + 'oOS5YviYpg' + _0x1e5182(_0x538d4a._0xc58866) + '+X/BujhqzQ' + '1EmxbJQwo9' + 'FVCUv0SgcS' + 'F0GYyN4D3K' + 'aI3j0phXWO' + 'RPUGgJl8Xt' + '6EWiZrmbsq' + '4KwG/I5WFx' + 'EjmOhpvEiz' + _0x1e5182(_0x538d4a._0x3c20e7) + _0x1e5182(0x8ce) + 'mt/99HD6jK' + 'lbpnN/Pjx3' + 'MeU18t77UP' + 'bx4Mue3HLo' + 'VGAR67i9Cy' + _0x1e5182(0x3fb) + _0x1e5182(_0x538d4a._0x1bb082) + _0x1e5182(_0x538d4a._0xd90239) + _0x1e5182(0xad7) + _0x1e5182(0x493) + 'YDqWNTijQZ' + 'WdvKuxPf7F' + 'rxYnmmS6vj' + 'dl0zyTruHY' + _0x1e5182(_0x538d4a._0x472231) + 'lkWBKUGU+l' + 'NbiptLG73B' + '7kYFSt4AGQ' + 'DhpIwRxfvR' + 'VIXZO5l9P3' + 'Pv5yV0zn9f' + 'cqU25IaFiD' + _0x1e5182(0x606) + _0x1e5182(0x3a1) + 'AIyILVEL96' + '8Hm561YvSb' + 'WYhURLtdME' + _0x1e5182(_0x538d4a._0x346d3f) + 'VlUoKYQSkw' + _0x1e5182(_0x538d4a._0x1afbd9) + _0x1e5182(0x70b) + 'oKNA8zn/EX' + 'FKQqyicv4g' + 'XwOvddEbPU' + 'IFQ383KgBt' + 'zexGYl763u' + '5jYRzqKHrX' + 'vWbgxUmnn9' + 'vU+PzjiGrr' + 'F6tmVPBpbt' + 'xvB1xlj5wV' + 'AZeGMtWbJk' + _0x1e5182(_0x538d4a._0x2960f8) + 'qdxcQMMjhE' + 'yYdOiuwSFB' + 'kEB2oLNt+g' + _0x1e5182(_0x538d4a._0x25c914) + 'A3m8flzBFM' + '8+bNE+bmlO' + 'haDRUURVlu' + 'zGhQlEoF1I' + 'oSNIVLmcsh' + 'eJ1CviIQzB' + 'm5wxAGqYZI' + _0x1e5182(_0x538d4a._0x331088) + _0x1e5182(_0x538d4a._0x662817) + 'U2tN/h3RWy' + _0x1e5182(_0x538d4a._0x4e0b47) + 'YC6dPPwUzi' + 'zDumKBbwBa' + '4tEJJF4CiB' + _0x1e5182(0x342) + 'WWLWRC0QB8' + _0x1e5182(0x368) + '7FxsHoGsst' + 'Ev8biuaZp5' + '3z5TDdapSq' + 'JIHFQGKPW5' + 'XQ63z1tXK4' + 'BKllcIxAWq' + _0x1e5182(_0x538d4a._0x5c5097) + 'bWGG2TqA1q' + _0x1e5182(0x67c)) + ('vgqWwu7AYC' + 'MdNlsUac7J' + 'kO/mM7P2MP' + _0x1e5182(0x586) + 'RqW8lQGtx6' + '3BpE4ejKvX' + 'RJPs+m9yAL' + 'sqI0wHC2hB' + 'hdTkVUVBmz' + '6RWKIigUcD' + _0x1e5182(_0x538d4a._0x347a5a) + 'stFHXlGUJF' + '+D5KkTPUsc' + 'VESCSrUq1F' + 'KvQOPmXRCu' + 'KQ17sHLG7Y' + 'Ea1LRII0ra' + '3ijUXt9aPN' + '4bJhhzU58v' + _0x1e5182(_0x538d4a._0xc00ab5) + 'derpnmvXBy' + _0x1e5182(_0x538d4a._0xf483fe) + 'rnWIxLTnx+' + 'dduOS+diq7' + 'qKIsbwWWW0' + '29F0VAUFhR' + 'MbZSQzpYQD' + 'qmrYrjYCF6' + _0x1e5182(_0x538d4a._0xe4b0bc) + 'yEsaimrQjs' + 'b3CyiYTYUx' + 'ATxu8LgNSc' + 'w+onpiDOTx' + _0x1e5182(_0x538d4a._0x1055d5) + 'Ez7tR3uMEz' + 'Mc5ZItWmUT' + _0x1e5182(0x4a9) + 'xk6heAztOe' + '0KuOcEUp4E' + 'KoSHv5ej4x' + _0x1e5182(_0x538d4a._0x193261) + 'wgqUVFXBmS' + 'ESSiVZAVlm' + 'EQdMt1EfVn' + _0x1e5182(0x6a4) + 'T5QIEYCUKE' + 'VQo9aAlyig' + '1Mkl2GVm0m' + _0x1e5182(0xb1a) + 'k8NuG8g2GS' + _0x1e5182(0x710) + '9hSN/8eej+' + 'ri7jCFnbt3' + _0x1e5182(_0x538d4a._0x10e5dd) + '6ffTU/7Jpx' + 'Gv/1SNqMay' + '8/toPyZOvq' + '8Po/mvGjE2' + _0x1e5182(0x267) + _0x1e5182(0x8b8) + 'wCx2cwB5zw' + 'SFHZgZRMeI' + 'AEDUPjCcpw' + 'NREWjk0M2y' + 'hEAE1hGaMS' + '4Pa4QTW37R' + 'q/csNti3Sb' + _0x1e5182(0x9c0) + 'LwlNa4PRML' + 'p+1POOvHrA' + 'z+ZI57wira' + 'AL9403L87h' + 'x4bDyILlln' + 'S/0YVJRAik' + 'xkgCWNCkFj' + _0x1e5182(0xb61) + 'ArkkSdCvjU' + _0x1e5182(_0x538d4a._0x5df905) + _0x1e5182(_0x538d4a._0x378ac3) + 'y4IrvIqC9V' + 'zgFRyyVKLA' + 'Epk6fSpQhY' + 'LTCxNUmydS' + 'Y2OmsFuSqR' + _0x1e5182(0x676) + 'to+8iOjbPY' + _0x1e5182(_0x538d4a._0x843028) + _0x1e5182(_0x538d4a._0x12bd65) + '2LgRVrXXoa' + 'usZ8M13wRh' + _0x1e5182(_0x538d4a._0x1b595a) + '+FtrEYs2ob' + 'GEnpiXz2H1' + 'hhj7xy3KfH' + 'fUra5dzc1f' + 'rt0+N/PVu4' + 'afY5oDGtIa' + 'WBxClLjlmC' + 'zAWCva+qLS' + 'WqAKqreAOT') + ('iArg1DK8nu' + 'sBFb45N+t/' + 'Ed3oLGcWHR' + 'Q0Vm8Lg9bl' + _0x1e5182(0x278) + _0x1e5182(_0x538d4a._0x333dc2) + _0x1e5182(0xb13) + '6wvh66MJAi' + _0x1e5182(0x923) + 'rUr9mNSJoB' + _0x1e5182(_0x538d4a._0x23d0cc) + _0x1e5182(_0x538d4a._0x323dd4) + 'FdgiITgVga' + '1j6/cXf+xZ' + 'ntdxV+sW1b' + 's89cgezgZK' + _0x1e5182(_0x538d4a._0x1dcebc) + '1UpwCj4QC2' + _0x1e5182(_0x538d4a._0x3f2d05) + _0x1e5182(_0x538d4a._0x56ceca) + 'NNltxg47v+' + '8wGp97hLgZ' + _0x1e5182(_0x538d4a._0x182d06) + 'NdDDfdr+yK' + _0x1e5182(0xb6c) + _0x1e5182(0x3dd) + _0x1e5182(0x9e6) + '6CDSJh4Whc' + _0x1e5182(0x2bf) + 'FUR0ugQAtw' + _0x1e5182(_0x538d4a._0x1b362b) + 'AlVF/91JZd' + _0x1e5182(0x632) + '//eTn71o5c' + 'G6irferG5g' + 'XlqFrOKWpo' + 'KM5S8lkiBg' + 'UhIZrEQr5m' + 'W2U8HtKcUv' + 'LNJUavNI4X' + 'hjapyXJA8j' + _0x1e5182(0x4e3) + _0x1e5182(0x450) + '1oXENuWeio' + 'cjtjnypLXr' + 'Fi5Yjvx7DA' + _0x1e5182(_0x538d4a._0x4523d2) + '/2L+nIWmiB' + 'FqwcqH5ZKM' + 'ljvTOFKlpL' + _0x1e5182(0xb6f) + 'aP5Ld7FPJv' + _0x1e5182(_0x538d4a._0x412fa9) + 'MXcRhyYuxh' + 'uYp4vT5kQZ' + _0x1e5182(0xbba) + 'wStWI1kIRq' + 'ldmbgOEma4' + _0x1e5182(_0x538d4a._0x50e88b) + _0x1e5182(_0x538d4a._0x3ba85f) + _0x1e5182(_0x538d4a._0x26fc13) + _0x1e5182(0xbe4) + 'oTxJOBNZw0' + 'ZyGs2Tiy0P' + 'bv6EmlcdRy' + 'ddi2Zu6CCb' + 'txH3ENTJj6' + 'KmpFVKxFHn' + 'RcjVmtshGn' + 'UE2cyixB96' + '7xO/h1pH7/' + 'qutuzmbOHN' + 'un6Nnj7cE4' + 'lYAhWC02Xt' + 'PYvShFS6G0' + 'BlC7srLaGp' + 'DMH8w37Syt' + _0x1e5182(_0x538d4a._0x1c581c) + 'vNaCpLsov8' + _0x1e5182(0xa90) + 'iZ/PnxWA0e' + '/pVA9AkLF3' + 'S/0XbxO9ET' + 'xDHaGhe3fb' + 'RmbvmEWhlU' + 'kJezhgVRqj' + _0x1e5182(0x652) + 'UgIr04iiqE' + 'JsvIsKXkH4' + 'XNmtx+7NW/' + 'THG7rbTC58' + _0x1e5182(_0x538d4a._0x3adfe3) + 'nALaMeAsIr' + _0x1e5182(_0x538d4a._0x483f3a) + 's1VLKV1ril' + 'sARyjbtUqg' + 'GQhVZzDCJQ' + _0x1e5182(_0x538d4a._0x39fdf7) + _0x1e5182(_0x538d4a._0x2c6991) + 'WWu7/FRQIT') + ('/r+B1r0PVn' + 'Tz4qaNZ49R' + 'bzihsuOqEr' + 'ImpZ0utYcM' + 'kTtgm1AmYg' + 'jU4FF2JjCt' + _0x1e5182(_0x538d4a._0x3b5eae) + 'fjhRIqO6Ra' + 'bD4XqSynMb' + 'th4tn4dczC' + 'wujERKqlfC' + '7C1GJkxjWe' + 'Iag/wY6/ew' + _0x1e5182(0x9db) + 'vcur6jtAZK' + 'ayaH5ZaLxL' + _0x1e5182(_0x538d4a._0x42d969) + 'wk/8p6zjmr' + 'bv0LGENej6' + _0x1e5182(0x87e) + _0x1e5182(0xa26) + 'u14AyyEahX' + 'eu7oW//ewe' + 'G62laPsY1e' + '6uWszue0H1' + 'gShKmBtRcr' + 'wVKKIqvMip' + 'okhVRW6EHB' + 'obG3Ppcu40' + 'OEg0SQIBW5' + 'kqBU+FLDhU' + 'UXKoFKjAg4' + _0x1e5182(_0x538d4a._0x560220) + _0x1e5182(_0x538d4a._0x316261) + 'pBAren1iRF' + _0x1e5182(0x87c) + 'uBPKW2SKxu' + '8yV/PDVUyC' + 'k9jrB9cf+Z' + 'BflEBc60+g' + 'cXb75+nOP8' + _0x1e5182(_0x538d4a._0x367ced) + 'XwbvgjgVyQ' + 'W8CxQAtrZG' + _0x1e5182(_0x538d4a._0x2b4cc2) + 'G+2DlpPb40' + 'NJi9PXkGjQ' + 'muOu9WfAtj' + 'KI8WTthjtz' + 'NExBgiQ7wY' + _0x1e5182(_0x538d4a._0xa2e44a) + '0XJJvjyqWS' + 'NyacSGqpNZ' + 'TEw2sUQzFk' + _0x1e5182(_0x538d4a._0x4d4487) + '59kTzKiL3F' + 'SjLyy9OGMg' + '1nQSwm6DYw' + 'ibwBqNLJm9' + 'T4IJ+q5m7+' + _0x1e5182(0xb8d) + 'gS2lK8/paP' + 'v1DeT+QN6E' + 'WpQ5iU6bvn' + 'meqsDa6ly1' + 'OMaUzYOUKt' + 'ECNEppXbIE' + _0x1e5182(0x760) + '+Zm5O8M+f5' + 'BTGvxKrDKY' + '4dUEGQr3lL' + 'UgVVUIvDhr' + _0x1e5182(0x4c1) + _0x1e5182(0x9eb) + 'jA4AZd5biY' + _0x1e5182(0xb36) + 'yIl55sRQrb' + 'jgGbwLqiAg' + 'uBUYnuoK37' + 'vF+abK7wRz' + _0x1e5182(_0x538d4a._0x27613d) + 'q3m5GANncQ' + 'gkilTnZYkl' + _0x1e5182(_0x538d4a._0x30f715) + 'BDTth0KqPW' + _0x1e5182(0x33b) + 'M52tyK2/JI' + _0x1e5182(_0x538d4a._0x1bb86a) + _0x1e5182(0x7d7) + 'S7LsIJREWZ' + 'ifFUiA2zO5' + 'h6WtYJIGlg' + _0x1e5182(0x80b) + 'wLKd3RKzqW' + 'j7xaP6Y/5n' + 'smM549scyD' + 'Sm3jWYzDkL' + 'fnDBfa4f/i' + 'JUe3fl7U1T' + _0x1e5182(0x97b)) + ('WfQGRFhf+A' + 'LEiKQ2HNsA' + _0x1e5182(_0x538d4a._0x31ff8e) + 'LIPkU6goib' + _0x1e5182(_0x538d4a._0xa9452b) + 'yXxHfB83/u' + '/VOkzMi+kg' + 'YJzGkPOC06' + 'nI6h7syjeT' + _0x1e5182(0x468) + 'YldDSJIyDF' + 'n26g1lIKUB' + _0x1e5182(0x4f6) + _0x1e5182(0x417) + 'bv9stvOS3U' + _0x1e5182(0x992) + _0x1e5182(0x489) + 'ndXAmDbfNp' + 'eFA5jVPgZw' + 'clbfcLW+YZ' + '6YpXI3sJyk' + '8UM2f5blPU' + _0x1e5182(_0x538d4a._0x21ba4) + 'T8yRB0detV' + _0x1e5182(0x304) + _0x1e5182(_0x538d4a._0x1a3f81) + _0x1e5182(_0x538d4a._0x29bee6) + _0x1e5182(0x396) + 'O6uD0nvjB1' + 'vAlVLUiWuB' + 'CxxE0mTGhJ' + 'Nrpn3fbghZ' + '+dlqoQgyLs' + _0x1e5182(_0x538d4a._0xd449cc) + 'Z0JmNiWWos' + _0x1e5182(_0x538d4a._0x5e88f8) + '/as8jEep7N' + 'ZZWXrOifro' + _0x1e5182(0x391) + _0x1e5182(_0x538d4a._0x1352ac) + _0x1e5182(_0x538d4a._0x1ae896) + '8FiC6i3Kbw' + 'VSneXkFXOM' + 'cT0LZTgxRo' + 'wmCIhq6c7C' + _0x1e5182(_0x538d4a._0x31de00) + 'me3CMDTLJc' + '+Uspjt4diN' + _0x1e5182(_0x538d4a._0x13d8e5) + 'YvO4IWza9f' + _0x1e5182(0x7ec) + 'wNYvHMzEfZ' + 'HuxUc4gpkf' + 'B1yhSEAtH0' + 'w+WJW1L14z' + _0x1e5182(_0x538d4a._0x1d663d) + 'AI7GZ2AOD0' + 'ZJCLHGyGNI' + 'iCk00ek0Go' + _0x1e5182(_0x538d4a._0x52893b) + 'Svm/fWHFl4' + _0x1e5182(_0x538d4a._0x575a5a) + _0x1e5182(0x96b) + 'CIKsYrUbvr' + _0x1e5182(0x319) + 'Zak7LEkAmi' + 'xJQHuPULBa' + '3QAWrWHjy/' + '9aua0hagEp' + 'zJno469ane' + 'rXlUibi8fM' + 'GKR2+rC2WD' + 'Z9QPBPg+zT' + 'QAxLF1gIDy' + _0x1e5182(0x7e1) + '66NrFH2igt' + 'qFIns6GsQK' + _0x1e5182(_0x538d4a._0x26ba2d) + 'YBWAesgE+R' + _0x1e5182(0x7ab) + 'FvavaYWsdu' + 'SVWopHpZyN' + _0x1e5182(0xa0d) + _0x1e5182(_0x538d4a._0x18f199) + 'DFsi0WkZBt' + 'UOO2gkSfHX' + 'p9fYzGS5P1' + _0x1e5182(0x9c9) + 'P+Z7cYt+gN' + _0x1e5182(_0x538d4a._0x42b9d7) + '2pnXQVsPzz' + 'cVj3dHV8hW' + _0x1e5182(0x906) + 'YDZBQxB/iH' + 'DZyO8C/KEP' + _0x1e5182(0x1a8) + 'yLrRUIGF9B' + 'o4r6jAGtoC' + 'h15l1VviNT' + 'HGYqSDL2QA') + ('iSShTBJSMP' + 'KAr1OkiJLI' + 'tOkePB5qkB' + 'uTSC+8UtQe' + 'lkD9qODmHE' + 'Rz6d642aRP' + 'iFrv3PdvXf' + _0x1e5182(0x8a7) + _0x1e5182(_0x538d4a._0x322913) + _0x1e5182(0x92b) + _0x1e5182(0xac8) + _0x1e5182(_0x538d4a._0x47180f) + 'bEbGgRcFop' + _0x1e5182(0x5bf) + _0x1e5182(0x9e5) + _0x1e5182(0x702) + 'FZG1tbyfpt' + _0x1e5182(0xaf7) + _0x1e5182(_0x538d4a._0x42eea1) + 'lvgISASjpw' + _0x1e5182(0x61c) + _0x1e5182(0xba5) + 'MNWPTL+c2f' + '5IphWzz/45' + 'EL7ufI9vQv' + 'XtjXlH30pm' + 'TrXDyB6GtX' + 'b4Y8wMT9WJ' + 'u7OqKN9cZj' + 'bA10XvPlej' + _0x1e5182(0x199) + 'HCMMDdi0kZ' + 'iibPQp+zA+' + 'rFaAA4PkMm' + 'HCS5FFUV/9' + _0x1e5182(0x6b8) + '4ZKnyKKKF6' + _0x1e5182(_0x538d4a._0x327c0b) + _0x1e5182(0xaff) + 'kiRjQsMjlc' + _0x1e5182(0xbec) + 'DZcXSrbbIx' + 'bgGuijsAvm' + 'j79Uvath3Q' + '1geWrVB2fU' + 'zxD7y8DI/Q' + 'GsI8tSt/sx' + _0x1e5182(0x4f2) + 'l6gQCOHHMQ' + 'HCCMVNEMlk' + _0x1e5182(_0x538d4a._0x35d13c) + 'woVdN0Bl5g' + _0x1e5182(_0x538d4a._0x438377) + 'Xu0JppjHRH' + _0x1e5182(_0x538d4a._0x356919) + 'qlgA7611iS' + _0x1e5182(0x442) + 'AcYRLYyxCJ' + _0x1e5182(0x6a2) + 'YY9NAsInPQ' + 'KR58ken4ze' + 'FwX+C2Fn/u' + _0x1e5182(_0x538d4a._0x2dd0db) + 'Fu9+/Sp2QT' + _0x1e5182(_0x538d4a._0x9d59a9) + 'tc2nF+FhCw' + 'UFIp3gSN8t' + 'W9lkZOy9R0' + 'blWaif9b4i' + 'aSWgktEGi/' + _0x1e5182(0x3d7) + 'c+LBDcSsV2' + '8Lpv+kzCWI' + _0x1e5182(0x835) + 'a8OCNFEmWV' + 'OGkNSjKnVA' + _0x1e5182(_0x538d4a._0x4a51de) + _0x1e5182(0x568) + 'ETbfSiH8dv' + 'utUBkvoM6o' + '761vP++mci' + '16+8Df51Rq' + '1WZrjoJHSF' + 'w4XCP/e01C' + 'Xaz6G2YMKX' + 'B+MEByHgOG' + 'gj2JUQoQSn' + _0x1e5182(_0x538d4a._0x46d24c) + _0x1e5182(0x2da) + 'gVX7UEviZP' + 'WH8fe+Z9I9' + 'klzHioNw4K' + 'BDZk6C4vUK' + 'UOJQZZGqkg' + 'rjMCgooQSm' + 'IJVamZCWJb' + '3mY95nK3pg' + 'aeT7+etwRK' + 'kGmfyoqLpk' + _0x1e5182(0x516)) + ('EzAus7ESsP' + _0x1e5182(0x58e) + '5trUYQTAtG' + 'BmC8hBRUFN' + _0x1e5182(0x60c) + _0x1e5182(_0x538d4a._0x3b7ace) + 'RFrvDIiuQV' + 'wYmRM0y/EQ' + 'tZ4zmS5MuL' + 'AZUlrwKyT6' + 'QyalQ2T1t0' + 'OHDaNDglK4' + 'A1rmH4ED1W' + _0x1e5182(_0x538d4a._0x17d418) + 'DBRtrBtayL' + 'H/dLK3/Nqo' + _0x1e5182(0x80e) + '/d4F1GaR7i' + 'JzBk2zP816' + 'ZYCJB5VFHM' + _0x1e5182(_0x538d4a._0x5387c7) + _0x1e5182(_0x538d4a._0x48eff8) + 'btkBWsDWC0' + 'ZnFdtBPwVi' + 'kgof3Q2KA4' + _0x1e5182(_0x538d4a._0x35b16a) + _0x1e5182(0x965) + 'EPkkmF9EYg' + 'JOd1kCiFGU' + 'JCoKGAZXZO' + 'LGsIQXKneD' + 'zMbyUjSZZB' + 'k87P7h1lXi' + _0x1e5182(0x7d0) + _0x1e5182(_0x538d4a._0x46fbe1) + '56xLjVx0x4' + 'SG2PZw0kV0' + '+RmoV1wDTD' + 'y4BGTc8oIj' + 'n6xuGQ+NqG' + _0x1e5182(0x546) + 'nA6Nw15Y1N' + 'DwXiUcoSyC' + 'IItSAYgol7' + 'BSEoP5pMEh' + 'Sl5VMtGNj/' + 'SWlC3QQZFk' + _0x1e5182(_0x538d4a._0x2af1cf) + 'pO7BUEChXe' + _0x1e5182(0x92c) + 'Jtl+SukTD6' + 'DRIrAw8jR8' + 'NeXniZl2RO' + 'Ny/TTFfy+6' + _0x1e5182(_0x538d4a._0x6e1c66) + 'kuKXpV90Rj' + 'wMZt+Mk2F1' + 'BXoiHR7fu6' + _0x1e5182(0x2cb) + 'NaodFn9wGn' + 'X9CrM2xAKk' + 'rSzLCEUEWU' + 'VHHdsHGf0t' + '+uo/rObKby' + 'jUccALGtCy' + _0x1e5182(_0x538d4a._0xd7ef8d) + 'oiirUONHzR' + '5wdTo2A1As' + 'HuMKpYGWoo' + '2occfQLuqc' + 'O6Y+vOOMwG' + '7cahe2B5zK' + '/xpR4pEt0J' + _0x1e5182(0xa7b) + 'g9Divj58+h' + _0x1e5182(0x5c1) + 'RoeIlPJLlF' + _0x1e5182(_0x538d4a._0x5f192e) + 'W+JcYoNRmH' + _0x1e5182(0x886) + 'FVZOR8FMdE' + _0x1e5182(0xba1) + 'gwMSoITIpX' + _0x1e5182(_0x538d4a._0x1f1a17) + _0x1e5182(0x998) + 'qnKFQmQBLo' + _0x1e5182(0x1be) + 'XOqRJKhxIz' + 'fvpcJ4HqxS' + 'uMYNumbLcg' + _0x1e5182(_0x538d4a._0x38d739) + _0x1e5182(_0x538d4a._0x44d1b8) + 'HVp14xdgYK' + _0x1e5182(_0x538d4a._0xe9830a) + _0x1e5182(_0x538d4a._0xfeff2) + 'xvAB6L/nXS' + _0x1e5182(0x2a3) + _0x1e5182(0xbd1) + _0x1e5182(0x3cb) + 'CJyKD6J09f') + ('rHjtx6/SJa' + _0x1e5182(_0x538d4a._0x5e3cec) + 's15F5QvCiB' + 'qaJ4ZdXrLZ' + 'FkAk4tn1XC' + _0x1e5182(_0x538d4a._0x4f0081) + _0x1e5182(0x488) + _0x1e5182(0x426) + '72/Hnduvob' + '39iA1mQpwM' + 'x266wzwwp/' + _0x1e5182(_0x538d4a._0x3e2e64) + 'NjYG7OSG3/' + '1L/LojY2An' + 'Hy/8bDYZBb' + 'HYmCpt04K0' + 'CWCDSCa7ev' + 'AgcHOryK5P' + 'MKIniBjNVb' + 'mz9pNZVJuT' + _0x1e5182(_0x538d4a._0x152104) + 'M7vL55DFJT' + '7R7RAJSE5B' + 'kiplxYscrI' + 'XdgLMkkKoG' + 'EwN4LPzLvH' + 'q7yYb3ADyl' + _0x1e5182(0x942) + '2dzffEsIlF' + '5qWqRJPI1y' + _0x1e5182(0x438) + _0x1e5182(_0x538d4a._0x1bdab3) + _0x1e5182(_0x538d4a._0x18ed12) + _0x1e5182(0x420) + _0x1e5182(_0x538d4a._0x4f163b) + _0x1e5182(0xb41) + 'YCz3PN3u1H' + 'khwzHBNqAW' + 'NrxLtkeaJo' + _0x1e5182(0x933) + 'w+JzZ9YmF5' + 'HTWPi2LVS6' + _0x1e5182(0xbe0) + 'TE9vh19Kca' + 'w1gBrJotP3' + _0x1e5182(0x7e7) + 'u6ZtsuyTBJ' + '+/u/HvnTGR' + 'K2AD12nEBq' + 'HMaCX37NDv' + 'yNQU7a53BZ' + 'djav7xX90V' + _0x1e5182(_0x538d4a._0x543889) + _0x1e5182(_0x538d4a._0x577636) + 'YKhhN+OhUx' + 'iKSadPA3/+' + 'BKfVRxGZ1Y' + _0x1e5182(0x8df) + 'INMprXMfMu' + 'YaDJ6ZWKlj' + _0x1e5182(_0x538d4a._0x261e98) + 'lGD8kJlOtG' + 'Zy+Ol34Nrb' + _0x1e5182(_0x538d4a._0x3fc9d7) + _0x1e5182(0xab8) + 'm/4C4Wtalg' + 'nEA6WUKncJ' + 'gw7zO916eL' + _0x1e5182(_0x538d4a._0x3885e8) + 'LJ6KMmnqRx' + 'bbBZT8WLkS' + 'n6rptuFLtu' + 'X45lJWGT5Q' + 'jMhqMIEVIw' + _0x1e5182(0x804) + '+YJ+EcXxEl' + 'i0ZITZWC7a' + 'aNbHXC1GLh' + 'R3g1whK+bC' + 'mIV4JBt4Sg' + 'kDysIvEpj5' + 'P9x98T/TbD' + '2yJJdGzNDw' + _0x1e5182(_0x538d4a._0x3c2558) + '/X8rLtwUKh' + _0x1e5182(_0x538d4a._0x4fc3a6) + 'RXmJ5+1TB2' + _0x1e5182(_0x538d4a._0x49464f) + _0x1e5182(_0x538d4a._0x56cee6) + 'nLk4qy2rra' + 'rngADWN169' + 'YFNBLqVkYv' + '3EGoz2E6oQ' + 'b0WtG3SyA0' + 'zeUf9++Mpo' + '5vi8PBLTsa' + 'BLqjSYXvFV' + _0x1e5182(_0x538d4a._0x2a8b84) + _0x1e5182(_0x538d4a._0x1f7e64) + '1IzFEdhyBL') + ('KbYkQUg+As' + _0x1e5182(_0x538d4a._0x293ac5) + 'cPY3msSfG1' + 'f5+Zo7e2ja' + _0x1e5182(_0x538d4a._0x4fb62d) + 'O16XJW7v44' + 'f7yqS/bsVe' + 'vf04rJM/Hu' + 'wljc70R87P' + 'gopVECNcI3' + _0x1e5182(0x8d8) + _0x1e5182(0x2a0) + 'IXof9X3KBR' + '2N/saMlc1a' + 'VaZ6nlJjK+' + 'jhUoYn0xRq' + 'AYi1OCRcIq' + 'eMHhA6eAkW' + _0x1e5182(0x9bf) + 'VWo2rATHva' + 'g3/Pbg9OCv' + 'xm9Cjg5zz2' + '7InkkJJfPX' + '64TC4U1JL3' + 'ExWyx+46GT' + 'VQ+cdJ2/nW' + _0x1e5182(_0x538d4a._0x8eef9e) + 'gXHXmn/2B8' + _0x1e5182(_0x538d4a._0x4f516a) + _0x1e5182(_0x538d4a._0x4771dc) + 'x7t/WW19pa' + _0x1e5182(_0x538d4a._0xa5bfad) + 'MbvdAaJbNb' + 'Ko+q1tRlm7' + 'SF+kRPLQF3' + 'A2NgIFiuJz' + 'twND6a0T5J' + _0x1e5182(0x9fc) + '84Ayoi9UCp' + 'G4MvjIct+t' + _0x1e5182(_0x538d4a._0xb81c8f) + 'UsIoLPf0O5' + 'mz9AUA69YS' + 'AotXDp+8bc' + '0C8Lj0kvfP' + 'P20kfNCa7z' + '/EalRpAuvw' + 'sceUugE8/O' + _0x1e5182(0x45c) + 'WioV4lCd59' + _0x1e5182(0x97c) + '3W0w5ZOvyL' + _0x1e5182(0xa1c) + 'j3IddFKtwE' + _0x1e5182(_0x538d4a._0x4929ae) + 'PiwVx9Eaie' + 'i4k/pQYIEJ' + 'xmIO0iiwNL' + _0x1e5182(0x6ff) + 'b3958fX+6C' + '+boDQiS9ye' + _0x1e5182(0x82d) + 'XWfFZ7Ry+9' + '4VXOFLNq5E' + 'Zv3ukyHAMr' + 'NpsxgNavXw' + '/1nZ/dt17u' + '2r2uZYKvwi' + 'fK0CKqZm1e' + 'ztyF4Svc0x' + '4bP+/lcOT9' + _0x1e5182(_0x538d4a._0x3a4ccd) + 'PG/2rO1PnC' + 'vHyT+d9UES' + _0x1e5182(0x4c9) + _0x1e5182(0x3de) + 'UsKVF9kte3' + 'xFnn9PoaJU' + '2QMVNuxTEo' + 'bglLhsMShM' + '3Rhu2vVrwR' + _0x1e5182(_0x538d4a._0x2e84bb) + 'xPj03PJT/u' + 'CnetZx80H6' + _0x1e5182(_0x538d4a._0x194bad) + 'GbYWwpmtKu' + 'NbP12Lao8L' + '4MSK9o6csC' + _0x1e5182(_0x538d4a._0x1117d3) + 'axelsD9s4f' + 'xRAaZvnLOF' + _0x1e5182(_0x538d4a._0xa7d0da) + 'HUV4FlBQqI' + _0x1e5182(0x487) + _0x1e5182(_0x538d4a._0x34c4a2) + 'qagDQS2pdB' + 'AcgRLZJfXp' + '1DBg6QDmly' + _0x1e5182(_0x538d4a._0x14f271) + 'Y108fmdqNQ') + ('phbu/9c0db' + 'KjkAPfUJRl' + 'h4KGfC4zuY' + 'cJp7hkwcc2' + 'G5uNbfY2Y7' + 'PlZlzuiyLf' + _0x1e5182(0x51f) + 'KsoxlwwOrb' + _0x1e5182(_0x538d4a._0x25267d) + 'YGJ9bKL8bz' + 'wISUaT0VXp' + 'bEAPQHGxwl' + _0x1e5182(0x8ac) + 'rqijPnDUOa' + 'nPMVbTLZia' + _0x1e5182(_0x538d4a._0x134764) + 'BIEZkcj/91' + '5VUHrddryv' + 'i1mL6QIrYY' + 'hTtX9dGPcf' + 'F8W/IIzVU7' + 'cdyeVYMPFD' + '/dMp/PvvXx' + _0x1e5182(_0x538d4a._0x46926c) + _0x1e5182(0x3b1) + 'wDmNMp5i5a' + _0x1e5182(0xbef) + 'rutms6411f' + 'BQq+CeRuGL' + '2SukFHHjQE' + '9Q5AocBio7' + 'vIoCzloQHU' + '5R8IkX52m7' + 'PBiQlcPYpI' + '2Jc1LqlmRF' + 'e9qT2zljsq' + _0x1e5182(_0x538d4a._0x3c31de) + 'KSkWFdjF6a' + 'DDLDDoSp09' + _0x1e5182(0x1df) + 'm6OjFTP1Zk' + '4ebsE93Bg+' + _0x1e5182(0x7fe) + _0x1e5182(0x86a) + 'ADVUSvKnkF' + _0x1e5182(0x39f) + 'WGbIvFEERw' + 'LBeF5YSdV+' + 'aQQWwEJ5uc' + _0x1e5182(_0x538d4a._0x41ebb4) + _0x1e5182(_0x538d4a._0x3affa2) + 'U5YMxxw8xM' + 'MV7Xrh7ZcP' + 'P2giClhG27' + '/0gBXcWvRv' + _0x1e5182(_0x538d4a._0x437f0b) + 'X8dYDjLcax' + 'uoVSKb7kRu' + 'FMN2w2fuH7' + '6Jp6j3FU/e' + 'DVvgrCBPsD' + _0x1e5182(_0x538d4a._0x3f0743) + 'gS1ohL3kqH' + 'hMPMvUZaR8' + 'U2Qny9SBAU' + 'UmHEkYuAEt' + _0x1e5182(0x959) + 'ohuItgO0Aj' + '28ywaeCMvI' + 'uWWZuiUPSI' + 'XRIvrQ49ut' + _0x1e5182(0x500) + _0x1e5182(_0x538d4a._0x4b32b6) + _0x1e5182(0xba4) + 'Vz1gES9ucA' + _0x1e5182(0x375) + 'o9w+lj9ww/' + _0x1e5182(_0x538d4a._0x1a13cc) + '9nHn5j/a4C' + '9N0wgujDuh' + 'BVFb2KIi1h' + 'DGZEoOQKCk' + _0x1e5182(0x289) + 'rEUD0a3WEN' + _0x1e5182(_0x538d4a._0x3c3100) + 'iFTZ6aJa4c' + _0x1e5182(_0x538d4a._0x519a5e) + 'khfwuEtrwu' + 'CeyIm71t7w' + '8MGD98+chK' + 'c8Q8OuMRj+' + '9wAIX3T7Ad' + _0x1e5182(_0x538d4a._0xe51999) + 'I4YzOOIByz' + _0x1e5182(0x34f) + '9dBgrBe9cT' + _0x1e5182(_0x538d4a._0x4ba2d3) + 'IhBnEY4bkB' + 'opzkRgnncD' + _0x1e5182(_0x538d4a._0x29cbfb)) + ('ux78wLitPH' + 'nFQMQ0CNl1' + 'LVaTZza7YU' + _0x1e5182(0x9bd) + _0x1e5182(_0x538d4a._0x40c153) + 'Lcs1bgkgIo' + 'lcTH/m+cfL' + '2y+58PpN2Q' + _0x1e5182(_0x538d4a._0x322602) + 'pR4ruKPx0d' + 'G5yLoJpPCT' + 'TOiM7ed5d0' + 'ThLp1ecWZ0' + 'Nb/B6hP75H' + _0x1e5182(_0x538d4a._0x548aa9) + 'yLSUud8SRE' + 'mqFbONHCIK' + 'IEVU6ggoPu' + _0x1e5182(0x851) + 'oogVtT6Wdn' + _0x1e5182(0x985) + 'YlXiOcp4Lj' + _0x1e5182(_0x538d4a._0x3e6732) + _0x1e5182(0x5d8) + _0x1e5182(_0x538d4a._0x1a2148) + 'YEFWNEPDGg' + '1YmLFHghqo' + 'kSjEx/D/dq' + '1LSOB1MP/I' + 'sGG/5c6JR3' + 'GejK9HnXuG' + _0x1e5182(_0x538d4a._0x10b6bc) + 'I1PLBG+99b' + 'ep2jeDl6Yh' + _0x1e5182(_0x538d4a._0x53296a) + 'CBGw6BKrMI' + _0x1e5182(0x520) + 'zgp5TGTC4/' + _0x1e5182(0x88b) + 'OYJJA9auwB' + _0x1e5182(_0x538d4a._0x536603) + _0x1e5182(0x2e2) + 'vCJoo0tURh' + '/Np/vsPqpF' + _0x1e5182(0xb92) + _0x1e5182(0x8b5) + 'ys1zlTTAaY' + _0x1e5182(0x78e) + _0x1e5182(0x309) + 'xVyYGCx94+' + _0x1e5182(0x47b) + 'MBGz6SJOHM' + 'MaYZ8DKuq8' + _0x1e5182(0xba8) + 'q1GP9vcLhq' + _0x1e5182(_0x538d4a._0x15194f) + '9J4nwMmxNk' + 'N7jDpRRrW2' + 'ombxc1DfR4' + 'I62uhQjMc4' + _0x1e5182(_0x538d4a._0x211751) + 'Zvih+jZUru' + 'jx1JRCyayN' + 'c8f+wbian8' + 'Qhrf2qWNUC' + 'hAomnhaPOE' + 'lF7cmW6Y2s' + 'frpKqacyQW' + 'I3vhLOnOpY' + 'LEeMXjnWye' + _0x1e5182(_0x538d4a._0x5670ec) + 'G735WPWDpY' + _0x1e5182(0xae9) + _0x1e5182(0x671) + _0x1e5182(0x7fc) + 'K7JqXBTAEn' + 'tqrv7pDTcf' + 'BpJx3RpnIK' + 'd19MBfHL/7' + '/oO4L6yAwS' + 'aOzj63cgxP' + 'n/wpdCY1cu' + 'P++kbKC+YY' + _0x1e5182(_0x538d4a._0x5332be) + '/65OSXfeyK' + 'zcLyH4INtA' + _0x1e5182(_0x538d4a._0x49eaf5) + '7LFfv33x4l' + 'lYCVOErIy1' + '3KxhE4xKYV' + 'G+xoNdZ6zS' + 'B1uwgQgxsn' + _0x1e5182(_0x538d4a._0x3a3638) + _0x1e5182(0xafe) + 'gaoMI/N1Of' + '+O688lFd8P' + _0x1e5182(_0x538d4a._0x4b3bb9) + '951LDZAbiH' + _0x1e5182(0xa2f) + '3qEwcBPGm9') + (_0x1e5182(0x68d) + '5tZm4TXSYD' + _0x1e5182(0x764) + 'mZyeEnsMQx' + 'OJd36UGTsl' + '4z/QfHn3lk' + _0x1e5182(0x3fa) + 'LK9TBSz/8E' + 'rg+Bwk2aGI' + _0x1e5182(0x3da) + '9vmr4Oxl8d' + _0x1e5182(_0x538d4a._0xdbb7dc) + 'h5nlN1md80' + 'q3iN7+6l8S' + 'PldNXs+1eV' + 'ciMtcU0DC0' + 'TZSc3sZMUD' + _0x1e5182(_0x538d4a._0x1cb75b) + 'q65MJdU7dd' + _0x1e5182(_0x538d4a._0x5035ed) + '2mfdZ/EDQ4' + _0x1e5182(_0x538d4a._0x29c30f) + '5OJp9ymb8f' + 'HKArTNt06k' + _0x1e5182(0x228) + _0x1e5182(0x21a) + _0x1e5182(_0x538d4a._0x3d8b52) + 'NnaprxAG+7' + 'AtdMLjc353' + '2HV1MY1y/K' + _0x1e5182(_0x538d4a._0x442ab7) + '/5K/9b6xHa' + '7rsFES7vjZ' + 'uHd/Wd17IF' + 'vfb7AuEhT3' + 'Kv4PHaUzhm' + 'G1P6sRwTCP' + 'Rd+1cbvOK/' + 'Nrw0eHvBWn' + 'WIhs+A3chI' + 'mHJzaeCdjp' + '2MyewDp8TV' + '+w6aQrc/Sn' + 'Xec81J6nT9' + 'KxAt4lYy8k' + 'q9tC0czYlN' + 'UEazpspAd9' + 'punh/Pue+A' + _0x1e5182(0xb3f) + _0x1e5182(_0x538d4a._0x2ebef6) + 't6Y35nupLJ' + '7Yes/VlxyA' + _0x1e5182(0x202) + 'de0rX9Kavs' + _0x1e5182(_0x538d4a._0x509702) + 'vrsnar0oVy' + '+GmFHmhYp9' + '4shFTy/IPX' + _0x1e5182(_0x538d4a._0x5c06d4) + 'un7/DTjdii' + '19CdK1C/Jy' + 'wYxSiXXScV' + _0x1e5182(_0x538d4a._0xd1bf7) + 'Cd6rd9Lm9n' + 'h8+xu/Hv5R' + '+jOGkTIXJU' + 'zmy8sK/wPz' + 'O38JTwuxcw' + _0x1e5182(_0x538d4a._0x2b47e6) + _0x1e5182(0x30d) + 'uU+3EmheTi' + 'xgrVup3pa6' + 'PLm02XsMSe' + _0x1e5182(_0x538d4a._0x1dd7b7) + 'zKgJUYl8Y/' + _0x1e5182(0x973) + '7/pn8OxvrK' + _0x1e5182(_0x538d4a._0x31b8f5) + 'jUa3/P58Zg' + _0x1e5182(0x9c4) + 'YIRTu5OKwV' + _0x1e5182(0x25b) + '2wZSYU7i20' + '7f8QfrsKfg' + _0x1e5182(_0x538d4a._0x584ee3) + 'yFO5ODCYuH' + _0x1e5182(_0x538d4a._0x25ca30) + 'L5jaMiz8Pr' + 'C6pgbi40xR' + 'AYudGF2xMc' + _0x1e5182(_0x538d4a._0x18589b) + _0x1e5182(_0x538d4a._0x24f08a) + 'jEvvrp82eQ' + _0x1e5182(_0x538d4a._0x2d0dfe) + _0x1e5182(0x9ce) + '6ie7MuGazI' + '7mcsomxLHF' + _0x1e5182(_0x538d4a._0x4e55c5) + 'Yfilhh7O5/' + 'Pdf3S46WLH') + ('2PBG1ZOuHG' + _0x1e5182(_0x538d4a._0x2baad5) + 'dx7gEngX0O' + 'UJrHfk9oou' + 'aYFON3sQLx' + 'vgpFxsvGtD' + 'mMj7OpE6U1' + 'k7R7wgHHKa' + 'rgB6/0wbLJ' + '1p/NOtWKgX' + 'l6bAukx1/7' + 'n3PMaoGe44' + 'UKqByrjV/d' + 'KMRyV4VBuH' + 'TBM713rGyU' + 'Auey0zEBuD' + 'HGsbWJlcBl' + 'PDbY16LHIX' + 'e/lt8O57ZD' + '3AS77h7RoZ' + 'bUCVq8CAfp' + _0x1e5182(0xa1a) + 'AkilETfQMg' + 'cfITh88gnB' + _0x1e5182(_0x538d4a._0x26fe1b) + '+Ubn/Guk/T' + 'Ckw8vLSpkM' + 'veRvNU/f3G' + _0x1e5182(_0x538d4a._0x50d65f) + _0x1e5182(0x576) + _0x1e5182(_0x538d4a._0x4b9609) + 'GfvH4BnjJt' + _0x1e5182(0x5d1) + 'mvpFBCdWgQ' + 'm0CSrO5hpo' + 'dcByUxJm/Q' + _0x1e5182(_0x538d4a._0x4092a2) + 'XrvM9vXx/6' + 'TwN8cKkJl9' + '6KLX9gFsWH' + 'o4HZ+3b5hr' + 'hfd/NspZ88' + 'jcO7A+6OQI' + _0x1e5182(0xace) + _0x1e5182(_0x538d4a._0x299e35) + _0x1e5182(_0x538d4a._0x4347c4) + '8V+31xWAqY' + '+PwYCB6juU' + 'HGBnbcpWzA' + 'BjZAYxdERI' + 'aJ3I2H2Wb8' + 'mkW+DVaImY' + 'cl5czZEI/P' + '2JCx+JnyLS' + 'bT3I0tvYdS' + 'Jm56/+3agu' + 'MxJmDiGcy5' + '/n6sCfwHnD' + '6n2mf3xC2+' + 'ggq9iU2FAY' + 'q6W9PUCRoz' + '0lhKNFEfI7' + _0x1e5182(0x952) + 'gNv7+Mtn4g' + 'CQb4UVl+2I' + 'GWKx4Yfzoc' + _0x1e5182(_0x538d4a._0x2828b1) + _0x1e5182(0x36e) + '4Pl21aZifg' + _0x1e5182(_0x538d4a._0x2385b4) + 'qf2Q4a4LgN' + _0x1e5182(_0x538d4a._0x2f3c27) + 'wws2Ep1AdQ' + _0x1e5182(0x3d6) + '0rSF3mLaFh' + _0x1e5182(_0x538d4a._0x2db80c) + 'fBlwOjQ07L' + _0x1e5182(0x912) + _0x1e5182(0x4b2) + 'NrPZHMbWSX' + 'MqQGN/tDk3' + 'F/cks/nAj3' + _0x1e5182(0xa74) + 'xv2WA8TiwN' + _0x1e5182(_0x538d4a._0x4ed154) + 'uIZuUAkFZx' + '12GRKnc0lj' + _0x1e5182(0xb45) + _0x1e5182(_0x538d4a._0x519caf) + '9pRi54MkRa' + _0x1e5182(0x7ae) + 'rv7a0onD+K' + _0x1e5182(_0x538d4a._0x1192a8) + 'ZZsGzyTEr4' + 'Gxb48iTj9a' + 'vLkJ0vrBdI' + _0x1e5182(0x432) + 'sYLA5Rwsnd' + 'rq9AIWuwpO' + 'xmceIA5+j5') + ('lXQbaxUjs3' + 'uGUPjpym2O' + 'GBBWay27TT' + 'lvZkztddXe' + _0x1e5182(0x494) + '29CWk82Q5R' + 'pmPJIRQ6/4' + 'JYqcHGWvWA' + '5YLQQyV+Oo' + _0x1e5182(0xb12) + 'Hb06cIXlbF' + 'iUeGen2Ueo' + 'mT0riyt8nC' + _0x1e5182(_0x538d4a._0x18c6ee) + 'HFF4MtlWI3' + _0x1e5182(_0x538d4a._0x15fbb4) + 'WMFjjNWjAY' + '63de/BoA60' + 'cJX8VYBhkT' + _0x1e5182(_0x538d4a._0x59dc84) + 'VkXg76Vxy0' + '4g+zWwFa42' + _0x1e5182(_0x538d4a._0x558df0) + _0x1e5182(_0x538d4a._0x5686f0) + '4kJARInN/D' + 'aRMm44EOxt' + 'RakCEC2Msi' + _0x1e5182(_0x538d4a._0x3e325a) + '2TcfqLi8Fg' + 'rD86s2qhUy' + '9x1NzLs3Ns' + _0x1e5182(0x6b6) + '/YrXGL6YCV' + 'z7NCDl2Dfz' + _0x1e5182(_0x538d4a._0x54e4f1) + _0x1e5182(_0x538d4a._0x472ee5) + 'iAEh91GhEE' + '/O4Fr9cbj1' + 'tbuO0Topih' + _0x1e5182(_0x538d4a._0x1c8a9e) + 'JblmWks0Lu' + 'Seqq+JrL/9' + 'FgrD8+w/Te' + 'KRcF+KhZ17' + 'KtB/rM3Qyw' + '9MsnMB04wP' + _0x1e5182(_0x538d4a._0x199406) + 'AXBQdd/aO+' + 'UadbWH0jpn' + 'nQPnEoCPIo' + 'kpBnqc4N3d' + 'vM/cZJnAy9' + 'iSJYfD2OXB' + '5lixOQCm8c' + 'LiJ08Syh+0' + _0x1e5182(0x437) + _0x1e5182(0xb84) + 'k074jgMmJp' + 'AgypSN6cAB' + 'YrXkZeuQib' + 'O0ssckMg5M' + 'XuDKbCyaqn' + _0x1e5182(0x881) + 'fSiGK0AghD' + 'pxrIhDzmkU' + _0x1e5182(_0x538d4a._0x5d4036) + _0x1e5182(_0x538d4a._0x44613a) + 'cGyhJCt04m' + 'dv209fnZg1' + 'fACr5PyOdI' + '35I5DuQ4Ll' + 'gEYsB6yk4w' + _0x1e5182(_0x538d4a._0x34311c) + 'dU3jshlz63' + '30HHPA+Ntc' + '5vb8a9WvFK' + '+TAnVSUB1O' + 'h1eiddgC7A' + 'OcJORzgqTG' + _0x1e5182(0x2d8) + 'cbNnb3+TYY' + _0x1e5182(_0x538d4a._0xd94e83) + 'x72qtzYjAc' + 'D0bHw3W/G1' + 'IACAHNZlIU' + 'sh05Goyx0r' + _0x1e5182(_0x538d4a._0x5e0436) + 'naOxAZgMWy' + 'Lwx0GrblgR' + '+prh34OOXn' + _0x1e5182(_0x538d4a._0x56b93b) + _0x1e5182(0x6dc) + 'GEUIGVfoI8' + 'gRf21TfxE1' + 'SsarNiZgv/' + 'l8CtmJ6p/f' + _0x1e5182(_0x538d4a._0x52909e) + '07g9a78rD1' + '+0YZWDYWUq' + 'BFq1HE0z5W') + ('iahjIIRVFi' + '7mJiIpmBkw' + 'MOGuZdI6xW' + 'CPHSygrV6x' + 'XBQeqctVii' + _0x1e5182(_0x538d4a._0x527f7a) + 'JwpUKW1Ljg' + 'Fdc2WSWAGk' + _0x1e5182(0x83e) + _0x1e5182(0x4d8) + 'zNxZnWtp1B' + 'LPxMV/qzXO' + 'evz2eYcEYg' + '9E1aw3ly0A' + _0x1e5182(0x70d) + _0x1e5182(_0x538d4a._0x32469a) + 'wUT6opv8Pr' + _0x1e5182(0x2fd) + 'loXqDgc3ox' + 'Hy+oFGeMUF' + _0x1e5182(0x384) + _0x1e5182(0x532) + 'C67fz2Ds0C' + 'fAR4uvv3FS' + _0x1e5182(0x5f2) + _0x1e5182(0xb71) + _0x1e5182(0x55f) + 'uP/jMcawPD' + _0x1e5182(_0x538d4a._0x361de5) + _0x1e5182(_0x538d4a._0x15d836) + _0x1e5182(_0x538d4a._0x8cd92f) + '1jXZOD0Vpw' + '9DRR0Og0TT' + 'RKoTZGdJJT' + 'iIFwezeSWt' + 'NTteFC7uOQ' + 'egJSVd7IA0' + 'XqPw6egA2m' + 'TcnscOXrjr' + _0x1e5182(0x1a9) + 'X+2u+G9cJN' + 'pPirWQxMP9' + _0x1e5182(_0x538d4a._0x2e9b7e) + _0x1e5182(_0x538d4a._0x564547) + _0x1e5182(_0x538d4a._0x25b9ff) + 'BJQNDESKEu' + _0x1e5182(_0x538d4a._0x3c9a17) + 'h1W+cc3Z2r' + 'h0mg3BbjwM' + 'pSuex5EYdK' + _0x1e5182(_0x538d4a._0x57048c) + 'Juq3jN90zN' + _0x1e5182(0x6fe) + _0x1e5182(0x406) + _0x1e5182(_0x538d4a._0x34d6d8) + _0x1e5182(0x90e) + 'hBK3FDMq1b' + 'XFOF1U4cZ8' + 'qic9hFkhiS' + 'yMrH2QArCs' + 'TanBeR0vUc' + 'xIkMbg8CL4' + _0x1e5182(_0x538d4a._0x1f6a9f) + _0x1e5182(_0x538d4a._0x859413) + _0x1e5182(0xab1) + _0x1e5182(0x833) + _0x1e5182(0x6af) + 'WtFGGBC2TA' + 'TFs9kz4yV8' + 'zCVov33ftX' + _0x1e5182(_0x538d4a._0x6b2006) + _0x1e5182(0x73f) + 'aplOAQAy/F' + _0x1e5182(_0x538d4a._0x787bb4) + '4iVzJ8vMcE' + _0x1e5182(_0x538d4a._0xcd2cbf) + 'Rrp3lYZ0rn' + _0x1e5182(0xaa7) + 'izzJZ/qstb' + 'x7720XV4+R' + _0x1e5182(0x936) + _0x1e5182(0x1cc) + 'Piw2NI28/a' + 'mavJvFnqBi' + _0x1e5182(0xb5e) + '5+KiQMa24v' + 'wUSWuNLVLP' + 'zYGWQPGRON' + 'JTg0DC9k0K' + 'S7FY5zDoHE' + 'Zo56j4ZwWu' + 'F64eeXJ3Lb' + 'b0TXY1iZ7J' + _0x1e5182(_0x538d4a._0x33fe48) + _0x1e5182(0x695) + '2ThkGR+iQO' + _0x1e5182(0x94b) + '/mQKbEBwDi' + 'jxCgJAnVTh' + 'RTPYMPlXq2') + ('odFTlt3k9L' + 'p6a0tEBGME' + '6DAFoAECpS' + 'p5coFE8TGN' + 'ZJYViHNs10' + '7+2xvpt1/G' + 'J/dqBubfLH' + 'Z9SgdvKV4V' + '31WnJMN/WT' + 'rp9+xy1Ox5' + '9kroWy2SiU' + 'sENfrkDfHA' + '193Kpsi7KZ' + '8IIvL2diID' + _0x1e5182(0x64f) + 'IEvDzcp2LN' + '6VtDTcsuav' + 'IM0UHEr0iY' + 'VbTh6hiE3H' + 'btr+urXh4e' + _0x1e5182(_0x538d4a._0x2b9e1f) + 'TMZd7RsSfu' + _0x1e5182(0x7a1) + 'Cdvzl02FDq' + _0x1e5182(0xb1c) + 'k3qhQvRWeL' + 'FRFMcumwON' + _0x1e5182(_0x538d4a._0x137d48) + 'OKAeypSPDR' + 'GnZPBwLARA' + '1J1gToHNYZ' + 'GzYs9FVKiB' + '7+YV3XNSe9' + 'PrPR+N+H9d' + 'DHZ1grdLI1' + _0x1e5182(0x6a9) + _0x1e5182(0x996) + 'fXYfZGYFe9' + _0x1e5182(0x333) + 'ratVZF+vAF' + '4UQ4iPlyU2' + _0x1e5182(0x5c2) + '3XT0o60mIn' + _0x1e5182(_0x538d4a._0x4ee385) + 'E7NPLFWRDg' + '7RDgm7SvTM' + _0x1e5182(0x7fd) + _0x1e5182(0x828) + _0x1e5182(0xad1) + 'yOFLzrRW6M' + _0x1e5182(0x3c7) + 'LjMfDFPJ4G' + 'A925jDCwkn' + 'D23/zL2fzC' + 'ua2voFOKlA' + '3V6ngvEWjK' + 'o7fB6n4sXB' + 'R0AKlAuvN6' + 'X4u818EOxB' + 'nkeoTK5kBC' + 'GrLahBhqYG' + _0x1e5182(_0x538d4a._0x3fd579) + _0x1e5182(_0x538d4a._0x31bde6) + 'KQhbaHzr36' + '/w6we+LRNn' + _0x1e5182(_0x538d4a._0x39ccb7) + 'ZtVk5PWE79' + 'hiJ+iZviQn' + 'vaxUOF1bhR' + 'mQBGLk4MHc' + 'ZfpwTogbyc' + 'oh77F2HSty' + '/ZMnYoYRuX' + 'PebbMgC4XI' + 'vSmUYB8Auh' + '3OT9+sl27M' + _0x1e5182(0x797) + 'O8O/vYLNui' + 'R32o/PNUx+' + 'JGErc8UTI6' + 'X7qNyKgYq9' + _0x1e5182(_0x538d4a._0x3edc81) + 'SzPpmuqcCH' + _0x1e5182(0x4bf) + 'IBW/l5pUJ3' + 'SyQdyYnBKh' + _0x1e5182(_0x538d4a._0x370ba8) + '0ew8ZpICGh' + 'NYXrVzWIig' + 'CdEJIfLVLc' + _0x1e5182(0x962) + _0x1e5182(_0x538d4a._0x4aaea5) + _0x1e5182(0x6c3) + 'mao5XgJnw/' + _0x1e5182(_0x538d4a._0x38ce99) + _0x1e5182(_0x538d4a._0x2ac4e0) + _0x1e5182(0xb2e) + 'J14JDX8vr4' + '/NHzEG+iZt' + _0x1e5182(0x9a9)) + ('XZg3RIRIPk' + _0x1e5182(0x3ca) + '3DgIRgGAkN' + _0x1e5182(_0x538d4a._0x2941e5) + _0x1e5182(_0x538d4a._0x37dc2d) + _0x1e5182(0x9f2) + 'c57VdM3HKu' + 'jvfLoONgEa' + _0x1e5182(_0x538d4a._0x158cb9) + '3jBlfsf7co' + 'nP53QSAIdT' + 'dDiRqsQYzS' + _0x1e5182(_0x538d4a._0x448770) + '1GJitAR7Rs' + _0x1e5182(_0x538d4a._0x197fd2) + _0x1e5182(0x531) + 'P1lEUov0KS' + 'htKQZiREYy' + _0x1e5182(_0x538d4a._0x219598) + 'OFB1UBzxg2' + '8H9fvbqkrb' + 'ZpuycSNgCP' + _0x1e5182(0xb3a) + 'NZReO7SlVX' + 'VU1DqdJeiR' + '+tgB10w6gw' + _0x1e5182(_0x538d4a._0x1dc466) + _0x1e5182(_0x538d4a._0x22264e) + 'AgaMrSAJpB' + _0x1e5182(0x82c) + '8fjM/SMjLy' + _0x1e5182(0x45d) + 'JaKA2Qj0NQ' + _0x1e5182(0x8c2) + '0wYzBW5mYt' + '/1aWU+ZLYs' + 'U4NYYiiNlJ' + _0x1e5182(_0x538d4a._0x27e600) + 'lx3MA6l32w' + '+IdTIJ3IQC' + _0x1e5182(0xaf0) + _0x1e5182(0x55b) + _0x1e5182(0xa58) + _0x1e5182(0x513) + 'eI9gCY8gAC' + _0x1e5182(0x970) + _0x1e5182(_0x538d4a._0x3b8cfa) + 'EiekpYUAQm' + _0x1e5182(_0x538d4a._0x12e696) + 'pqUdf4ls7l' + 'Z/LxIyyYy2' + 'MyqfOX6VVt' + _0x1e5182(_0x538d4a._0x3926aa) + _0x1e5182(0x776) + 'KyqdCBcTL0' + 'VEsq2ZEF2L' + 'aCjQEqWJsv' + 'UcPTW9sz+i' + 'UvK+vEHVpf' + 'ENECGSh9+b' + 'ZiZjJhhzMa' + 'UAmnfug5cR' + 'KCtBCkUZNO' + '9Vf/fOD4Vp' + 'a+7TqIhz/6' + _0x1e5182(0x6ef) + _0x1e5182(0x8aa) + 'XWqEXBKOK8' + _0x1e5182(_0x538d4a._0x1af92d) + _0x1e5182(0xa85) + 'US6030skJV' + 'URV8kXlJro' + 'yPaYYdoKtP' + 'BfJ2oHYIZv' + 'TEISNANYDU' + 'cUE+GQBVKs' + '3SAsCjvwek' + _0x1e5182(0x624) + 'huzyFYApHj' + 'zNNY33Yd3E' + '8HU8+0B2Rg' + 'jfa9c82S6q' + 'l9Ye9jCMuh' + _0x1e5182(0xa20) + 'cq4wwCNjEe' + _0x1e5182(_0x538d4a._0x399649) + 'nNcJzLXFMU' + 'vCjG+iwPww' + 'hGQidHtAAj' + _0x1e5182(0x25f) + '7pUFpoGBao' + 'cNH6zDGX3f' + _0x1e5182(_0x538d4a._0x210148) + _0x1e5182(0x573) + 'L4dCtzt/8a' + 'd/VchMo2Z4' + _0x1e5182(0x324) + _0x1e5182(_0x538d4a._0x30d6cd) + '1qnUyQmE5Q' + _0x1e5182(0x872)) + ('EtCMTnzZgK' + _0x1e5182(0xa6c) + 'nAtwIEeDyI' + '1biq+oA90M' + 'MsJvRbUdcC' + 'ZFDsagTICN' + 'hxBj5AWieQ' + _0x1e5182(_0x538d4a._0x175ea3) + _0x1e5182(0x245) + _0x1e5182(0x411) + _0x1e5182(_0x538d4a._0x756e7) + 'crpn02zDGO' + 'RQszAbou9j' + 's+N7PimdPK' + _0x1e5182(_0x538d4a._0x452116) + 'S6jXW0GIQI' + 'nXq7ni8xa5' + _0x1e5182(0x1f7) + '0lAPXdoI0G' + 'yOg/dZunGV' + 'mHZwUQOGh5' + 'gWIKuRk8hX' + 'SW7eEhox6S' + 'jZwD7leSvP' + _0x1e5182(0x480) + 'YK8zzjc4Fu' + 'shI0v2DdaE' + _0x1e5182(_0x538d4a._0x121aa7) + _0x1e5182(0x76e) + '4hEIeu8DN0' + 'wRvlDx9NpK' + '1C1eyUtwpA' + _0x1e5182(0xa92) + '0bQzRRue9M' + 'wvD4fto/OQ' + _0x1e5182(0x43a) + _0x1e5182(0x94a) + 'qGe7bHPG4S' + 'Gog9LtwTyg' + 'YI8Dn8UUbm' + 'doGHPwtRr4' + 'hLQ3HrsTB0' + 'D1zW9iG9b1' + _0x1e5182(_0x538d4a._0x21eae6) + 'XJ3gvE/gjS' + 'cSvzYHv6BT' + _0x1e5182(_0x538d4a._0x2e1576) + _0x1e5182(_0x538d4a._0x428af6) + _0x1e5182(0x8e4) + 'kmLCDz+2/P' + 'Od+6x+ILyW' + '14yb0B5k4h' + 'j3aGBctyF6' + '8ZTsHrAHkx' + 'uNzWrvastg' + 'Yn3o8FAamL' + '5KAwjZ9frv' + '/3PWhdg9N7' + 'BKk/pOdOs/' + '74pVm445ff' + _0x1e5182(0xb05) + '+Y0zT66o4i' + 'bIPLhz3hSh' + 'lR1ijC95gc' + _0x1e5182(0x469) + 'KJhZqL3Q8p' + _0x1e5182(0x27a) + 'vWhjBjL6I6' + 'p4yCJhBj4r' + 'k7EHmXNHCd' + 'gPEyaw2Dvx' + 'NjiAdqYhEw' + 'Mceu+Jq/52' + '8zE657r9/Y' + 'fXHZN/3ftN' + 'mHj0S6/Enc' + _0x1e5182(0x2e8) + 'HkiHDMyt2f' + 'GTKdYmFROu' + _0x1e5182(0x839) + _0x1e5182(0x994) + '8XVmnPObV+' + _0x1e5182(_0x538d4a._0x476180) + 'ehSh2jNAgw' + 'DqGgCNBtKx' + 'QYUNgQd6GC' + _0x1e5182(_0x538d4a._0x3c29e9) + 'ELRDAE/ogG' + _0x1e5182(0x739) + 'UYARd1p/9t' + '6Hg68y5hiY' + '4HQM1kIm+c' + _0x1e5182(0x346) + '65xtSoSUjJ' + 'XNgc4yyJcA' + 'V3/xD4a2vu' + '8tKYESTBdR' + _0x1e5182(_0x538d4a._0x48aaae) + 'pbLueHFj4w' + 'rXJfoO6SOH') + (_0x1e5182(_0x538d4a._0x56958e) + 'TPYMIEEUuO' + 'kZQdCO2CEA' + _0x1e5182(_0x538d4a._0x4d57b5) + 'R4wkMyymIC' + 'AQ0g2JPRzX' + _0x1e5182(_0x538d4a._0x5340f) + 'LnXNPabMxT' + 'wIUj9WpPJH' + _0x1e5182(_0x538d4a._0x466e09) + 'qZOzYwmx3J' + 'gstQrBgzBQ' + _0x1e5182(0xa65) + 'VIfXWVFbiU' + _0x1e5182(0x5b6) + 'cHGfumK289' + 'Lp7/rC9t5D' + 'xIIERSMCyT' + 'oUAANoYIeM' + 'QIB5cenBQA' + 'bfRTDqksyu' + _0x1e5182(0x446) + 'XEvqSamEmM' + 'sliD+0zWY0' + 'ITNUwKa8ed' + 'T/eNzIlhQ3' + _0x1e5182(0x3f4) + _0x1e5182(_0x538d4a._0x468116) + 'TVwdIpQqtK' + '3Q04Xg+PJ8' + 'Ov9ZRbM/sv' + _0x1e5182(_0x538d4a._0x31bca9) + _0x1e5182(_0x538d4a._0x5482c3) + 'PD5sMs6OIX' + '3WQl6z8VM+' + 't7nfdmRGYy' + _0x1e5182(_0x538d4a._0x3e85f1) + _0x1e5182(_0x538d4a._0xbef29d) + 'tinScfkTjo' + 'LD4eYLjt0N' + 'fWJeKyjave' + 'sPTHz+KZe8' + _0x1e5182(0x5b9) + 'mw6WTrH6sc' + 'EDD9jD5BMO' + _0x1e5182(0x67d) + _0x1e5182(0xbb9) + '/eU+jInrZo' + 'uZSHnN/T/l' + '48R+GP1WAz' + 'zfltUfJMZ3' + 'JY2yKMzLSc' + 'M7ob/658OD' + _0x1e5182(_0x538d4a._0x585e5b) + 'aIYzAcarvs' + _0x1e5182(_0x538d4a._0x4faf26) + 'Lcs3P0Pqjx' + 'vo/C6EM7mH' + 'aXThH8KjhV' + '1evF8fA+cJ' + 'mLN6lzN25I' + '+mDHkMvUpp' + '4jkJbCJCt+' + 'BdAGWYDMGu' + _0x1e5182(_0x538d4a._0x521dae) + 'zNjH8i4tQ8' + 'P6BMbC+wCg' + _0x1e5182(_0x538d4a._0x17bd93) + _0x1e5182(_0x538d4a._0x5175cf) + 'l/VbJSepg2' + 'k8E8euaKe/' + _0x1e5182(_0x538d4a._0x5944bc) + 'SSmN6JIuJs' + '0OPcwbIpQp' + 'PqRc/UIeEV' + 'Xm3es17d9s' + 'jSkb/alq0m' + '6UczuIA92A' + '1dQKEb6o3r' + _0x1e5182(_0x538d4a._0x6b2d21) + 'AyAmq4lwlN' + _0x1e5182(0x9c5) + 'xAEL0+AgFm' + 'OGGsGEKdQL' + '8iSe6xW/rn' + 'Z5sbh58cK6' + 'N0Uv3Xg324' + '/p3C89flmF' + _0x1e5182(0x3aa) + 'gAkRt8bBFH' + 'BNtTZ5wUGd' + _0x1e5182(0x792) + _0x1e5182(_0x538d4a._0x3907a9) + _0x1e5182(_0x538d4a._0x1c7fe3) + _0x1e5182(_0x538d4a._0x97d920) + 'HWnE5JGm4X' + 'eUGsEAGr+G' + 'C4BSKWAnR4' + _0x1e5182(_0x538d4a._0x32e192) + 'qJ9wjbbb8J') + (_0x1e5182(0xaa2) + 'a0K/AqzZOH' + _0x1e5182(0xbbe) + 'J+1rewWmbJ' + 'Pkwo7ZibvU' + _0x1e5182(0x8c9) + _0x1e5182(0x76f) + 'XTiUzBKnVb' + '6mdO2dvJrx' + 'tDvhVhk7zn' + _0x1e5182(_0x538d4a._0x3354f2) + '+AqGlgyBFM' + 'jCLY3hJzQi' + '2HmxCYsjj4' + 'sDgVAa/geg' + 'RybtvyCBIX' + _0x1e5182(0x8b9) + 'HYpcd3qkse' + _0x1e5182(0x53d) + 'RtxhoGFLB8' + '6AWjq1BR1L' + '0SvWAnGZY+' + 'v/8Mkfh1Xs' + 'OkcZq3dTY3' + _0x1e5182(_0x538d4a._0x4520c7) + '8SOQZRN6B8' + _0x1e5182(0xadb) + _0x1e5182(0x6c9) + _0x1e5182(_0x538d4a._0x59efdd) + 'Y6dI9uetOz' + _0x1e5182(_0x538d4a._0x2425a8) + 'sSiPcd0UGQ' + _0x1e5182(_0x538d4a._0x38265e) + _0x1e5182(_0x538d4a._0x15445b) + '9sXyIs2v8Z' + _0x1e5182(0x466) + 'aiKINXBeW8' + 'q0316p/WPE' + 'eSd92igt6L' + 'VO02dGMbQA' + _0x1e5182(_0x538d4a._0x347597) + _0x1e5182(_0x538d4a._0x17bdf0) + _0x1e5182(0xa09) + 'U9/KYnRm9y' + _0x1e5182(0x935) + 'E8KoY0NAo+' + _0x1e5182(0x534) + _0x1e5182(_0x538d4a._0x5f494f) + 'c2M23VtsIk' + 'BzENUjUJe0' + 'I/ABD/Kh1N' + 'YNVJQHCKtQ' + '3hPzzy7LB7' + _0x1e5182(_0x538d4a._0x5dda4c) + 'A862B/tq1P' + 'HuH3DBS+MB' + 'R3pCGWegKg' + 'GeC0oRDA4H' + 'APzcAfs19i' + '7wZITlEBQq' + 'E0g7ZpoNVr' + 'cCuDEAn85d' + 'RYGROHy05n' + 'Toz0QOa18a' + _0x1e5182(0x6ad) + _0x1e5182(_0x538d4a._0x1ff7fb) + '4W1sk49cap' + '8rFNGx99lt' + _0x1e5182(_0x538d4a._0x5a154b) + _0x1e5182(_0x538d4a._0x433052) + _0x1e5182(0x19c) + 'g53RMzfkD2' + '8HCHRDMe5i' + '3KYZxpszjM' + 'gijQCY0tKQ' + _0x1e5182(0x226) + 'D2/jo2sais' + '7dpjZmifWH' + 't5CG3uU6zY' + 'w56SignPno' + 'sF9gm6WgxW' + 'ZpGTzCQYHW' + 'nNZkFfk1mP' + 'frh0yPUPfK' + 'jweu+eIEAw' + _0x1e5182(0x7be) + 'Egifkuhr1g' + '4AxiUioZcB' + '8ngZ3J6jwe' + _0x1e5182(0x1f9) + 'mWjAYyJDPW' + 'wDd2QtxI6Z' + 'BQ2rBhIZJW' + _0x1e5182(0x8bf) + _0x1e5182(0x9c8) + 'fmCSfMHeHE' + _0x1e5182(_0x538d4a._0x4422f5) + 'jQIe4/+DNw' + 'ztwGkvXidP' + 'N9SptqOV7s') + ('Moe03xlG70' + 'NZn5xzIy9i' + _0x1e5182(_0x538d4a._0x52f5e9) + 'CXrsAEkeNH' + 'tagmEHFiUp' + 'R8CkwfBkMw' + 'YSYVinIZvS' + 'gHhuPOBsMZ' + '9q5v2xK3Cq' + 'WEzs+vC2HK' + '3Mkb2fbG5u' + _0x1e5182(0xbae) + 'ztH3QN7QBJ' + _0x1e5182(0x795) + 'c02DXmyyN4' + 'tGgcuuEAAE' + _0x1e5182(0xaa8) + '1b4rQSZlj+' + _0x1e5182(_0x538d4a._0x34a093) + 'rExUvM08Uj' + _0x1e5182(0xaf8) + _0x1e5182(_0x538d4a._0x7c62af) + _0x1e5182(_0x538d4a._0x482359) + 'Bl6rjwozAa' + '47breegJX9' + '7WQ0vU6ybN' + _0x1e5182(0x75b) + _0x1e5182(0x1ef) + 'qaUDgmyObi' + _0x1e5182(0x64b) + _0x1e5182(0x35a) + 'eeMD69W9Pe' + '0ZeOHUhCyX' + '0P+MR1Hu4m' + 'Uz44GpHJTF' + 'QaABu4aXoa' + 'G9hBfE3sWe' + '8hkgoIeL78' + 'Rj3NjFWo/G' + _0x1e5182(0x339) + '7GEovabI61' + _0x1e5182(_0x538d4a._0x65a6c8) + _0x1e5182(_0x538d4a._0xeb6873) + 'L/zxBdD6YV' + 'lbaAiextpn' + 'oGS3Rk0whs' + 'yF91UJZy9E' + 'Nkga7FlsOp' + 'JBM7BXnJUq' + '2AMslwh2YM' + 'GyAF/MzjXt' + 'l8SGpiFsl+' + 'LZfUg/dFTx' + 'vLYABPmeJH' + 'ZXKCqcfgw0' + _0x1e5182(_0x538d4a._0x14201f) + _0x1e5182(_0x538d4a._0x5b3614) + _0x1e5182(0x341) + _0x1e5182(0x301) + 'fPqWf5t/lx' + 'P7WLjmmQx7' + 'VsJ15fCMTX' + 'wQ/8o1tQNb' + '2PXm/ZtTjl' + 'baU/BqE6ES' + 'Q8z2G0oYSj' + _0x1e5182(0x6de) + _0x1e5182(0xbf7) + 'hyMura2AoY' + _0x1e5182(0x43e) + _0x1e5182(0xb34) + 'QzAMHvzg6Z' + '+Nxqq8Yw8L' + _0x1e5182(0xa06) + 'Ox7neu+YU3' + '8+M/25/MNw' + _0x1e5182(_0x538d4a._0x288034) + 'awDijWlTW2' + 'XpPJe++s1/' + _0x1e5182(_0x538d4a._0xae8c9a) + 'ymJSeELQ8p' + 'EExo2HQUqw' + _0x1e5182(0x69d) + 'Db1qZNGR0v' + _0x1e5182(_0x538d4a._0x5533a8) + _0x1e5182(_0x538d4a._0x418488) + _0x1e5182(0x2c8) + 'ej0NCHeZdm' + _0x1e5182(0x329) + _0x1e5182(_0x538d4a._0x3ed1d6) + _0x1e5182(_0x538d4a._0x48ef2f) + 'v1Zwe0PKZU' + 'PPGQOt+FYT' + 'Y2R0A+jFIE' + 'h8/Y41m2zn' + 'QrMSRyPpsB' + '2zUwnXDNDm' + '79ugGXbkNm' + 'bzG3uX6c2+' + 'ZexRw4sL9k') + (_0x1e5182(_0x538d4a._0x310714) + _0x1e5182(0x1e6) + 'xCoRDWS6SF' + _0x1e5182(0x318) + 'B9eMb0yc+A' + 'OgHsTY+eiP' + _0x1e5182(_0x538d4a._0x59398b) + 'to5o4VNTLS' + 'yoz143MhkH' + '5w1tkXFU4M' + 'aZRyvXf3mk' + 'Bz+ZGBEVdE' + _0x1e5182(_0x538d4a._0x4338e5) + _0x1e5182(0x1bb) + 'oGQoaWYlDO' + 'uOUa7vTRGm' + 'rWvhuSYYcU' + 'vBcp5BCkpa' + _0x1e5182(_0x538d4a._0x352227) + _0x1e5182(0x67a) + 'Sop+rjkDaf' + 'KJ64sFCwr+' + _0x1e5182(0x445) + _0x1e5182(_0x538d4a._0x3c1d84) + 'uf4xTgmp1r' + _0x1e5182(0x2d9) + _0x1e5182(_0x538d4a._0x4f5be7) + 'jIUgjylVlD' + 'hBCLCNjKEj' + _0x1e5182(_0x538d4a._0x4201a3) + 'KBWRlM49ih' + _0x1e5182(0x4a4) + '5YdF4HHKMg' + 'sgkkj+BRLA' + 'Gk0TQUx8MA' + '0joI3f72CQ' + 'fjnEw29YWK' + _0x1e5182(0x7a7) + '77U9uBysW/' + _0x1e5182(0x1c5) + 'iPgXOB0ikd' + 'oDe/7R17dJ' + _0x1e5182(0xb31) + 'wZXBvhuiiv' + 'X/mD0PDrYi' + 'jpVYxm+iJ8' + _0x1e5182(0x900) + 'pXTzbUWQZo' + 'qjXBrG/Dp0' + '7YbBldH++P' + 'cxxIKTr4/8' + _0x1e5182(_0x538d4a._0x69aea8) + 'T3z5XcuW+V' + 'm0zo1rQOdu' + _0x1e5182(_0x538d4a._0x98626e) + '8zO0FnU46e' + _0x1e5182(0x9ee) + _0x1e5182(_0x538d4a._0x46cd72) + 'fq3IR4QWdc' + _0x1e5182(_0x538d4a._0x9fc9a2) + 'QQtj2NeGEw' + 'w9gOfJYdMi' + 'jjdyRRN9Dp' + 'o4aFvgoNSw' + 'sNE01Y94Pm' + _0x1e5182(0x852) + 'mwsvtx6Nzj' + 'HdmnYxu2lq' + _0x1e5182(0x4c6) + _0x1e5182(_0x538d4a._0x58e61f) + '1Ea331G1U3' + 'pa36sqcZr8' + _0x1e5182(_0x538d4a._0x18d657) + _0x1e5182(_0x538d4a._0x1c15f0) + 'wetmbhDi3o' + 'gTxjp4YykD' + 'UDedDdlsjD' + _0x1e5182(_0x538d4a._0x1cc64d) + 'pCkNvRCmMl' + _0x1e5182(_0x538d4a._0x5c0f49) + 'gIsTDAMIyd' + 'fu/cARhfh9' + 'V41+3NA4lQ' + _0x1e5182(0x836) + '58QeMYkSXi' + 'oqZEJREjrg' + _0x1e5182(0x379) + _0x1e5182(_0x538d4a._0x3c03d6) + 'uOGRcWNKRt' + _0x1e5182(0x42f) + 'doxtvRA+A3' + 'bksQ5TNkNP' + _0x1e5182(0x64d) + _0x1e5182(_0x538d4a._0x42d87b) + '7QZViYSbni' + _0x1e5182(_0x538d4a._0x3411eb) + 'RYGpDQMLg0' + 'Nu1kHHy6Hr' + 'Ph2x89Rsn6' + 't68s/cebRa') + (_0x1e5182(0x72d) + _0x1e5182(_0x538d4a._0x1affdb) + 'JA9arXXFf9' + 'mOuhfQjtCQ' + 'sCFYrByfa+' + 'eVhoF9v5PB' + 'bWNkQQZs4B' + _0x1e5182(0x8d1) + '8zADPpiNiI' + 'BOPjON5bFp' + _0x1e5182(0x5e7) + 'CECGPBfmaC' + _0x1e5182(_0x538d4a._0xd8934c) + 'pv/XY2WOLL' + _0x1e5182(_0x538d4a._0x9adb3b) + _0x1e5182(_0x538d4a._0x2b9954) + 'bhbzRQxdMX' + 'rfRt++qWa3' + '4MqGoSYQYU' + 'wAbfFhsJVC' + 'Y7kb2RKslB' + _0x1e5182(_0x538d4a._0x3ae276) + 'qRgYwg8mEQ' + 'SWfkVym66i' + _0x1e5182(_0x538d4a._0x2692ff) + _0x1e5182(_0x538d4a._0x39785a) + _0x1e5182(_0x538d4a._0x530e19) + _0x1e5182(0x1b9) + 'uTpdOdYXxy' + 'sLD/mBn65l' + _0x1e5182(0xbc1) + _0x1e5182(_0x538d4a._0x142271) + 'xs9Ij1ty9L' + _0x1e5182(_0x538d4a._0xe87297) + 'l4FDT1hoQp' + 'qIeURE8xsj' + _0x1e5182(0x1d2) + 'hjxUJHkQQ8' + '5N6FPDusfs' + 'lKFe7RrjYc' + 'CQhJ25OGyp' + 'PVychjrTII' + '0F/C/4GHWK' + 'GnAvPAXUk+' + 'ocXAZzjR0c' + _0x1e5182(_0x538d4a._0x3f0316) + 'h47ok5SC5w' + 'UzLH3TH+L6' + 'YjA9qjL3XI' + 'rF98wJ4kCw' + _0x1e5182(_0x538d4a._0x35a921) + 'ytPsKpakJb' + 'Cw0D8zCo23' + _0x1e5182(0x395) + _0x1e5182(_0x538d4a._0x399078) + 'HnPfTVzof1' + _0x1e5182(0x80d) + 'DV45MP4n/H' + _0x1e5182(_0x538d4a._0x50a2d8) + _0x1e5182(_0x538d4a._0x4e4f2c) + 'wu+cd+YUdE' + 'sdZlQEo3g8' + 'J8cwNRCkrW' + 'viTq4JUIlA' + 'Xwl/L2JWho' + 'hCkSWQx7MF' + 'DQF01LNrIc' + 'yUeJ8TNKHB' + 'AaRkJplDDh' + _0x1e5182(0x5e2) + 'w2c29Oepb8' + 'KWUTy9vJ2/' + 'vNp9htFZCS' + 'WiYOqt7vo/' + _0x1e5182(_0x538d4a._0x4a1432) + '9HxVnIgTIg' + 'KMybPP6bUz' + 'bxOA7zo2yI' + 'SWO9KND3TD' + 'ZmLoHFQqho' + 'XFngUy8E3s' + _0x1e5182(_0x538d4a._0x454a65) + 'AYX0h28lhb' + 'mhbqxO0KIe' + '2pCT30e5NP' + 'DRVOLYfZ+9' + 'fd1Kdlh+7c' + _0x1e5182(_0x538d4a._0x52f91d) + 'XY+Kedz7iO' + 'buPIkIEfJK' + 'NlhN65YU5o' + 'TH9oTOwabi' + 'quFKRfcQCS' + _0x1e5182(_0x538d4a._0xa5bc27) + '6NJpwd6P+q' + 'sTAa+9P1WB' + _0x1e5182(0xac7) + 'jaSFCFrD+J' + 'O0o0nWvfcd' + 'OeVmhdPwcN') + ('+WdX1mkG/6' + 'R3unl8eMCZ' + 'KGaWiUBYP2' + _0x1e5182(0x708) + 'vEjNvgzKLx' + '9EAG7uP+xS' + 'r5k7qPsQcT' + '0f2+Xx5kPw' + 'ZYgQR7EBht' + _0x1e5182(0xa39) + 'qGkMbHHt6r' + 'PHI6rNwpoS' + 'Z+o3Y804mx' + 'yZWFw9dEDN' + 'zGV6MseP+2' + 'OftWitco8U' + _0x1e5182(_0x538d4a._0x5c22eb) + 'U95uqI5iRs' + 'lkDDpAV2Ib' + 'M74sRizdWF' + 'cIFJjCYXHG' + 'WEYipMSuAt' + _0x1e5182(0x19d) + _0x1e5182(0xa2c) + _0x1e5182(0x1e3) + 'IY3vPqycDi' + _0x1e5182(_0x538d4a._0x152394) + 'E7bdxHL+oK' + 'UnlbGRVH2B' + _0x1e5182(_0x538d4a._0x59d857) + '/8kKLqSBgP' + _0x1e5182(0xa0a) + 'dQ8aM1FEhE' + 'tROfzSiHXS' + 'hYdsczYAcA' + '8tqwWGJPPw' + _0x1e5182(_0x538d4a._0x53acd2) + 'fuM5l4UymC' + _0x1e5182(_0x538d4a._0x124d04) + 'WT44gIeTnR' + _0x1e5182(0x268) + '7Q8DmJPVK/' + _0x1e5182(_0x538d4a._0x553344) + 'y9PFP+T+UO' + _0x1e5182(_0x538d4a._0x450fa1) + 'RhV7PINZSa' + 'yUPRBEkiYs' + 'ir6VsPdZGQ' + 'BDkoEWIybb' + 'cf/iXQrYMz' + 'ICxp7vSYBn' + _0x1e5182(_0x538d4a._0x1b174e) + _0x1e5182(_0x538d4a._0xfdd048) + 'RMKB1cedH3' + 'n8Ov0cAsOk' + 'eHV6LP2RTK' + _0x1e5182(_0x538d4a._0x9fca6a) + '2TD6cgdvk/' + 'fu39XZ052o' + 'ecWgYQqmhI' + 'NDUCazZQ+i' + _0x1e5182(0x7cb) + 'lJwM7uQD2M' + 'NwlrgQ0qsj' + '/ZjILrgBFg' + 'xC+jB0IVeO' + '/oEIcWwngL' + '/s8gd8Inv5' + 'ycmnpaqPA1' + 'MxcMsMmz51' + '+570E6xcRs' + _0x1e5182(0x85e) + 'uGNYcnvxU+' + 'StFoB7sd0x' + 'ip3Uyd9PRT' + 'zuiXAmi2B2' + 'gQmln9CgBO' + 'vLID1GMWLm' + 'EKFRiSm61u' + _0x1e5182(_0x538d4a._0xd3b622) + 'CMONrGbOvm' + 'JYsCTSPDQi' + _0x1e5182(_0x538d4a._0x5bb110) + '3eCU/gs+xT' + _0x1e5182(_0x538d4a._0x31c3fb) + _0x1e5182(_0x538d4a._0x58e5aa) + _0x1e5182(0x83b) + _0x1e5182(_0x538d4a._0x839822) + '7pJh6CaViP' + 'xJwwtnqMRw' + _0x1e5182(0xaca) + 'R/WJhSp9Kf' + _0x1e5182(0x218) + 'jZh1HCS6WD' + 'wtECR2KE4G' + 'HFqIq5j6Rq' + 'UpnQgUUCax' + 'sMToH29dd/' + _0x1e5182(_0x538d4a._0x570a87) + 'WGd4TU+FkM') + ('Peit3I7Adx' + _0x1e5182(_0x538d4a._0x11e5fc) + '01VO/ur2Q5' + '1jTitX47qM' + '9KMt7DayfJ' + 'aPQtI7eMXB' + '0oHhR1SXxQ' + _0x1e5182(_0x538d4a._0x20d36b) + 'HWQTeH3jsD' + 'R/ifnqzwtX' + _0x1e5182(_0x538d4a._0x502244) + 'xvZqK0tqGK' + _0x1e5182(0xbd7) + _0x1e5182(_0x538d4a._0x4539c5) + _0x1e5182(_0x538d4a._0x2ac489) + '9n9IP1QM+7' + 'eBlndMmq6v' + 'oB8XY2iW7c' + _0x1e5182(0x3d2) + '2DWg4VxLRy' + 'eSKEQxSor7' + 'NXTvrjOACl' + '/Pw8bvy1i0' + '028W4rds4F' + '4reHLVkIuM' + _0x1e5182(_0x538d4a._0x5d5c97) + 'OghjYRSQLm' + 'eJvYC0alg6' + _0x1e5182(_0x538d4a._0xf77d31) + 'GKXo055GN0' + '7/vUL3VuOB' + 'x89HERUgGU' + _0x1e5182(_0x538d4a._0x412c5f) + _0x1e5182(_0x538d4a._0xb43401) + _0x1e5182(_0x538d4a._0x59645e) + 'y8N9bJz++P' + 'umY7uxs/1y' + 'dEfmDlVHr7' + _0x1e5182(_0x538d4a._0x65c895) + 'h4wWKeaHG7' + 'lU7Ri7qd//' + 'wdXvwWA9Kd' + '6IY8q/2btT' + 'jiSP4jRsjk' + 'QeRqM/lAaf' + _0x1e5182(0x714) + 'xkE/uMw1N2' + 'A+cbkzCXUD' + '55PxzW4nxL' + '6TT3QYUknt' + 'nuePsCmoYa' + 'J4j+psbCKi' + 'iVKXaioL5F' + 'grJSOyPJw2' + '54cSI2Y+9J' + _0x1e5182(_0x538d4a._0x16c4ff) + _0x1e5182(_0x538d4a._0x5aa01f) + 'iVMgw1jcxW' + _0x1e5182(_0x538d4a._0x20331d) + 'cEZymH2K5G' + '/LKOsPyMcB' + 'zMNbKsO5+t' + 'AYCk+29xCd' + 'FkhGwhUzMz' + _0x1e5182(_0x538d4a._0x1d0d09) + 'SCkkmsRYXD' + 'DImhT6AGHK' + 'PLkvKtWfYU' + 'fjw4Q/6wGo' + 'n4WbwsROxz' + _0x1e5182(0x951) + _0x1e5182(0x896) + 'Y8nGDjN3/U' + 'Uh4fQwEyW1' + 'A85bw6am/K' + 'kruPDjbaA8' + 'WDKwsHSeZk' + 'pbXP5WY8OZ' + 'jbj5feKUeY' + _0x1e5182(_0x538d4a._0xfaa83b) + 'xe0eTeYWlH' + 'UpCBmfRlQv' + 'jTf6xOPUOo' + 'cIZYjdonOq' + '5nxv5EBzpH' + 'yYdP39L8Je' + _0x1e5182(0x8d2) + 'q57YchjIHt' + 'yQ0b9YSRPz' + 'bo7Zz4nbY3' + 'wRRbsJba3O' + 'NFYbzdJyV4' + 'RGfnSmUOFM' + 'sSYEZHpO33' + _0x1e5182(_0x538d4a._0x58b547) + 'DDkmht8njB' + 'BgAiZAcmN/' + _0x1e5182(_0x538d4a._0x3fd953) + 'b6TelGKmOR' + 'lrVnoD/bZP') + ('iGLBDDqrf4' + 'LLNJRYkE2P' + 'fMgvzWcn2j' + _0x1e5182(_0x538d4a._0x500279) + '/lMj7t8D1s' + _0x1e5182(0x6fd) + 'ILUDMrg+xL' + '/vc15bKda0' + '/YwwKO7DcS' + 'lH2VW+i6ZY' + _0x1e5182(0xb2a) + _0x1e5182(_0x538d4a._0x55bae4) + 'Q2lVFhMyoq' + 'jGnwWdZDCi' + 'sT6AxR0ok/' + 'fPEuZeMlZw' + '4VzpiuA877' + 'D9Zg2nVb3i' + 'epS+7uSdSm' + '9DFuv1c+QM' + 'FE3KnfbErp' + 'F9uDfvGYcQ' + 'r2YIrWM7Q7' + _0x1e5182(0x4ec) + 'JRFhUrQIxL' + _0x1e5182(_0x538d4a._0x1e4884) + _0x1e5182(_0x538d4a._0x14dcb4) + 'mrdmfGbbVX' + _0x1e5182(0xb17) + 'e9DDTqRqDI' + _0x1e5182(_0x538d4a._0x2d5b55) + '8kkAMMEoMM' + 'KmMGGNcWej' + 'mDQRJk8koV' + 'mdFkCQ0FHn' + 'EANqCmRDM3' + 'A9IzmFpqWl' + _0x1e5182(_0x538d4a._0x2af40c) + 'XJFX/MT/1G' + _0x1e5182(0x90a) + '3Ql00A+yfd' + 'ekelfhRf4F' + 'nHeH/lg8HO' + _0x1e5182(_0x538d4a._0x32a913) + 'vuQLDPy8tI' + 'CdiDEBuUd8' + 'WIFEAyX4B6' + _0x1e5182(0x1af) + 'ByoBvr2Ljk' + 'sWKcFR3SNK' + 'CUpEGa6dIp' + '27H24xtAhW' + _0x1e5182(_0x538d4a._0x3887df) + 'Axithgt0nB' + 'JgGL0HMD/F' + _0x1e5182(_0x538d4a._0x275b07) + _0x1e5182(_0x538d4a._0x2708d4) + 'bBQSIPiMrv' + '6IY79VHIAe' + _0x1e5182(_0x538d4a._0x3b6e77) + _0x1e5182(0x905) + 'HZOVYcLjY7' + _0x1e5182(_0x538d4a._0x382a60) + 'vuyrh85Y13' + 'yb/YqL8dqb' + '8M8hq22uPy' + 'm9uPsGb7+U' + '7oT2ZO01A7' + '92kkoQtgJG' + 'FTgqopSRzY' + 'ltPcRU1H74' + 'qBE3R47Jwz' + '5twIg3YCtO' + _0x1e5182(0x303) + _0x1e5182(_0x538d4a._0x1a58f5) + 'rXMpvPQS1K' + '19hgTTHCc4' + 'dawhYZCmGV' + 'R/Zg8mLA97' + 'MBHiN+5RCj' + 'k66+0xhtpm' + 'UNlhaEzHML' + _0x1e5182(0x225) + _0x1e5182(_0x538d4a._0x41aeec) + 'H58gfbOMy8' + 'o3mIlnp3AP' + _0x1e5182(_0x538d4a._0x56b181) + 'xwBZN0NKIh' + _0x1e5182(_0x538d4a._0x423ac5) + 'jfMjUC41G3' + 'cQS7gCR/Sg' + 'VsIxSZAMwH' + 'FjRYVAJ2DU' + 'EKHC6EufX/' + 'utoMI3p+uA' + '3/XIx3/oUw' + 'uDf9iXaj3G' + 'ABpg4gG/Zl' + 'bziT0cGXZN' + 'GPs/FzOozI') + ('CwxuOdgFZh' + 'mkHbew48MO' + _0x1e5182(_0x538d4a._0x515534) + _0x1e5182(0xb59) + 'TekEF2HnPf' + '7CU71GN5N/' + 'NJ0YsNomQ2' + 'pDGGYVjYME' + 'FkVmaQgp64' + _0x1e5182(0x4d0) + 'EZjEGTc61q' + 'vDMNraRhLG' + _0x1e5182(0x6d4) + 'Ub8pVPg2dB' + '1E2qW/aRtE' + _0x1e5182(_0x538d4a._0x37de98) + _0x1e5182(0x937) + 'xQM+LR83cn' + _0x1e5182(0x40b) + '3afoWKk29E' + _0x1e5182(0xac9) + 'lG1V+tI6vU' + '8mfWOiwree' + '3dp3U1/9+D' + 'XjkAh2tc1M' + 'gWInEfPDWG' + _0x1e5182(_0x538d4a._0x15cc54) + _0x1e5182(0x762) + _0x1e5182(_0x538d4a._0x1d1412) + 'gya9d+m8SK' + 'zbngzkyJCR' + 'eKAuq+YPkb' + _0x1e5182(0x8f0) + '328BFb4lXQ' + _0x1e5182(0x6d0) + 'FxSp+KSPjm' + 'zZ63HuB1YQ' + _0x1e5182(_0x538d4a._0x4a1b2c) + 'A9rIZfFxhN' + _0x1e5182(0x803) + 'mZ2+M97RmB' + 'jKReBx9H/w' + '1Y6hH+p9X+' + 'Vt+RRt8GKX' + _0x1e5182(0xa5f) + 'j//SH3rRmL' + 'Jk2Q02xsQe' + 'TAipY0zlRG' + 'I1weDY3Mo2' + 'LemawT+8mM' + 'XTknqHjVKM' + '+mfUM/d8Z6' + 'TwnbAORntD' + 'G8PAWpEHSW' + 'Wa3jfPhTnc' + '7C1ZGnPHWd' + _0x1e5182(_0x538d4a._0xbadaf5) + 't//K8x9hba' + 'aUDBseZwEL' + _0x1e5182(_0x538d4a._0x76ef5) + '+IdVDY75Zf' + 'oetltPzVY2' + '3ZIMgDhYfM' + 'SEr0KmNPMr' + _0x1e5182(_0x538d4a._0xc4f8b2) + '+4R24OARag' + _0x1e5182(0x8b7) + 'j18d+vOU/g' + 'O5vj1U+I5Y' + 'B6NdevCerL' + _0x1e5182(0xbc4) + '6zOMO4B4+t' + _0x1e5182(0x549) + 'LSxeC2Qmm8' + _0x1e5182(0x89d) + _0x1e5182(0x3c3) + 'PTat/rbOD9' + _0x1e5182(0x700) + 'Qz3nvqRi1w' + 'gufKKgiTGw' + 't6+rj7GDLz' + 'cWIwMknRyo' + '8qjdEjmHHk' + 'jPLnlJ+13n' + 'z1wBlr3wkp' + _0x1e5182(_0x538d4a._0x5f3f19) + _0x1e5182(0x25d) + _0x1e5182(_0x538d4a._0x569f6f) + 'SS+t113LKJ' + _0x1e5182(_0x538d4a._0x4b9b67) + 'Kz6bM4MQeT' + 'RlhVCKWZ7j' + _0x1e5182(_0x538d4a._0x5cfc0d) + 'JaRwdrAORt' + 't14Gf6b3SM' + _0x1e5182(0xab7) + 'qzFgccg0AG' + _0x1e5182(0xa10) + 'nv3n3u/Zfx' + 'QUCooRF3H1') + ('B+Mgjod0cK' + 'ZwvrsXBTlx' + '58UU5O7unz' + 'X5iBlBzBHr' + 'q+UiUWcUlE' + 'WTAwSpJNe2' + _0x1e5182(0x685) + _0x1e5182(_0x538d4a._0x36d164) + 'hnFSicTazH' + _0x1e5182(_0x538d4a._0x252879) + '4eHM6DxloT' + 'GG2PydSxX2' + 'jDuRnsX5TM' + 'ilo20x76Zg' + 'jabpq284VB' + _0x1e5182(0x880) + 'zHwoXhhwo/' + 'L/4XjAwMgG' + 'RKNoCi2VDF' + _0x1e5182(_0x538d4a._0x4c8bac) + 'x5VfiXw7dA' + '/ecfwKLBmd' + _0x1e5182(0x471) + '0QK8uWj1hq' + 'cn/LIIEffj' + 'w9IzPk4S00' + '7sQUg56Hs6' + 'FWDaQ6th4r' + _0x1e5182(0xbaf) + _0x1e5182(0x6fc) + _0x1e5182(0x925) + 'wqfom0XACs' + 'Ngp/Hexy9t' + 'fGv1PSO++s' + _0x1e5182(0x79b) + 'g/VkeFmU6t' + 'quCdkfASZL' + 'V1wFnXBt19' + 'Rtn8CASfTf' + 'xPnfxHoKvH' + '3rzeNI+F/H' + _0x1e5182(0x61b) + _0x1e5182(0x86b) + _0x1e5182(_0x538d4a._0xcda905) + 'bEOjnk/z7I' + 'xPr/AL1nlZ' + 'Oecg7oAAAA' + 'AElFTkSuQm' + 'CC\x22\x20alt=\x22L' + _0x1e5182(_0x538d4a._0x440786) + '=\x22width:\x205' + '0px;\x20heigh' + _0x1e5182(0x5b5) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x594f8c) + 'div>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<h1' + '\x20style=\x22ma' + 'rgin:\x200;\x22>' + 'Hendrix\x20Ho' + 'tbar\x20Build' + 'er</h1>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5d6822) + 'credit\x22>©\x20' + _0x1e5182(0x629) + 'ng\x20Hendrix' + '\x20-\x20<a\x20href' + _0x1e5182(0x575) + _0x1e5182(_0x538d4a._0x3e2be8) + 'x.itch.io\x22' + '>sanghendr' + _0x1e5182(_0x538d4a._0x1f61cb) + '</a></p>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20</d' + _0x1e5182(0x263) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8f2) + _0x1e5182(0x2e5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x938) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22con' + _0x1e5182(0x730) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x5f637e) + _0x1e5182(_0x538d4a._0x314b7b) + _0x1e5182(0x922) + 'le=\x22displa' + _0x1e5182(0x44b) + 'lign-items' + ':\x20center;\x20') + (_0x1e5182(0xa8a) + 'ntent:\x20spa' + 'ce-between' + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20style=\x22' + 'display:\x20f' + 'lex;\x20gap:\x20' + '5px;\x20align' + '-items:\x20ce' + 'nter;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<but' + _0x1e5182(0x4ac) + '\x22save-butt' + 'on\x22\x20onclic' + 'k=\x22window.' + 'open(\x27http' + 's://sanghe' + _0x1e5182(0xb58) + '.io/hotbar' + _0x1e5182(_0x538d4a._0x5c05f5) + _0x1e5182(_0x538d4a._0xf3618b) + _0x1e5182(_0x538d4a._0x25ecfe) + _0x1e5182(0x766) + 'k\x27)\x22\x20title' + '=\x22Video\x20Tu' + 'torials\x22\x20s' + 'tyle=\x22back' + _0x1e5182(0x4bb) + _0x1e5182(0x6e0) + 'ding:\x206px\x20' + '10px;\x22>▶\x20T' + _0x1e5182(0x92a) + _0x1e5182(_0x538d4a._0x5543b8) + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20<but' + _0x1e5182(0x4ac) + '\x22save-butt' + 'on\x22\x20onclic' + _0x1e5182(0xa80) + 'open(\x27http' + 's://discor' + 'd.com/invi' + 'te/YKPscqH' + 'V8b\x27,\x20\x27_bl' + 'ank\x27)\x22\x20tit' + 'le=\x22Discor' + 'd\x22\x20style=\x22' + 'background' + ':\x20#5865F2;' + '\x20padding:\x20' + _0x1e5182(_0x538d4a._0x5ad052) + '>Discord\x20S' + _0x1e5182(0x35b) + 'tton>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x9489e4) + 'e=\x22text-al' + 'ign:\x20right' + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x31d19f) + 'd\x20drag\x20you' + 'r\x20slot\x20sho' + 'wn\x20in-game' + '\x20to\x20adjust' + '\x20position\x0a' + _0x1e5182(_0x538d4a._0x57e89e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</div>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'div\x20class=' + _0x1e5182(_0x538d4a._0x25d402) + 'style=\x22dis' + _0x1e5182(_0x538d4a._0x1dfe24) + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20<!' + '--\x20Hidden\x20' + 'for\x20now\x20-\x20' + _0x1e5182(_0x538d4a._0x50060e) + 'ity\x20kept\x20f' + _0x1e5182(_0x538d4a._0x17116c) + 'use\x20-->\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8a3)) + (_0x1e5182(_0x538d4a._0x318ee8) + _0x1e5182(0x31f) + 'onclick=\x22r' + 'esetPositi' + 'ons()\x22\x20tit' + 'le=\x22Reset\x20' + 'all\x20slots\x20' + 'to\x20default' + _0x1e5182(0x93b) + _0x1e5182(0x4fd) + _0x1e5182(_0x538d4a._0x3ca73d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20↺\x20Reset\x20P' + 'ositions\x0a\x20' + _0x1e5182(_0x538d4a._0x39d56e) + _0x1e5182(0x1dc) + '\x20\x20\x20</butto' + 'n>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20</div>\x0a' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x300cde) + 's=\x22main-co' + 'ntent\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x291) + _0x1e5182(0x2bb) + 'r\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52f77f) + '\x20\x20<div\x20cla' + _0x1e5182(_0x538d4a._0x5e239f) + 'n-header\x22\x20' + _0x1e5182(0x552) + 'play:\x20flex' + ';\x20align-it' + 'ems:\x20cente' + 'r;\x20justify' + '-content:\x20' + 'space-betw' + 'een;\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5af948) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'h3\x20style=\x22' + 'margin:\x200;' + '\x22>Hotbar\x20G' + 'rids</h3>\x0a' + _0x1e5182(_0x538d4a._0x471049) + _0x1e5182(_0x538d4a._0x47227f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<button\x20' + 'class=\x22add' + '-slot-btn\x22' + '\x20onclick=\x22' + 'createNewG' + 'rid()\x22\x20tit' + 'le=\x22Create' + '\x20a\x20new\x20gri' + 'd\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x4ff) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20</butt' + 'on>\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3615b8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x8cfa01) + '\x20\x20\x20\x20\x20\x20\x20<di' + _0x1e5182(_0x538d4a._0x267025) + 'sList\x22\x20cla' + _0x1e5182(_0x538d4a._0x593949) + 'able-list\x22' + '></div>\x0a\x20\x20' + _0x1e5182(_0x538d4a._0xdbc22a) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22sec' + 'tion-heade' + _0x1e5182(0x6cb) + 'display:\x20f' + 'lex;\x20align' + '-items:\x20ce' + 'nter;\x20just' + _0x1e5182(_0x538d4a._0x5daf8d) + _0x1e5182(_0x538d4a._0xc69a08) + 'etween;\x20ma' + 'rgin-top:\x20' + _0x1e5182(0x609) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x7a3) + '\x22margin:\x200' + ';\x22>Slots</' + 'h3>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<but' + 'ton\x20class=' + '\x22add-slot-' + 'btn\x22\x20oncli' + 'ck=\x22instan' + 'tCreateSlo' + 't()\x22\x20title' + '=\x22Create\x20a' + '\x20new\x20slot\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2993c8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20+\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20</button' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb3e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + _0x1e5182(0x1c3) + 'ist\x22\x20class' + '=\x22scrollab' + _0x1e5182(_0x538d4a._0x3f7aa9) + '/div>\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1ff225) + 'ss=\x22conten' + 't-panel\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8e7) + 'iv\x20id=\x22slo' + _0x1e5182(0x71f) + _0x1e5182(_0x538d4a._0x4ac7df) + 'play:\x20none' + _0x1e5182(_0x538d4a._0x327b61) + 'ottom:\x2020p' + 'x;\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x494c79) + _0x1e5182(0x6b3) + 'rgin-top:\x20' + _0x1e5182(0x18d) + 'bottom:\x2010' + 'px;\x22>Previ' + 'ew</h3>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x13888c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c87da) + 'reviewCont' + _0x1e5182(0x98e) + 'le=\x22\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20display:\x20' + 'flex;\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x28024d) + '\x20\x20align-it' + 'ems:\x20cente' + _0x1e5182(0x44c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x137b3d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20j' + _0x1e5182(_0x538d4a._0x3dc4c2) + 'tent:\x20cent' + 'er;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + _0x1e5182(_0x538d4a._0x5dfa3a) + '0,\x200,\x200.3)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1e6b6b) + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder:\x202px\x20' + 'solid\x20rgba') + ('(255,\x20215,' + '\x200,\x200.3);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + 'er-radius:' + '\x208px;\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x772ff2) + '\x2020px;\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4ac72d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20min-hei' + _0x1e5182(0x8f1) + _0x1e5182(_0x538d4a._0x469d87) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb39) + '=\x22previewS' + _0x1e5182(0x373) + '=\x22\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x14d79a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20positio' + 'n:\x20relativ' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1e6b6b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20display' + _0x1e5182(_0x538d4a._0x58b3ea) + 'lock;\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x210fb7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb29) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<img\x20' + 'id=\x22previe' + 'wBg\x22\x20style' + '=\x22display:' + '\x20none;\x22\x20/>' + _0x1e5182(_0x538d4a._0xfa6ae6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<div\x20id=\x22' + 'previewTex' + 't\x22\x20style=\x22' + _0x1e5182(_0x538d4a._0x2d2fca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20posit' + 'ion:\x20absol' + _0x1e5182(_0x538d4a._0x42bc74) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x69f88a) + _0x1e5182(_0x538d4a._0x288310) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52f77f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20left:\x205' + '0%;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x22972f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + 'ansform:\x20t' + _0x1e5182(0x593) + '50%,\x20-50%)' + _0x1e5182(0x4d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x282b4d) + _0x1e5182(_0x538d4a._0x52f77f) + '\x20\x20\x20\x20\x20\x20colo' + 'r:\x20white;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x44d37f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20font-s' + 'ize:\x2018px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20font-' + _0x1e5182(0x9d4) + 'ld;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x3da92e) + 'xt-shadow:' + _0x1e5182(0x9cb) + _0x1e5182(_0x538d4a._0x205900) + '0,0,0.8);\x0a' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4b37cb) + '\x20\x20\x20\x20white-' + 'space:\x20now' + 'rap;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x44d37f) + _0x1e5182(_0x538d4a._0x22cedb) + _0x1e5182(_0x538d4a._0x91ff89) + _0x1e5182(_0x538d4a._0x5711b7) + _0x1e5182(_0x538d4a._0x4f1136) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1fc6bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2ae06f) + _0x1e5182(0x6ce) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x582769) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'h3\x20style=\x22' + 'margin-top' + _0x1e5182(0x506) + '\x20Propertie' + _0x1e5182(_0x538d4a._0x31181b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20<div\x20' + _0x1e5182(0xbac) + 'tiesPanel\x22' + _0x1e5182(0xabf) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x46ad59) + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22empt' + _0x1e5182(0x71c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20Sele' + 'ct\x20a\x20slot\x20' + 'to\x20view\x20it' + _0x1e5182(_0x538d4a._0x3a1464) + _0x1e5182(0x927) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8f2) + 'div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x938) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<scri' + 'pt>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x6e5) + 'rrentGrid\x20' + '=\x20null;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20le' + _0x1e5182(0x44e) + 'lot\x20=\x20null' + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x4e1) + 'n\x20selectGr' + 'id(index)\x20' + _0x1e5182(_0x538d4a._0x1f5405) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20curr' + 'entGrid\x20=\x20' + 'index;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4cf215)) + ('\x20currentSl' + _0x1e5182(_0x538d4a._0x134419) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1212fd) + 'document.q' + _0x1e5182(_0x538d4a._0x3dc484) + 'orAll(\x27#gr' + 'idsList\x20.l' + 'ist-item\x27)' + '.forEach(i' + 'tem\x20=>\x20{\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ite' + _0x1e5182(_0x538d4a._0x37266c) + _0x1e5182(_0x538d4a._0x1a50ed) + _0x1e5182(0xa3f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20});\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20el' + 'ement\x20=\x20do' + 'cument.get' + 'ElementByI' + 'd(\x27grid_\x27\x20' + '+\x20index);\x0a' + _0x1e5182(_0x538d4a._0x14d79a) + _0x1e5182(_0x538d4a._0x5512da) + '\x20\x20\x20\x20if\x20(el' + 'ement)\x20ele' + 'ment.class' + 'List.add(\x27' + _0x1e5182(0xa3f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(w' + 'indow.open' + 'er\x20&&\x20wind' + 'ow.opener.' + _0x1e5182(0x6e1) + _0x1e5182(0x979) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20windo' + 'w.opener.l' + 'oadGridSlo' + 'ts(index);' + _0x1e5182(_0x538d4a._0xfa6ae6) + _0x1e5182(_0x538d4a._0x18a38f) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20if\x20(wind' + 'ow.opener\x20' + '&&\x20window.' + 'opener.hig' + 'hlightGrid' + _0x1e5182(_0x538d4a._0x104293) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3b8d29) + 'pener.high' + 'lightGrid(' + 'index);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x5fe) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + 'opener\x20&&\x20' + 'window.ope' + _0x1e5182(0x6b4) + 'ctAllSlots' + _0x1e5182(_0x538d4a._0x104293) + _0x1e5182(_0x538d4a._0x401be9) + _0x1e5182(0x1dc) + '\x20\x20window.o' + 'pener.dese' + 'lectAllSlo' + 'ts();\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20sho' + _0x1e5182(_0x538d4a._0x2e7a95) + _0x1e5182(0xa55) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20function\x20' + _0x1e5182(0x42a) + _0x1e5182(_0x538d4a._0x25b6a8)) + ('\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20cur' + 'rentSlot\x20=' + '\x20slotName;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x153109) + 'uerySelect' + 'orAll(\x27#sl' + 'otsList\x20.l' + 'ist-item\x27)' + '.forEach(i' + _0x1e5182(0x3b4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x297508) + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.classLis' + 't.remove(\x27' + 'active\x27);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4de54f) + '\x20\x20\x20\x20});\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x2f5) + _0x1e5182(0x410) + _0x1e5182(_0x538d4a._0xe5e5a1) + 'ElementByI' + 'd(\x27slot_\x27\x20' + '+\x20slotName' + '.replace(/' + '[^a-zA-Z0-' + '9]/g,\x20\x27_\x27)' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbe5) + '(element)\x20' + _0x1e5182(_0x538d4a._0x366eaa) + 'assList.ad' + 'd(\x27active\x27' + ');\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c4367) + '\x20(window.o' + _0x1e5182(_0x538d4a._0x61876) + 'indow.open' + _0x1e5182(_0x538d4a._0x31aa66) + _0x1e5182(_0x538d4a._0x3a2b7a) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x337db5) + _0x1e5182(0x1dc) + '\x20window.op' + _0x1e5182(_0x538d4a._0x40f315) + 'tSlotInGam' + 'e(slotName' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20showSl' + 'otProperti' + _0x1e5182(0x257) + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4a5902) + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fun' + 'ction\x20show' + 'GridInfo(i' + _0x1e5182(0x21c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3e7176) + _0x1e5182(0xbc6) + 'nel\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27propertie' + 'sPanel\x27);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x54847c) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + _0x1e5182(0x223) + 'opener\x20&&\x20' + 'window.ope' + 'ner.getGri' + 'dInfo)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x5d1d99) + 'st\x20info\x20=\x20' + _0x1e5182(_0x538d4a._0xc605e4) + 'ner.getGri' + 'dInfo(inde') + ('x);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(info' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20pane' + 'l.innerHTM' + 'L\x20=\x20`\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xbc1012) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1fc6bc) + '\x20\x20<div\x20cla' + _0x1e5182(0x401) + 'group\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x34a6db) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + 'field\x20full' + '-width\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xce8373) + _0x1e5182(_0x538d4a._0x2681ae) + 'style=\x22dis' + 'play:\x20flex' + ';\x20align-it' + 'ems:\x20cente' + 'r;\x20cursor:' + '\x20pointer;\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c1e80) + '<input\x20typ' + 'e=\x22checkbo' + 'x\x22\x20id=\x22gri' + 'dGamepadCo' + 'ntrollable' + '\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20${' + 'info.gamep' + _0x1e5182(_0x538d4a._0x4b6c74) + 'able\x20?\x20\x27ch' + 'ecked\x27\x20:\x20\x27' + '\x27}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20on' + 'change=\x22up' + 'dateGridGa' + _0x1e5182(0x497) + 'ollable(th' + _0x1e5182(0xad2) + _0x1e5182(0x88d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20st' + 'yle=\x22margi' + 'n-right:\x208' + _0x1e5182(0x90f) + _0x1e5182(0x399) + 'ght:\x2018px;' + '\x20cursor:\x20p' + 'ointer;\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<s' + 'pan>Gamepa' + 'd\x20Controll' + _0x1e5182(_0x538d4a._0x43b301) + _0x1e5182(_0x538d4a._0x3a1b26) + _0x1e5182(_0x538d4a._0x337db5) + _0x1e5182(_0x538d4a._0x529307) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20</la' + _0x1e5182(_0x538d4a._0xddb312) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + _0x1e5182(0xabf) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x34a6db) + '\x20\x20\x20\x20\x20\x20\x20\x20</') + ('div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<hr\x20style' + '=\x22border:\x20' + 'none;\x20bord' + _0x1e5182(_0x538d4a._0x262ce4) + 'x\x20solid\x20rg' + 'ba(255,255' + ',255,0.1);' + _0x1e5182(0x3f2) + _0x1e5182(_0x538d4a._0x3520ed) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x578) + 'tyle=\x22marg' + 'in:\x200\x200\x2010' + 'px\x200;\x22>Gri' + 'd\x20Backgrou' + 'nd</h3>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22fiel' + 'd-group\x22>\x0a' + _0x1e5182(_0x538d4a._0x210fb7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<div\x20class' + _0x1e5182(0x8e3) + _0x1e5182(_0x538d4a._0x3210d6) + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + _0x1e5182(0x3e3) + _0x1e5182(_0x538d4a._0x13cead) + _0x1e5182(0x286) + _0x1e5182(_0x538d4a._0x4e5be8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x9489e4) + 'e=\x22display' + ':\x20flex;\x20ga' + 'p:\x205px;\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x1d17a3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x9a3) + 'nput\x20type=' + '\x22text\x22\x20id=' + '\x22gridBackg' + 'roundImage' + _0x1e5182(0x679) + '{info.back' + 'groundImag' + 'e\x20||\x20\x27\x27}\x22\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2993c8) + _0x1e5182(_0x538d4a._0x11632a) + _0x1e5182(_0x538d4a._0x1e6b6b) + _0x1e5182(_0x538d4a._0x471049) + '\x20\x20\x20\x20\x20\x20plac' + 'eholder=\x22I' + _0x1e5182(_0x538d4a._0x4f4a9f) + 'ame\x20(witho' + _0x1e5182(_0x538d4a._0x11075a) + 'on)\x22\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1212fd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'onchange=\x22' + _0x1e5182(0x7a8) + _0x1e5182(_0x538d4a._0x5805e9) + _0x1e5182(_0x538d4a._0x19e09c) + '.value)\x22\x0a\x20' + _0x1e5182(_0x538d4a._0x10daf2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x8cfa01) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20style=' + _0x1e5182(0x54d) + _0x1e5182(_0x538d4a._0x47a120) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xb3fbb0) + '<button\x20cl' + _0x1e5182(_0x538d4a._0x47782b) + _0x1e5182(_0x538d4a._0x423b8b)) + ('click=\x22sel' + 'ectGridBac' + 'kgroundIma' + _0x1e5182(_0x538d4a._0x20c38f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20style=\x22' + _0x1e5182(0xae2) + _0x1e5182(0x69c) + 'in-width:\x20' + 'auto;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x254b42) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x450e4d) + _0x1e5182(_0x538d4a._0x12cee3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5959c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</b' + 'utton>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<butt' + _0x1e5182(0x3b6) + 'toolbar-bt' + _0x1e5182(_0x538d4a._0x32ff05) + _0x1e5182(_0x538d4a._0x13526f) + _0x1e5182(0x3af) + 'ndImage()\x22' + _0x1e5182(_0x538d4a._0x4b3d0a) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20st' + 'yle=\x22paddi' + 'ng:\x205px\x2015' + 'px;\x20min-wi' + _0x1e5182(_0x538d4a._0x35e98f) + '\x20backgroun' + 'd:\x20#d32f2f' + ';\x22\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x169632) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + _0x1e5182(0x8ab) + _0x1e5182(0x884) + 'und\x20image\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x3615b8) + _0x1e5182(_0x538d4a._0xb3fbb0) + '\x20\x20\x20\x20✕\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</butt' + 'on>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c1e80) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8f2) + 'div>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x33cab0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x1e5182(_0x538d4a._0xe60406) + '\x22margin-to' + _0x1e5182(0x66a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x450e4d) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<b' + _0x1e5182(0x8cc) + _0x1e5182(0x5a0) + _0x1e5182(0x93e) + 'ick=\x22reset' + 'GridBackgr' + _0x1e5182(_0x538d4a._0x11ff2e) + 'on()\x22\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3615b8) + '\x20\x20\x20style=\x22') + ('width:\x20100' + _0x1e5182(0xb5c) + ':\x208px;\x22\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x268b06) + _0x1e5182(_0x538d4a._0x1105df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20title=' + '\x22Center\x20gr' + _0x1e5182(_0x538d4a._0x49f739) + 's\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1e2cd0) + _0x1e5182(_0x538d4a._0x465ad4) + 'ition\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</butt' + 'on>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1105df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5959c7) + _0x1e5182(_0x538d4a._0x282b4d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'input\x20type' + '=\x22file\x22\x20id' + _0x1e5182(0xafd) + 'ageFileInp' + 'ut\x22\x20accept' + _0x1e5182(0x4f7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x337db5) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'style=\x22dis' + _0x1e5182(_0x538d4a._0x341500) + _0x1e5182(0xa99) + 'e=\x22handleG' + _0x1e5182(0x603) + 'undImageFi' + 'le(this)\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + _0x1e5182(_0x538d4a._0x4ba2bd) + 'le=\x22flex:\x20' + _0x1e5182(0xb46) + _0x1e5182(_0x538d4a._0x2c0db5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4e0366) + 'label>Posi' + 'tion\x20X</la' + 'bel>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'input\x20type' + '=\x22number\x22\x20' + 'id=\x22gridPo' + 'sX\x22\x20value=' + _0x1e5182(0x8ef) + 'sitionX\x20||' + '\x200}\x22\x20\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20onc' + 'hange=\x22upd' + _0x1e5182(0x242) + 'ition(\x27x\x27,' + '\x20this.valu' + 'e)\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x1e5182(0x1dc) + '\x20\x20<div\x20cla' + _0x1e5182(_0x538d4a._0x24907b) + '\x20style=\x22fl' + 'ex:\x201;\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1e2fb8) + 'Position\x20Y' + '</label>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<input\x20' + 'type=\x22numb' + 'er\x22\x20id=\x22gr' + 'idPosY\x22\x20va' + _0x1e5182(_0x538d4a._0x57a868) + 'o.position' + _0x1e5182(0x1c6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x254b42) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20onchange=' + '\x22updateGri' + _0x1e5182(0x8d3) + '\x27y\x27,\x20this.' + 'value)\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4fe5b8) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + '/div>\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x36bfe2) + '\x20\x20</div>\x0a\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4151d6) + 'tyle=\x22bord' + 'er:\x20none;\x20' + _0x1e5182(0x5de) + ':\x201px\x20soli' + 'd\x20rgba(255' + ',255,255,0' + _0x1e5182(0x719) + _0x1e5182(_0x538d4a._0x386867) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x28b) + _0x1e5182(0x367) + 'margin:\x200\x20' + _0x1e5182(_0x538d4a._0x2757c5) + '>Grid\x20Arra' + 'ngement</h' + '3>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x247867) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'div\x20class=' + '\x22field-gro' + 'up\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbd3) + 'class=\x22fie' + 'ld\x22>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x1e5182(_0x538d4a._0x480e60) + '</label>\x0a\x20' + _0x1e5182(_0x538d4a._0x46ad59) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa64) + _0x1e5182(0x82b) + _0x1e5182(0xa5e) + 'idRows\x22\x20va' + _0x1e5182(_0x538d4a._0x57a868) + _0x1e5182(0xa4e) + _0x1e5182(0x292) + _0x1e5182(_0x538d4a._0x10057a) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x20' + _0x1e5182(_0x538d4a._0x1212fd)) + (_0x1e5182(_0x538d4a._0x5be4dd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x28b) + _0x1e5182(_0x538d4a._0x314b7b) + '\x22field\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x143732) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0xbb0) + 'Columns</l' + 'abel>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x10daf2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<input\x20typ' + 'e=\x22number\x22' + '\x20id=\x22gridC' + 'olumns\x22\x20va' + 'lue=\x22${inf' + _0x1e5182(0xa18) + '||\x205}\x22\x20min' + _0x1e5182(0x28e) + '20\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + _0x1e5182(0xabf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1d1258) + _0x1e5182(_0x538d4a._0x450e4d) + _0x1e5182(_0x538d4a._0x1ff225) + 'ss=\x22field\x20' + _0x1e5182(0xb37) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa2b) + 'bel>Paddin' + _0x1e5182(_0x538d4a._0x3c4de9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x490c1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<input' + '\x20type=\x22num' + 'ber\x22\x20id=\x22g' + 'ridPadding' + '\x22\x20value=\x22$' + _0x1e5182(_0x538d4a._0x4144ae) + 'ing\x20||\x2010}' + _0x1e5182(_0x538d4a._0x5d6ccc) + 'max=\x22100\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x8e7) + _0x1e5182(0xb2f) + _0x1e5182(_0x538d4a._0x2c3892) + _0x1e5182(_0x538d4a._0x202338) + _0x1e5182(_0x538d4a._0x401be9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5e4ec7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<button' + _0x1e5182(_0x538d4a._0x4db4d7) + 'olbar-btn\x22' + '\x20onclick=\x22' + 'arrangeGri' + 'dSlots()\x22\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4cdad3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20style=\x22' + 'width:\x20100' + '%;\x20padding' + _0x1e5182(_0x538d4a._0x56bc55) + _0x1e5182(_0x538d4a._0x46e306) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb88) + 'range\x20Slot' + _0x1e5182(0xad0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</butt' + _0x1e5182(0x243)) + (_0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</div>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5959c7) + '\x20\x20\x20\x20\x20\x20\x20</d' + _0x1e5182(0x263) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2ca393) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4b1604) + _0x1e5182(_0x538d4a._0x1810c8) + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + 'nction\x20upd' + 'atePreview' + '(slotName)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x716) + 'st\x20preview' + _0x1e5182(_0x538d4a._0x184f07) + _0x1e5182(_0x538d4a._0xe5e5a1) + _0x1e5182(_0x538d4a._0xf45df1) + _0x1e5182(0xb6d) + 'view\x27);\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20pr' + _0x1e5182(_0x538d4a._0x25736f) + 'document.g' + 'etElementB' + 'yId(\x27previ' + 'ewBg\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20pr' + 'eviewText\x20' + '=\x20document' + _0x1e5182(0x4f1) + _0x1e5182(_0x538d4a._0x3ab98a) + 'viewText\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20previewS' + 'lot\x20=\x20docu' + 'ment.getEl' + 'ementById(' + _0x1e5182(0x4d7) + 'ot\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1212fd) + _0x1e5182(0x1bc) + _0x1e5182(0x1dc) + _0x1e5182(0xa93) + _0x1e5182(_0x538d4a._0xc605e4) + 'ner)\x20retur' + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3c1faa) + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20const\x20fu' + 'llConfig\x20=' + '\x20window.op' + 'ener.getFu' + _0x1e5182(0xb97) + 'ig\x20?\x20windo' + 'w.opener.g' + 'etFullSlot' + 'Config(slo' + _0x1e5182(0x340) + 'ull;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x741eab) + _0x1e5182(_0x538d4a._0x274a90) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20previewPa' + 'nel.style.' + 'display\x20=\x20' + '\x27none\x27;\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x11aa91) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x270) + 'rn;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xaf036)) + ('\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4069ee) + _0x1e5182(_0x538d4a._0x128cf9) + 'reviewPane' + _0x1e5182(0x3cc) + 'splay\x20=\x20\x27b' + 'lock\x27;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3efa1c) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20offsetY\x20' + _0x1e5182(_0x538d4a._0x413f52) + '(fullConfi' + 'g.TextOffs' + _0x1e5182(0xbed) + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(fullCo' + 'nfig.Backg' + 'roundImage' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x82a) + 'g.src\x20=\x20\x27i' + 'mg/system/' + _0x1e5182(0x1a4) + _0x1e5182(_0x538d4a._0x19b9ca) + 'roundImage' + '\x20+\x20\x27.png\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x128cf9) + 'reviewBg.s' + 'tyle.displ' + _0x1e5182(0xa66) + 'k\x27;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20previewB' + 'g.onload\x20=' + '\x20function(' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2cf084) + '\x20\x20\x20\x20\x20\x20prev' + _0x1e5182(0x206) + _0x1e5182(0x2ab) + '=\x20this.wid' + 'th\x20+\x20\x27px\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20preview' + 'Slot.style' + _0x1e5182(_0x538d4a._0x4d389c) + _0x1e5182(0xbe6) + _0x1e5182(0x6f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20textY\x20=\x20t' + 'his.height' + '\x20+\x20offsetY' + ';\x20\x20//\x20Bott' + 'om\x20of\x20bg\x20+' + _0x1e5182(0x7d3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'previewTex' + 't.style.to' + 'p\x20=\x20textY\x20' + '+\x20\x27px\x27;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x54ec03) + _0x1e5182(0x806) + _0x1e5182(0x1b2) + 'ft\x20=\x20\x2750%\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20previe' + 'wText.styl' + 'e.transfor' + _0x1e5182(_0x538d4a._0x4e7b34) + 'late(-50%,') + ('\x20-50%)\x27;\x20\x20' + '//\x20-50%\x20Y\x20' + 'to\x20center\x20' + 'the\x20text\x20s' + 'prite\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x400a6a) + _0x1e5182(_0x538d4a._0x34fa83) + _0x1e5182(_0x538d4a._0x431f7f) + _0x1e5182(_0x538d4a._0x4ac72d) + _0x1e5182(_0x538d4a._0x5626eb) + '\x20}\x20else\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x362b8b) + 'eviewBg.st' + 'yle.displa' + _0x1e5182(0x9f1) + _0x1e5182(0x4d5) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'previewSlo' + _0x1e5182(0x898) + 'dth\x20=\x20\x2748p' + 'x\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x266d76) + '\x20\x20previewS' + 'lot.style.' + 'height\x20=\x20\x27' + '48px\x27;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'textY\x20=\x2024' + '\x20+\x20offsetY' + ';\x20\x20//\x20Cent' + 'er\x20of\x2048px' + _0x1e5182(0xb0b) + 'fset\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20preview' + 'Text.style' + _0x1e5182(0x4bc) + _0x1e5182(0x794) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + _0x1e5182(0x763) + '.style.lef' + 't\x20=\x20\x2750%\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'reviewText' + '.style.tra' + 'nsform\x20=\x20\x27' + 'translate(' + '-50%,\x20-50%' + ')\x27;\x20\x20//\x20-5' + '0%\x20Y\x20to\x20ce' + 'nter\x20the\x20t' + 'ext\x20sprite' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xb27a6) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20buttons\x20' + '=\x20fullConf' + _0x1e5182(0xa84) + 'split(\x27,\x27)' + '.map(b\x20=>\x20' + 'b.trim());' + _0x1e5182(_0x538d4a._0x128e74) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20previ' + 'ewText.tex' + 'tContent\x20=' + '\x20buttons[0' + _0x1e5182(_0x538d4a._0x4aab8c) + _0x1e5182(_0x538d4a._0x168882) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x1e5182(0x24c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + _0x1e5182(0x436) + _0x1e5182(_0x538d4a._0x4bbdce) + 'slotName)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x38ed72) + 't\x20panel\x20=\x20' + 'document.g') + ('etElementB' + 'yId(\x27prope' + _0x1e5182(0x8ad) + _0x1e5182(0xa9d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + _0x1e5182(_0x538d4a._0x1611c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x5ba) + 'dow.opener' + '\x20&&\x20window' + '.opener.ge' + _0x1e5182(0xb15) + 'rties)\x20{\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x716) + 'st\x20props\x20=' + _0x1e5182(0x35f) + 'ener.getSl' + _0x1e5182(0x29a) + 'es(slotNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x303353) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(prop' + _0x1e5182(_0x538d4a._0x5954bb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20fullCon' + 'fig\x20=\x20wind' + 'ow.opener.' + _0x1e5182(_0x538d4a._0x15ede3) + 'tConfig\x20?\x20' + 'window.ope' + 'ner.getFul' + 'lSlotConfi' + _0x1e5182(0x813) + ')\x20:\x20null;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20names\x20=\x20f' + 'ullConfig\x20' + '?\x20fullConf' + 'ig.Name.sp' + 'lit(\x27,\x27).m' + _0x1e5182(_0x538d4a._0x5e9924) + 'trim())\x20:\x20' + '[slotName,' + '\x20\x27\x27];\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20button' + 's\x20=\x20fullCo' + 'nfig\x20?\x20ful' + 'lConfig.Bu' + 'tton.split' + '(\x27,\x27).map(' + 'b\x20=>\x20b.tri' + _0x1e5182(0x2ca) + 'ops.button' + 'Text,\x20\x27\x27];' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x34fa83) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x170501) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xafa) + 'l.dataset.' + 'originalSl' + 'otName\x20=\x20s' + 'lotName;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20panel.dat' + _0x1e5182(0x70f) + 'ntSlotName' + '\x20=\x20slotNam' + _0x1e5182(_0x538d4a._0xc31daf) + _0x1e5182(_0x538d4a._0x462d33) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x49d6a4) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pa' + 'nel.innerH' + _0x1e5182(0x356) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x471049) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x57e89a)) + ('lass=\x22fiel' + 'd-group\x22>\x0a' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x4069ee) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x885) + '=\x22field\x20fu' + 'll-width\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5959c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + _0x1e5182(0x3f9) + 'e</label>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5626eb) + '\x20\x20\x20\x20<input' + _0x1e5182(0x6dd) + 't\x22\x20id=\x22slo' + _0x1e5182(0xaf3) + 'alue=\x22${na' + 'mes[0]\x20||\x20' + 'slotName}\x22' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20onchang' + _0x1e5182(0x79f) + 'lotPropert' + 'ySafe(\x27nam' + _0x1e5182(0x6d3) + '.value)\x22>\x0a' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb3e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x570) + 'v\x20class=\x22f' + 'ield\x20full-' + _0x1e5182(0x932) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20<label>T' + _0x1e5182(0xa47) + 'on\x20Slot\x20(K' + _0x1e5182(_0x538d4a._0xeedda5) + 'label>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<input\x20ty' + _0x1e5182(_0x538d4a._0x343c59) + 'id=\x22slotBu' + 'ttonKb\x22\x20va' + 'lue=\x22${but' + _0x1e5182(_0x538d4a._0x2ccb35) + '\x20\x27\x27}\x22\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb08) + 'change=\x22up' + 'dateSlotPr' + 'opertySafe' + _0x1e5182(_0x538d4a._0x183d14) + '\x27,\x20this.va' + 'lue)\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22fiel' + 'd\x20full-wid' + _0x1e5182(0xb3b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x594f8c) + _0x1e5182(_0x538d4a._0x1bc2c7) + '\x20Shown\x20on\x20' + 'Slot\x20(Game') + (_0x1e5182(_0x538d4a._0x227ca5) + _0x1e5182(_0x538d4a._0x2a53e9) + 'el>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<i' + 'nput\x20type=' + '\x22text\x22\x20id=' + '\x22slotButto' + 'nGp\x22\x20value' + '=\x22${button' + 's[1]\x20||\x20\x27\x27' + '}\x22\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20place' + 'holder=\x22Le' + 'ave\x20empty\x20' + _0x1e5182(_0x538d4a._0x3e02d7) + 'ng\x20gamepad' + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x39d56e) + _0x1e5182(_0x538d4a._0x3c0235) + 'e=\x22updateS' + 'lotPropert' + 'ySafe(\x27but' + 'tonGp\x27,\x20th' + 'is.value)\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x337db5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20</div>\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x1e5182(0x200) + _0x1e5182(0x88a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x528caa) + _0x1e5182(_0x538d4a._0x351e14) + _0x1e5182(0xbb0) + 'Position\x20X' + '</label>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x790858) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x81110a) + 'type=\x22numb' + 'er\x22\x20id=\x22po' + 'sX\x22\x20value=' + _0x1e5182(0x669) + 'und(props.' + _0x1e5182(_0x538d4a._0x1560d8) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20onchange' + '=\x22updateSl' + 'otPosition' + '(\x27x\x27,\x20pars' + _0x1e5182(_0x538d4a._0x709cb2) + 'value))\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2b4799) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<label>Po' + 'sition\x20Y</' + 'label>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1c8b38) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20<input\x20ty' + _0x1e5182(0x63d) + '\x22\x20id=\x22posY' + _0x1e5182(0x679)) + ('{Math.roun' + 'd(props.y\x20' + '||\x200)}\x22\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x394691) + _0x1e5182(_0x538d4a._0x18272e) + 'Position(\x27' + 'y\x27,\x20parseI' + 'nt(this.va' + _0x1e5182(_0x538d4a._0xad1f65) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x19c7a2) + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0xbd3) + 'class=\x22fie' + 'ld\x20full-wi' + _0x1e5182(0x9af) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1c8b38) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<label>Bac' + 'kground\x20Im' + 'age</label' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<div' + _0x1e5182(_0x538d4a._0x2c986b) + 'splay:\x20fle' + 'x;\x20gap:\x205p' + 'x;\x22>\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<input\x20' + _0x1e5182(_0x538d4a._0x3c495e) + '\x22\x20id=\x22slot' + 'BgImage\x22\x20v' + 'alue=\x22${fu' + 'llConfig\x20?' + '\x20fullConfi' + 'g.Backgrou' + _0x1e5182(_0x538d4a._0x5674ad) + _0x1e5182(0x4ae) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x22cedb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20placehold' + _0x1e5182(0x645) + _0x1e5182(_0x538d4a._0xa14a7a) + _0x1e5182(_0x538d4a._0x5eed07) + 'tension)\x22\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x266d76) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20oncha' + 'nge=\x22updat' + 'eSlotPrope' + 'rtySafe(\x27b' + 'ackgroundI' + 'mage\x27,\x20thi' + 's.value)\x22\x0a' + _0x1e5182(_0x538d4a._0x2c69eb) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x54ec03) + '\x20\x20\x20\x20\x20style' + '=\x22flex:\x201;' + _0x1e5182(_0x538d4a._0x483bf1) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<button\x20c' + 'lass=\x22tool' + 'bar-btn\x22\x20o' + 'nclick=\x22se' + 'lectBackgr' + _0x1e5182(_0x538d4a._0x2affb7) + ')\x22\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'style=\x22pad' + 'ding:\x205px\x20' + '15px;\x20min-' + 'width:\x20aut' + _0x1e5182(0x2b5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4448cf) + 'rowse\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x11632a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5e4ec7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3f5432) + _0x1e5182(0x243) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5a44b2) + '\x20\x20<button\x20' + 'class=\x22too' + 'lbar-btn\x22\x20' + 'onclick=\x22r' + _0x1e5182(_0x538d4a._0x864099) + _0x1e5182(_0x538d4a._0x454562) + 'mage()\x22\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x13702f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20style' + '=\x22padding:' + '\x205px\x2015px;' + _0x1e5182(_0x538d4a._0x567f85) + ':\x20auto;\x20ba' + 'ckground:\x20' + '#d32f2f;\x22\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20titl' + _0x1e5182(_0x538d4a._0xb8b212) + _0x1e5182(0xa7a) + '\x20image\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x471049) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x447) + _0x1e5182(_0x538d4a._0x339352) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x49a) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5ddbf5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x3f04e6) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<inp' + 'ut\x20type=\x22f' + _0x1e5182(0x328) + _0x1e5182(_0x538d4a._0x2835ed) + 'Input\x22\x20acc' + 'ept=\x22.png\x22' + _0x1e5182(0x614) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20style=\x22' + 'display:\x20n' + 'one;\x22\x20onch' + 'ange=\x22hand' + 'leBackgrou' + 'ndImageFil' + _0x1e5182(_0x538d4a._0x79ef57) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x391cf7) + _0x1e5182(_0x538d4a._0x3c1faa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x10f8a3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<label>Bu' + 'tton\x20Text\x20' + 'Offset\x20Y</' + 'label>\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xad4) + _0x1e5182(0x63d) + '\x22\x20id=\x22slot' + 'TextOffset' + _0x1e5182(0x679) + '{fullConfi' + 'g\x20?\x20fullCo' + 'nfig.TextO' + 'ffsetY\x20:\x200' + '}\x22\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x143732) + _0x1e5182(0x1dc) + _0x1e5182(0x385) + 'nge=\x22updat' + 'eSlotPrope' + _0x1e5182(_0x538d4a._0x58d0fc) + _0x1e5182(0x3b5) + '\x27,\x20this.va' + 'lue)\x22>\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1d1258) + _0x1e5182(_0x538d4a._0x125197) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + _0x1e5182(_0x538d4a._0x4e0ca7) + 'd\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20<l' + _0x1e5182(_0x538d4a._0x34b796) + 'al\x20Behavio' + _0x1e5182(_0x538d4a._0x3a87a9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<selec' + 't\x20id=\x22slot' + _0x1e5182(0x592) + 'avior\x22\x20\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x5b8b0f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x532621) + 'onchange=\x22' + 'updateSlot' + 'PropertySa' + 'fe(\x27specia' + 'lBehavior\x27' + ',\x20this.val' + _0x1e5182(_0x538d4a._0x148ff2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5626eb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x2c4) + 'n\x20value=\x22n' + 'one\x22\x20${(!f' + _0x1e5182(0x32b) + '||\x20fullCon' + _0x1e5182(0x5ab) + _0x1e5182(_0x538d4a._0x3ce0ac) + '===\x20\x27none\x27' + ')\x20?\x20\x27selec' + 'ted\x27\x20:\x20\x27\x27}' + '>None</opt' + _0x1e5182(_0x538d4a._0x321477) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20<option' + '\x20value=\x22di' + 'splay_weap' + 'on\x22\x20${(ful' + 'lConfig\x20&&' + '\x20fullConfi' + 'g.SpecialB' + _0x1e5182(_0x538d4a._0x498e13) + _0x1e5182(_0x538d4a._0x41a3e7)) + ('_weapon\x27)\x20' + '?\x20\x27selecte' + 'd\x27\x20:\x20\x27\x27}>D' + _0x1e5182(_0x538d4a._0x22892c) + _0x1e5182(_0x538d4a._0x1809c7) + _0x1e5182(0x8a6) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x26accd) + _0x1e5182(_0x538d4a._0x8bca1d) + _0x1e5182(_0x538d4a._0x5b40b0) + '\x20${(fullCo' + _0x1e5182(_0x538d4a._0x5dc82d) + 'llConfig.S' + 'pecialBeha' + 'vior\x20===\x20\x27' + 'display_sh' + 'ield\x27)\x20?\x20\x27' + 'selected\x27\x20' + _0x1e5182(0x986) + _0x1e5182(0xbb8) + _0x1e5182(0x9f3) + '/option>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x715) + 'tion\x20value' + _0x1e5182(_0x538d4a._0x552c0a) + 'y\x22\x20${(full' + 'Config\x20&&\x20' + 'fullConfig' + '.SpecialBe' + 'havior\x20===' + '\x20\x27item_onl' + 'y\x27)\x20?\x20\x27sel' + _0x1e5182(0xa6e) + '\x27}>Item\x20Sl' + 'ot\x20Only</o' + _0x1e5182(_0x538d4a._0x19c0d0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<opti' + 'on\x20value=\x22' + 'skill_only' + _0x1e5182(_0x538d4a._0x26fe8e) + _0x1e5182(0x3a9) + 'ullConfig.' + _0x1e5182(0x592) + 'avior\x20===\x20' + '\x27skill_onl' + 'y\x27)\x20?\x20\x27sel' + _0x1e5182(0xa6e) + _0x1e5182(_0x538d4a._0x5cbbea) + _0x1e5182(_0x538d4a._0x4621b8) + 'option>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5e7f87) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x351e14) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20`;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x8ba7c5) + _0x1e5182(0x95b) + _0x1e5182(_0x538d4a._0x58c10e) + _0x1e5182(_0x538d4a._0x55fd09) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xb27a6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa59) + _0x1e5182(_0x538d4a._0x3c1faa) + _0x1e5182(_0x538d4a._0x7dc8b7) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20func' + 'tion\x20updat') + (_0x1e5182(_0x538d4a._0x22b834) + 'rtySafe(pr' + 'operty,\x20va' + _0x1e5182(0x82e) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20pan' + 'el\x20=\x20docum' + _0x1e5182(0x2c6) + 'mentById(\x27' + 'properties' + _0x1e5182(0xb7e) + _0x1e5182(_0x538d4a._0x529307) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20c' + 'urrentName' + _0x1e5182(0xb11) + 'ataset.cur' + _0x1e5182(_0x538d4a._0x413e6e) + 'me;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x24b6fd) + '\x20\x20\x20if\x20(win' + _0x1e5182(_0x538d4a._0x2f6a1b) + '\x20&&\x20window' + '.opener.up' + 'dateSlotPr' + 'operty)\x20{\x0a' + _0x1e5182(_0x538d4a._0xb2645a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa29) + 'nst\x20result' + '\x20=\x20window.' + 'opener.upd' + 'ateSlotPro' + 'perty(curr' + 'entGrid,\x20c' + 'urrentName' + ',\x20property' + ',\x20value);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x661) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(property\x20' + _0x1e5182(_0x538d4a._0x2b391e) + _0x1e5182(_0x538d4a._0x3b7ecf) + 'lt\x20&&\x20resu' + 'lt.newName' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20pane' + 'l.dataset.' + 'currentSlo' + 'tName\x20=\x20re' + 'sult.newNa' + _0x1e5182(_0x538d4a._0x361976) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20curr' + 'entSlot\x20=\x20' + 'result.new' + 'Name;\x20//\x20U' + _0x1e5182(0xbbd) + 'ent\x20slot\x20r' + _0x1e5182(0x467) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x249dd8) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(wi' + 'ndow.opene' + _0x1e5182(_0x538d4a._0x5d3961) + 'w.opener.l' + 'oadGridSlo' + _0x1e5182(0x3e6) + _0x1e5182(_0x538d4a._0x3212ec) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20window.o' + _0x1e5182(_0x538d4a._0x53769b) + 'GridSlots(' + 'currentGri' + 'd);\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20updateP' + _0x1e5182(0x7ee) + _0x1e5182(_0x538d4a._0x3339cb) + _0x1e5182(_0x538d4a._0x4435b2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x526) + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20updateP' + _0x1e5182(_0x538d4a._0x53bf5b) + 'rentName);' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + _0x1e5182(_0x538d4a._0x46e306) + _0x1e5182(_0x538d4a._0x333d19) + 'function\x20u' + 'pdateSlotP' + 'osition(ax' + 'is,\x20value)' + _0x1e5182(0x638) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + _0x1e5182(0x768) + _0x1e5182(0x398) + 'ndow.opene' + 'r.updateSl' + 'otPosition' + '\x20&&\x20curren' + 'tSlot)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20win' + _0x1e5182(_0x538d4a._0x373d2b) + '.updateSlo' + 'tPosition(' + 'currentSlo' + 't,\x20axis,\x20v' + _0x1e5182(_0x538d4a._0x5acc59) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20func' + 'tion\x20insta' + _0x1e5182(0xa77) + _0x1e5182(_0x538d4a._0x45e2a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20if\x20(curre' + 'ntGrid\x20===' + '\x20null)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ale' + 'rt(\x27Please' + '\x20select\x20a\x20' + 'grid\x20first' + '!\x27);\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x339352) + _0x1e5182(_0x538d4a._0x3860da) + '\x20\x20\x20return;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20ex' + 'istingSlot' + 's\x20=\x20docume' + 'nt.querySe' + _0x1e5182(_0x538d4a._0x27a5b7) + '\x27#slotsLis' + 't\x20.list-it' + _0x1e5182(_0x538d4a._0x17b042) + _0x1e5182(_0x538d4a._0x11d458) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20slotNum' + 'ber\x20=\x20exis' + 'tingSlots\x20' + '+\x201;\x0a\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4e938d) + 'Config\x20=\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x5cd320) + _0x1e5182(0x903) + 'Slot\x20\x27\x20+\x20s') + ('lotNumber,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'utton:\x20\x27Ke' + _0x1e5182(0xaad) + 'umber,\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20x:\x2040' + '0,\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x39d56e) + _0x1e5182(_0x538d4a._0x3860da) + '\x20y:\x20300,\x0a\x20' + _0x1e5182(_0x538d4a._0x137b3d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20bac' + _0x1e5182(_0x538d4a._0x4325a3) + 'ge:\x20\x27\x27,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20text' + _0x1e5182(_0x538d4a._0x6b5b40) + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'specialBeh' + _0x1e5182(0x4ee) + 'ne\x27\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20};' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x1e5182(_0x538d4a._0xc605e4) + _0x1e5182(0x239) + 'dow.opener' + _0x1e5182(0x39c) + _0x1e5182(_0x538d4a._0x102ad1) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb5b) + _0x1e5182(_0x538d4a._0x4be0ac) + 'createNewS' + _0x1e5182(0x3e9) + 'tGrid,\x20slo' + 'tConfig);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'unction\x20se' + 'lectBackgr' + 'oundImage(' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xa29) + 'nst\x20fileIn' + _0x1e5182(_0x538d4a._0x1cabad) + 'ment.getEl' + 'ementById(' + '\x27bgImageFi' + 'leInput\x27);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(f' + 'ileInput)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x281a6a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'fileInput.' + 'click();\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x39c6cd) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x2e5aed) + 'nction\x20han' + 'dleBackgro' + 'undImageFi' + 'le(input)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20if\x20(' + '!input.fil' + 'es\x20||\x20!inp' + _0x1e5182(_0x538d4a._0x15b748) + '])\x20return;' + _0x1e5182(0x24c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20file\x20=\x20i' + 'nput.files' + '[0];\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x1e5182(_0x538d4a._0x27b3ea) + 'onst\x20reade' + _0x1e5182(0x2e9) + 'leReader()' + _0x1e5182(_0x538d4a._0x548726) + _0x1e5182(_0x538d4a._0x210fb7) + '\x20\x20\x20\x20\x20\x20\x20rea' + 'der.onload' + '\x20=\x20functio' + 'n(e)\x20{\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20const' + '\x20fileData\x20' + _0x1e5182(0x25a) + '.result;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20fileNam' + 'e\x20=\x20file.n' + _0x1e5182(_0x538d4a._0x2f210a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4b1d78) + _0x1e5182(_0x538d4a._0x46534e) + 'r\x20&&\x20windo' + 'w.opener.c' + _0x1e5182(_0x538d4a._0x7bb9a8) + 'undImage)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20window' + _0x1e5182(_0x538d4a._0x12b64d) + 'pyBackgrou' + 'ndImage(fi' + 'leData,\x20fi' + _0x1e5182(_0x538d4a._0x3f93d6) + _0x1e5182(_0x538d4a._0x25352e) + _0x1e5182(_0x538d4a._0x22ff77) + 'eNameWitho' + 'utExt)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20if\x20(s' + 'uccess)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20bgIm' + _0x1e5182(0x87b) + '\x20document.' + 'getElement' + 'ById(\x27slot' + 'BgImage\x27);' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(bgIma' + 'geInput)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20bgIma' + _0x1e5182(0x26b) + 'lue\x20=\x20imag' + 'eNameWitho' + 'utExt;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x27f8c6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20updateSlo' + 'tPropertyS' + 'afe(\x27backg' + 'roundImage' + '\x27,\x20imageNa' + 'meWithoutE' + 'xt);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3c1faa) + '\x20\x20\x20}\x20else\x20' + _0x1e5182(_0x538d4a._0x1b8371) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x16bcde) + 'ailed\x20to\x20c' + _0x1e5182(0x3e4) + _0x1e5182(_0x538d4a._0x3fdbfb)) + ('\x20file.\x27);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '});\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5e5bde) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20};' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20read' + _0x1e5182(0x435) + 'ataURL(fil' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20input.v' + 'alue\x20=\x20\x27\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x28df70) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x238) + 'on\x20arrange' + 'GridSlots(' + _0x1e5182(_0x538d4a._0x164432) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(currentG' + _0x1e5182(0x7c0) + _0x1e5182(0x826) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x413) + _0x1e5182(0x9fb) + _0x1e5182(0x975) + _0x1e5182(0x8d4) + _0x1e5182(0x4d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x25c486) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20rows\x20' + '=\x20parseInt' + '(document.' + _0x1e5182(0x400) + _0x1e5182(0xa69) + 'Rows\x27).val' + 'ue)\x20||\x202;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'columns\x20=\x20' + _0x1e5182(_0x538d4a._0x333200) + 'ocument.ge' + 'tElementBy' + _0x1e5182(_0x538d4a._0x10fbaf) + 'lumns\x27).va' + 'lue)\x20||\x205;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20padding\x20=' + '\x20parseInt(' + 'document.g' + 'etElementB' + _0x1e5182(_0x538d4a._0x4819c9) + 'adding\x27).v' + 'alue)\x20||\x201' + _0x1e5182(0x72a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + _0x1e5182(0x712) + _0x1e5182(_0x538d4a._0x5d0d1d) + _0x1e5182(0xb7d) + _0x1e5182(0x5fd) + _0x1e5182(_0x538d4a._0x4745e4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x35f) + 'ener.arran' + _0x1e5182(0x9ca) + _0x1e5182(_0x538d4a._0x365b89) + 'rid,\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x688)) + ('ows:\x20rows,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x4c7894) + ':\x20columns,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20padding' + ':\x20padding\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20})' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x52c441) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x4cc) + _0x1e5182(0x43c) + _0x1e5182(0x4a5) + 'Image()\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'fileInput\x20' + _0x1e5182(0x97e) + '.getElemen' + 'tById(\x27gri' + 'dBgImageFi' + 'leInput\x27);' + _0x1e5182(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(f' + 'ileInput)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x24b6fd) + _0x1e5182(_0x538d4a._0x3a9580) + _0x1e5182(0x9b8) + 'click();\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x436f8b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + 'nction\x20han' + 'dleGridBac' + 'kgroundIma' + _0x1e5182(0x2bc) + _0x1e5182(0x538) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(!input' + _0x1e5182(_0x538d4a._0x133963) + _0x1e5182(_0x538d4a._0x42d4a4) + _0x1e5182(_0x538d4a._0x403adb) + 'urn;\x0a\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbb3) + '\x20=\x20input.f' + _0x1e5182(0x514) + _0x1e5182(_0x538d4a._0x6d5b82) + _0x1e5182(0x1dc) + '\x20\x20\x20const\x20r' + 'eader\x20=\x20ne' + _0x1e5182(_0x538d4a._0x412234) + 'er();\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb00) + 'load\x20=\x20fun' + 'ction(e)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x18c) + 'onst\x20fileD' + 'ata\x20=\x20e.ta' + _0x1e5182(0x53a) + _0x1e5182(_0x538d4a._0x42722a) + _0x1e5182(_0x538d4a._0x402c1e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20fil' + _0x1e5182(0x4cf) + 'le.name;\x0a\x0a' + _0x1e5182(_0x538d4a._0x3d6613) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + 'pener\x20&&\x20w' + _0x1e5182(_0x538d4a._0x5d0d1d) + 'er.copyBac' + 'kgroundIma' + 'ge)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb0d) + _0x1e5182(_0x538d4a._0x1559e7) + 'r.copyBack' + 'groundImag' + 'e(fileData' + _0x1e5182(0x6da) + ',\x20function' + _0x1e5182(0xa44) + _0x1e5182(0x6ed) + _0x1e5182(0xa6b) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1212fd) + _0x1e5182(_0x538d4a._0x2f3881) + 'f\x20(success' + _0x1e5182(0x253) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1d1258) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + _0x1e5182(0x9ac) + 'ut\x20=\x20docum' + _0x1e5182(0x2c6) + 'mentById(\x27' + 'gridBackgr' + 'oundImage\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x282b4d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(bgI' + 'mageInput)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x563c87) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c1e80) + '\x20\x20\x20\x20\x20\x20\x20bgI' + 'mageInput.' + 'value\x20=\x20im' + 'ageNameWit' + 'houtExt;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20updateG' + 'ridBackgro' + _0x1e5182(0x1fc) + 'mageNameWi' + _0x1e5182(0x5ea) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x7c0ba2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x20else\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3d5fc7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20al' + 'ert(\x27Faile' + 'd\x20to\x20copy\x20' + _0x1e5182(0xa7a) + '\x20image\x20fil' + 'e.\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3d96fc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20});\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20reader.r' + 'eadAsDataU' + 'RL(file);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20input.' + 'value\x20=\x20\x27\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x490c1d) + _0x1e5182(0x2c2) + _0x1e5182(0x32c) + _0x1e5182(0x7c4) + 'oundImage(' + 'imageName)') + ('\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(currentGr' + 'id\x20===\x20nul' + 'l)\x20return;' + _0x1e5182(_0x538d4a._0x50f132) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20if\x20(' + 'window.ope' + 'ner\x20&&\x20win' + _0x1e5182(0xb68) + '.updateGri' + 'dBackgroun' + _0x1e5182(0x219) + _0x1e5182(_0x538d4a._0x19c7a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + 'ndow.opene' + 'r.updateGr' + _0x1e5182(0x3af) + 'ndImage(cu' + 'rrentGrid,' + '\x20imageName' + _0x1e5182(0x337) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + _0x1e5182(_0x538d4a._0x46c341) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x1e5182(_0x538d4a._0x50f132) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + _0x1e5182(0x574) + _0x1e5182(_0x538d4a._0x2e06fa) + 'dImage()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(c' + 'urrentGrid' + '\x20===\x20null)' + '\x20return;\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20const\x20' + 'bgImageInp' + _0x1e5182(0xb9b) + 'ent.getEle' + _0x1e5182(_0x538d4a._0x1e254c) + 'gridBackgr' + 'oundImage\x27' + _0x1e5182(_0x538d4a._0x2bf676) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(bgImageIn' + _0x1e5182(0x706) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x340124) + '\x20\x20\x20\x20\x20bgIma' + _0x1e5182(_0x538d4a._0x2e8206) + 'lue\x20=\x20\x27\x27;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3c1190) + '\x20\x20\x20\x20\x20\x20\x20\x20up' + 'dateGridBa' + 'ckgroundIm' + 'age(\x27\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + 'nction\x20upd' + 'ateGridPos' + 'ition(axis' + ',\x20value)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x17b147) + 'urrentGrid' + '\x20===\x20null)' + _0x1e5182(0x638) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20alert(\x27Pl' + 'ease\x20selec' + 't\x20a\x20grid\x20f' + 'irst!\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ret' + 'urn;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbd4) + 't\x20numValue' + _0x1e5182(_0x538d4a._0x30cd34)) + ('oat(value)' + '\x20||\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20if\x20(windo' + 'w.opener\x20&' + '&\x20window.o' + 'pener.upda' + 'teGridPosi' + _0x1e5182(0x99f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb5b) + _0x1e5182(_0x538d4a._0x4be0ac) + _0x1e5182(0x7a8) + 'Position(c' + 'urrentGrid' + ',\x20axis,\x20nu' + 'mValue);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2534e5) + _0x1e5182(_0x538d4a._0xa3495d) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + 'nction\x20res' + 'etGridBack' + 'groundPosi' + 'tion()\x20{\x0a\x20' + _0x1e5182(_0x538d4a._0x2993c8) + _0x1e5182(_0x538d4a._0x13702f) + '\x20\x20\x20if\x20(cur' + 'rentGrid\x20=' + '==\x20null)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x21179c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'lert(\x27Plea' + 'se\x20select\x20' + _0x1e5182(_0x538d4a._0x1519cc) + _0x1e5182(0x35d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20retur' + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4302eb) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(wi' + _0x1e5182(0x1d4) + 'r\x20&&\x20windo' + _0x1e5182(0x6fa) + _0x1e5182(_0x538d4a._0x408895) + 'ckgroundPo' + _0x1e5182(0x305) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb0d) + 'ndow.opene' + 'r.resetGri' + _0x1e5182(_0x538d4a._0x205c79) + 'dPosition(' + 'currentGri' + 'd);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20functio' + _0x1e5182(_0x538d4a._0x52378d) + _0x1e5182(0x1e5) + 'ontrollabl' + 'e(isContro' + 'llable)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(cu' + _0x1e5182(0x79c) + '===\x20null)\x20' + 'return;\x0a\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(win' + _0x1e5182(0xb68) + _0x1e5182(0x316) + '.opener.up' + 'dateGridGa' + 'mepadContr' + _0x1e5182(0x904) + _0x1e5182(_0x538d4a._0x3440f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + 'indow.open' + 'er.updateG' + _0x1e5182(0x5d4) + 'Controllab') + ('le(current' + _0x1e5182(0x1cd) + 'ntrollable' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4069ee) + _0x1e5182(0x972) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20function' + _0x1e5182(0x501) + 'tBackgroun' + 'dImage()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x273f71) + '\x20bgImageIn' + 'put\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27slotBgIma' + 'ge\x27);\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x388) + 'eInput)\x20{\x0a' + _0x1e5182(_0x538d4a._0x375bc4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bg' + 'ImageInput' + '.value\x20=\x20\x27' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20updateSlo' + _0x1e5182(0x9bb) + 'afe(\x27backg' + 'roundImage' + '\x27,\x20\x27\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20fun' + 'ction\x20dele' + 'teSlot(slo' + 'tName)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(cur' + 'rentGrid\x20=' + '==\x20null)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'lert(\x27No\x20g' + 'rid\x20select' + 'ed!\x27);\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5ccd54) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x185a0c) + _0x1e5182(0x598) + _0x1e5182(_0x538d4a._0x4fe5b8) + _0x1e5182(_0x538d4a._0xd1118a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1b1edc) + _0x1e5182(0x734) + _0x1e5182(_0x538d4a._0x46534e) + 'r\x20&&\x20windo' + 'w.opener.d' + 'eleteSlot)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2cf084) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20window.op' + 'ener.delet' + 'eSlot(curr' + 'entGrid,\x20s' + 'lotName);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'unction\x20cr' + _0x1e5182(0x63a) + _0x1e5182(_0x538d4a._0x3dc008) + _0x1e5182(_0x538d4a._0xa1034a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(window' + '.opener\x20&&' + '\x20window.op' + _0x1e5182(_0x538d4a._0x4aed27) + 'eNewGrid)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + 'window.ope' + 'ner.create' + 'NewGrid();' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x19603b) + _0x1e5182(_0x538d4a._0xb27a6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2fd452) + 'function\x20d' + 'eleteGrid(' + 'gridIndex)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(window.op' + _0x1e5182(_0x538d4a._0x27a94f) + 'ndow.opene' + 'r.deleteGr' + 'id)\x20{\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3b19a4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20window' + '.opener.de' + _0x1e5182(0x6b9) + 'ridIndex);' + _0x1e5182(_0x538d4a._0x14b4e6) + _0x1e5182(_0x538d4a._0x210fb7) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb4f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x46ad59) + '\x20function\x20' + 'resetPosit' + 'ions()\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20if\x20(con' + 'firm(\x27Rese' + _0x1e5182(_0x538d4a._0x590a8c) + '\x20positions' + '\x20to\x20defaul' + 't?\x20This\x20ca' + _0x1e5182(0x366) + 'done!\x27))\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + 'opener\x20&&\x20' + 'window.ope' + _0x1e5182(0x757) + 'llPosition' + 's)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20win' + _0x1e5182(_0x538d4a._0x4d80eb) + '.resetAllP' + 'ositions()' + _0x1e5182(0x4d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x520fea) + '\x27Positions' + '\x20reset!\x20Th' + 'e\x20game\x20wil' + 'l\x20reload.\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x5ac) + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2f8b11) + '\x20\x20function' + '\x20updateGri' + 'dButton(is' + 'Active)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20functio' + _0x1e5182(_0x538d4a._0x151331) + 'apButton(i' + 'sActive)\x20{' + _0x1e5182(_0x538d4a._0x4954a4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x39f081) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x304d77) + '.updateGri') + (_0x1e5182(_0x538d4a._0x193319) + 'unction(gr' + 'ids)\x20{\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2107aa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20lis' + 't\x20=\x20docume' + 'nt.getElem' + 'entById(\x27g' + 'ridsList\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + '!grids\x20||\x20' + 'grids.leng' + 'th\x20===\x200)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x33f) + 'HTML\x20=\x20\x27<d' + _0x1e5182(0xb2f) + _0x1e5182(0xbfa) + 'e\x22>No\x20grid' + 's\x20configur' + 'ed\x20in\x20plug' + _0x1e5182(_0x538d4a._0xc77ec6) + 'ers</div>\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'return;\x0a\x20\x20' + _0x1e5182(_0x538d4a._0x4f0eaa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20l' + 'ist.innerH' + _0x1e5182(0x59c) + _0x1e5182(_0x538d4a._0x1105df) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20grids.' + 'forEach((g' + 'rid,\x20index' + _0x1e5182(_0x538d4a._0x15c743) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x398d18) + '\x20\x20\x20\x20\x20const' + '\x20item\x20=\x20do' + 'cument.cre' + 'ateElement' + '(\x27div\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.classNam' + _0x1e5182(0xa8d) + _0x1e5182(_0x538d4a._0x4509be) + 'ndex\x20===\x20c' + 'urrentGrid' + _0x1e5182(0x6cc) + 'e\x27\x20:\x20\x27\x27);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5eb72f) + 'em.id\x20=\x20\x27g' + 'rid_\x27\x20+\x20in' + _0x1e5182(_0x538d4a._0xf59f33) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20item.on' + 'click\x20=\x20()' + '\x20=>\x20select' + 'Grid(index' + ');\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20na' + 'me\x20=\x20docum' + _0x1e5182(0x46b) + 'Element(\x27d' + 'iv\x27);\x0a\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20name.c' + _0x1e5182(_0x538d4a._0x1862c1) + '\x20\x27list-ite' + 'm-name\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20nam' + 'e.textCont' + 'ent\x20=\x20`Gri' + 'd\x20#${index' + '\x20+\x201}\x20(${g' + 'rid.slotCo' + 'unt}\x20slots' + ')`;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20name.sty' + _0x1e5182(_0x538d4a._0x468f44) + '\x271\x27;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'deleteBtn\x20' + '=\x20document' + '.createEle' + 'ment(\x27butt' + 'on\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20delete' + 'Btn.textCo' + _0x1e5182(0x644) + _0x1e5182(0x588) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x920) + _0x1e5182(0x770) + _0x1e5182(_0x538d4a._0x4cc266) + '-slot-btn\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4b37cb) + 'deleteBtn.' + _0x1e5182(_0x538d4a._0xb4ab72) + 'elete\x20this' + _0x1e5182(0x980) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x58758e) + '\x20\x20\x20\x20\x20\x20dele' + _0x1e5182(0x338) + 'ick\x20=\x20(e)\x20' + '=>\x20{\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x44d37f) + '\x20\x20\x20\x20\x20\x20\x20e.s' + 'topPropaga' + _0x1e5182(0xb32) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x5c3) + '(index);\x0a\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20};\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'tem.append' + 'Child(name' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x125197) + '\x20item.appe' + 'ndChild(de' + 'leteBtn);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20li' + 'st.appendC' + _0x1e5182(0x3e2) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20});\x0a' + _0x1e5182(_0x538d4a._0xb2645a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '};\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20window' + _0x1e5182(_0x538d4a._0x5ef19e) + 'tsList\x20=\x20f' + _0x1e5182(_0x538d4a._0x1db600) + 'ots)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20lis' + 't\x20=\x20docume' + 'nt.getElem' + 'entById(\x27s' + 'lotsList\x27)' + _0x1e5182(0x4d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + 'currentGri' + _0x1e5182(_0x538d4a._0x1c64e9) + _0x1e5182(_0x538d4a._0x38e19c) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20list.inn' + 'erHTML\x20=\x20\x27' + _0x1e5182(0x885) + '=\x22empty-st' + _0x1e5182(0x641) + 't\x20a\x20grid\x20f' + 'irst</div>' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x6f3) + _0x1e5182(_0x538d4a._0x480aa9) + _0x1e5182(0x1dc) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(!slots\x20' + '||\x20slots.l' + _0x1e5182(_0x538d4a._0x476b0d) + '0)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20list.in' + 'nerHTML\x20=\x20' + '\x27<div\x20clas' + 's=\x22empty-s' + _0x1e5182(0x4e8) + _0x1e5182(0x861) + 'is\x20grid</d' + 'iv>\x27;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20return' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0xacb) + _0x1e5182(_0x538d4a._0x116fca) + _0x1e5182(_0x538d4a._0x4a5902) + _0x1e5182(0x878) + 'nerHTML\x20=\x20' + '\x27\x27;\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x46ad59) + _0x1e5182(0xa56) + 'ots.forEac' + 'h(slot\x20=>\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20item' + '\x20=\x20documen' + _0x1e5182(0xbe7) + 'ement(\x27div' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20sa' + 'feId\x20=\x20slo' + 't.name.rep' + _0x1e5182(0x378) + 'zA-Z0-9]/g' + ',\x20\x27_\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20item' + '.className' + '\x20=\x20\x27list-i' + 'tem\x27\x20+\x20(sl' + _0x1e5182(0x350) + _0x1e5182(0x80a) + _0x1e5182(0x361) + _0x1e5182(_0x538d4a._0x2c3c61) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20item.id\x20=' + '\x20\x27slot_\x27\x20+' + _0x1e5182(0xb83) + _0x1e5182(_0x538d4a._0x54847c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.onclick\x20' + '=\x20()\x20=>\x20se' + 'lectSlot(s' + 'lot.name);' + _0x1e5182(0x24c) + _0x1e5182(_0x538d4a._0x5b8b0f) + _0x1e5182(0x1dc) + _0x1e5182(0x653) + _0x1e5182(_0x538d4a._0xfa0002) + 't.createEl' + _0x1e5182(_0x538d4a._0x56f91c) + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x988162) + _0x1e5182(_0x538d4a._0x492ea7) + _0x1e5182(_0x538d4a._0x313d02) + 'list-item-' + _0x1e5182(_0x538d4a._0x3abcc7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x77d) + _0x1e5182(_0x538d4a._0x1d4e52) + 't\x20=\x20slot.n' + 'ame;\x0a\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x2c77c3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20name.st' + _0x1e5182(_0x538d4a._0x4f86a1)) + (_0x1e5182(0xbcf) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20deleteBtn' + '\x20=\x20documen' + _0x1e5182(_0x538d4a._0x472b3f) + _0x1e5182(0x9a7) + 'ton\x27);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x210fb7) + _0x1e5182(0xa24) + 'eBtn.textC' + _0x1e5182(0x7b0) + _0x1e5182(0x312) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20deleteBt' + 'n.classNam' + 'e\x20=\x20\x27delet' + 'e-slot-btn' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1d3de8) + '.title\x20=\x20\x27' + 'Delete\x20thi' + 's\x20slot\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20del' + _0x1e5182(0x3a3) + 'lick\x20=\x20(e)' + '\x20=>\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x57fc24) + 'stopPropag' + _0x1e5182(0x7fa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x988) + 't(slot.nam' + _0x1e5182(0xb2d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x44116e) + '\x20\x20};\x0a\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xf38f30) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20item.a' + _0x1e5182(_0x538d4a._0x484f12) + '(name);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20item' + _0x1e5182(0xb93) + 'ld(deleteB' + 'tn);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3b19a4) + _0x1e5182(0x6ac) + _0x1e5182(0xb0c) + 'item);\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1fd390) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20});\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20};\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + _0x1e5182(_0x538d4a._0x17ebff) + 'teSlotPosi' + 'tionFields' + '\x20=\x20functio' + 'n(slotName' + ',\x20x,\x20y)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x11a484) + _0x1e5182(_0x538d4a._0xc5add1) + 'otName\x20===' + _0x1e5182(0x475) + 'ot)\x20{\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3212ec) + _0x1e5182(_0x538d4a._0x3ca73d) + '\x20\x20\x20\x20const\x20' + 'posXInput\x20' + '=\x20document' + '.getElemen' + 'tById(\x27pos' + 'X\x27);\x0a\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x57afd7) + _0x1e5182(0x498) + _0x1e5182(_0x538d4a._0x41e17c) + _0x1e5182(0x464) + _0x1e5182(0x400) + 'ById(\x27posY' + _0x1e5182(_0x538d4a._0xdc24c6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x1e5182(_0x538d4a._0x18a38f) + '\x20\x20if\x20(posX' + 'Input)\x20pos' + 'XInput.val' + _0x1e5182(_0x538d4a._0x251f64) + 'round(x);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(posYInpu' + 't)\x20posYInp' + 'ut.value\x20=' + _0x1e5182(_0x538d4a._0xea25af) + 'd(y);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x695ee7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb5b) + 'ow.selectS' + _0x1e5182(0x869) + 'e\x20=\x20functi' + 'on(slotNam' + 'e)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + _0x1e5182(0x223) + 'opener\x20&&\x20' + 'window.ope' + 'ner.findGr' + 'idForSlot)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x319bd8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20gri' + 'dIndex\x20=\x20w' + _0x1e5182(_0x538d4a._0x4216ff) + 'er.findGri' + 'dForSlot(s' + _0x1e5182(0x845) + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + _0x1e5182(_0x538d4a._0x43317e) + 'x\x20!==\x20null' + '\x20&&\x20gridIn' + 'dex\x20!==\x20cu' + 'rrentGrid)' + _0x1e5182(0x638) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x2dd50c) + '\x20\x20\x20\x20\x20selec' + 'tGrid(grid' + _0x1e5182(0xa82) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x661) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x2107aa) + _0x1e5182(0xbe2) + _0x1e5182(0x196) + 'tName;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20docu' + 'ment.query' + 'SelectorAl' + _0x1e5182(_0x538d4a._0x35d0ca) + 'ist\x20.list-' + 'item\x27).for' + 'Each(item\x20' + '=>\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20item.cl' + 'assList.re' + 'move(\x27acti' + 've\x27);\x0a\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0xbc1012) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '});\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20elemen' + 't\x20=\x20docume' + 'nt.getElem' + 'entById(\x27s' + 'lot_\x27\x20+\x20sl' + _0x1e5182(_0x538d4a._0x1cf7c7) + _0x1e5182(_0x538d4a._0x14c491) + 'zA-Z0-9]/g') + (_0x1e5182(_0x538d4a._0x3e405a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(ele' + 'ment)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x40c35b) + 'ent.classL' + _0x1e5182(_0x538d4a._0x10ab8b) + 'ctive\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ele' + 'ment.scrol' + 'lIntoView(' + '{\x20behavior' + ':\x20\x27smooth\x27' + ',\x20block:\x20\x27' + 'nearest\x27\x20}' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x1f6825) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb51) + 'otProperti' + 'es(slotNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x5509ba) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xb86) + 'cument.add' + 'EventListe' + 'ner(\x27DOMCo' + 'ntentLoade' + _0x1e5182(_0x538d4a._0xf1f047) + 'on()\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x464) + 'addEventLi' + 'stener(\x27wh' + 'eel\x27,\x20func' + _0x1e5182(_0x538d4a._0x44457b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(e.target' + '.type\x20===\x20' + _0x1e5182(_0x538d4a._0x12d804) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x143732) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x5ddf83) + 'entDefault' + '();\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x452249) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + _0x1e5182(0xa86) + _0x1e5182(0x2d0) + 't;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x1e5182(0x56c) + 'rseFloat(i' + 'nput.step)' + '\x20||\x201;\x0a\x20\x20\x20' + _0x1e5182(_0x538d4a._0x46ad59) + _0x1e5182(_0x538d4a._0x2c4af0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20curre' + _0x1e5182(_0x538d4a._0x36557e) + 'parseFloat' + _0x1e5182(_0x538d4a._0x21653e) + 'ue)\x20||\x200;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1f4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(e' + '.deltaY\x20<\x20' + '0)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20input.val' + 'ue\x20=\x20curre' + _0x1e5182(_0x538d4a._0xc8088c) + 'step;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20}\x20' + 'else\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + _0x1e5182(0x1dc) + '\x20\x20\x20input.v' + 'alue\x20=\x20cur' + _0x1e5182(0x4af) + _0x1e5182(0x357) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0xbe5) + '(input.min' + '\x20!==\x20\x27\x27\x20&&' + '\x20parseFloa' + 't(input.va' + 'lue)\x20<\x20par' + 'seFloat(in' + 'put.min))\x20' + _0x1e5182(0x781) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20in' + 'put.value\x20' + '=\x20input.mi' + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x88f) + _0x1e5182(0x5cf) + 'ax\x20!==\x20\x27\x27\x20' + '&&\x20parseFl' + 'oat(input.' + _0x1e5182(0xb4a) + 'arseFloat(' + 'input.max)' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'input.valu' + 'e\x20=\x20input.' + 'max;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x4302eb) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x432445) + _0x1e5182(0x1dc) + _0x1e5182(_0x538d4a._0x3efa1c) + _0x1e5182(_0x538d4a._0x47cac2) + 'dispatchEv' + 'ent(new\x20Ev' + 'ent(\x27chang' + 'e\x27,\x20{\x20bubb' + 'les:\x20true\x20' + '}));\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x3a498f) + ',\x20{\x20passiv' + 'e:\x20false\x20}' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x413a3a) + '\x20\x20\x20});\x0a\x20\x20\x20' + _0x1e5182(0x1dc) + '\x20\x20\x20</scrip' + _0x1e5182(_0x538d4a._0x436b20) + '\x20\x20\x20\x20\x20</bod' + 'y>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x1e5182(_0x538d4a._0x20b69b))), VisualEditorWindow['document']['close'](), window['saveHotbar' + _0x1e5182(_0x538d4a._0xf7f636) + 's'] = function (_0x1f32ed) { const _0x8e80d6 = _0x1e5182; if ('OMyrH' !== 'OMyrH') return; else { saveHotbarPositions(_0x1f32ed); if (VisualEditorWindow && !VisualEditorWindow['closed'] && _0x1f32ed) { if (_0x8e80d6(0x9df) !== _0x8e80d6(0xab2)) for (const _0x1c439d in _0x1f32ed) { if ('MrMVR' !== 'FaGwL') { const _0x4e2a8c = _0x1f32ed[_0x1c439d]; _0x4e2a8c && VisualEditorWindow['updateSlot' + 'PositionFi' + 'elds'] && VisualEditorWindow['updateSlot' + _0x8e80d6(0x3b9) + _0x8e80d6(_0x270b77._0x2f8557)](_0x1c439d, _0x4e2a8c['x'], _0x4e2a8c['y']); } else _0x1be60b[_0x8e80d6(0x5c8)]('Error\x20load' + 'ing\x20grid\x20s' + 'lots:', _0x1c4369); } else { if (_0x244df8['_config'] && _0x1cf47f['_config']['Background' + 'Image']) { const _0x4c69d3 = _0x21d9f2[_0x8e80d6(_0x270b77._0x413633)](_0x311d3c[_0x8e80d6(0x77a)][_0x8e80d6(_0x270b77._0x542b4b) + _0x8e80d6(_0x270b77._0x19ea15)]); _0x3cb7cd['_buttonSpr' + _0x8e80d6(_0x270b77._0x579b20)]['y'] = _0x4c69d3['height'] / (0x21a * -0x1 + -0xb * -0x3b + -0x6d); } else _0xc61de[_0x8e80d6(_0x270b77._0x23c0c7) + 'ite']['y'] = 0xba7 * 0x3 + -0x254b + 0x2 * 0x12b; _0x33ab2d['_buttonSpr' + 'ite']['y'] += _0x3d3482; } } } }, setTimeout(() => { const _0x147f4b = _0x1e5182; if (_0x147f4b(_0x3d85e3._0x557d33) === 'HgsKX') { _0x500553[_0x147f4b(_0x3d85e3._0x4be12b)] = _0x2208a4, _0x24d62f['x'] = _0x2ec867['x'], _0x311bf1['y'] = _0x17ec6d['y']; if (_0x358134['createBack' + 'ground']) _0x1694f4['createBack' + 'ground'](); if (_0x108f1f['positionBu' + 'ttonText']) _0x1b294f['positionBu' + 'ttonText'](); if (_0x48ff03[_0x147f4b(_0x3d85e3._0x4367c2) + 'tonText']) _0x55b8b3[_0x147f4b(_0x3d85e3._0x5e552d) + 'tonText'](); } else updateEditorLists(); }, 0x14e8 + 0xaa8 + -0x1f2c); const _0x69446d = setInterval(() => { const _0x57e146 = _0x1e5182; 'XVtHN' !== 'fhSuo' ? VisualEditorWindow && VisualEditorWindow[_0x57e146(0x71a)] && (clearInterval(_0x69446d), clearInterval(_0x4f6562), disableEditorMode()) : (_0x3331ff[_0x57e146(_0x4358b8._0x5d1f4c) + 'd'](_0x412776['_editorGlo' + 'w']), _0x26a57a[_0x57e146(_0x4358b8._0x17d52d) + 'w'] = null); }, -0x231 * -0x3 + 0x5 * 0x691 + -0x2574); let _0x3a81a8 = SceneManager['_scene']; const _0x4f6562 = setInterval(() => { const _0x179808 = { _0x47bed7: 0x9b4, _0x57a904: 0x86e, _0xe38834: 0x9b4, _0x48b866: 0x9f7, _0x36756a: 0x3bf, _0x9e8a3e: 0xbe3 }, _0x3e1ceb = _0x1e5182; if ('xxMgX' !== 'KENEL') { if (VisualEditorWindow && !VisualEditorWindow['closed']) { if (SceneManager['_scene'] !== _0x3a81a8) { _0x3a81a8 = SceneManager['_scene']; const _0x3ccc1e = (_0x27336b = 0x96b * 0x1 + 0x17b5 + -0xd4 * 0x28) => { const _0x3c69d3 = { _0x3948f2: 0x6b2, _0x31a7b5: 0x59b }, _0x165f0d = _0x53c4; if (_0x27336b > 0x1 * -0x3d6 + -0xd0e + 0x10f3) return; editorMode && SceneManager['_scene'] && SceneManager['_scene']['_skillUI'] ? (SceneManager[_0x165f0d(0x9b4)]['_skillUI']['_gridBackg' + _0x165f0d(0x57f)] && ('XcTCp' !== _0x165f0d(0x5ad) ? _0x2a25ed[_0x165f0d(_0x179808._0x47bed7)]['toggleDrag' + _0x165f0d(_0x179808._0x57a904)]() : SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds']['forEach'](_0x799ee7 => { const _0x377bf9 = _0x165f0d; _0x799ee7[_0x377bf9(0x620) + _0x377bf9(0x4a8)] && (_0x799ee7['visible'] = !![]); })), SceneManager[_0x165f0d(_0x179808._0xe38834)]['toggleDrag' + _0x165f0d(0x86e)] && !SceneManager['_scene']['_isDragMod' + 'e'] && SceneManager['_scene'][_0x165f0d(_0x179808._0x48b866) + 'Mode'](), window['saveHotbar' + 'UIPosition' + 's'] && (window[_0x165f0d(_0x179808._0x36756a) + _0x165f0d(_0x179808._0x9e8a3e) + 's'] = function (_0x168106) { const _0x180c26 = _0x165f0d; saveHotbarPositions(_0x168106); if (VisualEditorWindow && !VisualEditorWindow['closed'] && _0x168106) for (const _0x4ea55b in _0x168106) { if ('cMLRM' === 'cMLRM') { const _0x300ef5 = _0x168106[_0x4ea55b]; _0x300ef5 && VisualEditorWindow[_0x180c26(_0x3c69d3._0x3948f2) + 'PositionFi' + 'elds'] && VisualEditorWindow['updateSlot' + 'PositionFi' + _0x180c26(_0x3c69d3._0x31a7b5)](_0x4ea55b, _0x300ef5['x'], _0x300ef5['y']); } else _0x3f74ae[_0x180c26(0x302)] = _0x4b9f72 === _0x5e2cec; } })) : setTimeout(() => _0x3ccc1e(_0x27336b + (-0xcef * -0x2 + 0x1 * -0x52c + 0x14b1 * -0x1)), 0x2 * 0x419 + 0x1fc + -0x9ca); }; _0x3ccc1e(); } } } else { if (_0x1cab9e[_0x3e1ceb(0x3ad) + _0x3e1ceb(0x509)]) { const _0x14ebad = _0x25baae(_0x38d1a1[_0x3e1ceb(0x77a)]['TextOffset' + 'Y'] || -0x1f * -0xc2 + 0x1c5f + -0x33dd); _0x585919[_0x3e1ceb(_0x5e2cfc._0x3f69a1) + 'ite']['y'] = _0xfd8c2e['bitmap']['height'] / (-0x1c9f + -0x1741 + 0x33e2) + _0x14ebad; } } }, 0xaa7 + 0x16c4 + -0x5 * 0x64b); } } function enableEditorMode() { const _0xe3e9dd = { _0x5a911a: 0x227, _0x17e080: 0x57f }, _0x3f1548 = { _0x59b4cb: 0x2c7, _0x572efa: 0x5c8, _0x4c8581: 0x9b4, _0x19cbbe: 0x749, _0xf22644: 0x59b }, _0xf4f47a = { _0x4a6cdb: 0x4b3 }, _0x3e9134 = _0x53c4; editorMode = !![], ConfigManager[_0x3e9134(_0xe3e9dd._0x5a911a)] = !![]; SceneManager['_scene'] && SceneManager['_scene']['_skillUI'] && SceneManager['_scene']['_skillUI']['_gridBackg' + _0x3e9134(_0xe3e9dd._0x17e080)] && SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds']['forEach'](_0x599ed7 => { const _0x2c9961 = _0x3e9134; if (_0x2c9961(_0xf4f47a._0x4a6cdb) !== 'mEIXN') { _0x1e1946 && !_0xf7aa56['closed'] && _0x9480bd['updateSlot' + _0x2c9961(0x553)]([]); return; } else _0x599ed7['_isPlaceho' + 'lder'] && (_0x599ed7['visible'] = ![]); }); const _0x9fbfcc = (_0x190038 = 0x1051 * -0x2 + 0x19b6 + 0x1 * 0x6ec) => { const _0x2e3808 = { _0x50d447: 0x2ac, _0x3c2589: 0x302 }, _0x16d8bf = _0x3e9134; if ('QtwAg' === 'QtwAg') { if (_0x190038 > 0x1686 + 0x20f6 + -0x3772) { if (_0x16d8bf(_0x3f1548._0x59b4cb) === 'WsWJk') _0x2c4f7d['updateSlot' + 'sList']([]); else { console[_0x16d8bf(_0x3f1548._0x572efa)]('[Visual\x20Ed' + 'itor]\x20Fail' + 'ed\x20to\x20enab' + _0x16d8bf(0x8a8) + _0x16d8bf(0x281) + 'ultiple\x20at' + 'tempts'); return; } } if (SceneManager[_0x16d8bf(_0x3f1548._0x4c8581)] && SceneManager[_0x16d8bf(0x9b4)]['_skillUI'] && SceneManager['_scene']['toggleDrag' + 'Mode']) { if ('SFlcH' === 'SFlcH') !SceneManager[_0x16d8bf(0x9b4)]['_isDragMod' + 'e'] && SceneManager['_scene']['toggleDrag' + 'Mode'](), SceneManager[_0x16d8bf(0x9b4)]['_skillUI'][_0x16d8bf(_0x3f1548._0x19cbbe) + 'rounds'] && SceneManager[_0x16d8bf(0x9b4)]['_skillUI']['_gridBackg' + 'rounds']['forEach'](_0x54ccbc => { const _0x4c94c0 = _0x16d8bf; if (_0x54ccbc['_isPlaceho' + _0x4c94c0(0x4a8)]) { if (_0x4c94c0(_0x2e3808._0x50d447) === 'jyPiM') _0x54ccbc[_0x4c94c0(_0x2e3808._0x3c2589)] = !![]; else { const _0x6eb4dc = _0x82c16d(); if (!_0x6eb4dc) return; const _0x4088dc = {}; _0x4088dc['Slots'] = [], _0x4088dc['Controllab' + 'leViaGamep' + 'ad'] = _0x4c94c0(0x926), _0x4088dc['Background' + _0x4c94c0(0xb55)] = ''; const _0x1465b6 = _0x4088dc; _0x6eb4dc['grids'][_0x4c94c0(0x9e2)](_0x1465b6), _0x118423(_0x6eb4dc), _0x14908f && !_0x48eae4['closed'] && _0xe8e131['updateEdit' + 'orLists'](); } } }); else { _0x3d7ff6(_0x46ebe3); if (_0x556fe9 && !_0xfbf651['closed'] && _0x3b2153) for (const _0x49b4f0 in _0x782357) { const _0x128513 = _0x5e3a3a[_0x49b4f0]; _0x128513 && _0x5cdf8['updateSlot' + _0x16d8bf(0x3b9) + 'elds'] && _0x4ed009['updateSlot' + 'PositionFi' + _0x16d8bf(_0x3f1548._0xf22644)](_0x49b4f0, _0x128513['x'], _0x128513['y']); } } } else setTimeout(() => _0x9fbfcc(_0x190038 + (-0x11 * 0x27 + 0x33a + -0x51 * 0x2)), -0x1f13 + 0xe48 + -0x53 * -0x35); } else _0x8fbc5a['_config']['Background' + 'Image'] = _0x3d0a18; }; _0x9fbfcc(); } function disableEditorMode() { const _0x5721a2 = { _0x1beb58: 0x9b4, _0x537654: 0x57f, _0x50de09: 0x50f, _0x79dbde: 0x9b6 }, _0xa5d215 = { _0x222e8f: 0x409, _0x464287: 0x302, _0x58a992: 0x400 }, _0x2c442f = _0x53c4; editorMode = ![], ConfigManager['alwaysRun'] = ![], currentSelectedGrid = null; SceneManager['_scene'] && SceneManager['_scene'][_0x2c442f(0x928)] && SceneManager[_0x2c442f(_0x5721a2._0x1beb58)]['_skillUI'][_0x2c442f(0x749) + 'rounds'] && SceneManager['_scene'][_0x2c442f(0x928)]['_gridBackg' + _0x2c442f(_0x5721a2._0x537654)]['forEach'](_0x1cf788 => { const _0x9b5987 = _0x2c442f; if ('ftVug' !== _0x9b5987(_0xa5d215._0x222e8f)) { if (_0x1cf788[_0x9b5987(0x620) + 'lder']) { if ('AHAhy' !== 'hfQVr') _0x1cf788[_0x9b5987(_0xa5d215._0x464287)] = ![]; else return; } } else { const _0x19b96c = _0x5b4b76['document'][_0x9b5987(_0xa5d215._0x58a992) + 'ById']('gridPosX'), _0x585367 = _0x24962c[_0x9b5987(0x874)][_0x9b5987(_0xa5d215._0x58a992) + 'ById']('gridPosY'); if (_0x19b96c) _0x19b96c['value'] = _0x58b5d0; if (_0x585367) _0x585367['value'] = _0x3e020b; } }); window['deselectAl' + 'lSlots'] && window['deselectAl' + 'lSlots'](); if (window['_gridHighl' + 'ightSprite']) { if ('LKrjO' === 'LKrjO') { if (window[_0x2c442f(0x9b6) + 'ightSprite'][_0x2c442f(_0x5721a2._0x50de09)]) { if ('blcLW' === _0x2c442f(0x612)) window['_gridHighl' + 'ightSprite']['parent'][_0x2c442f(0x6c0) + 'd'](window[_0x2c442f(_0x5721a2._0x79dbde) + _0x2c442f(0x924)]); else { const _0x36b8cb = _0x29708e[_0xf6c5a]; _0x36b8cb && _0x49614c['updateSlot' + 'PositionFi' + 'elds'] && _0x56144f['updateSlot' + 'PositionFi' + 'elds'](_0x12de80, _0x36b8cb['x'], _0x36b8cb['y']); } } window['_gridHighl' + 'ightSprite'] = null; } else _0x9d1c9a(_0x50d2a2, _0x434768); } SceneManager['_scene'] && SceneManager['_scene']['toggleDrag' + 'Mode'] && (SceneManager['_scene']['_isDragMod' + 'e'] && SceneManager['_scene']['toggleDrag' + 'Mode']()); } window['loadGridSl' + 'ots'] = function (_0x16f178) { const _0x11aa22 = { _0x65a886: 0x1e9, _0x4d9fef: 0xa50, _0x5d4498: 0x859 }, _0x3ba288 = { _0x3651eb: 0x31b }, _0x301bee = _0x53c4; if (!SceneManager['_scene'] || !SceneManager['_scene'][_0x301bee(0x928)]) return; let _0x1da663 = []; if (Utils[_0x301bee(0xbd0)]()) try { const _0x1cd96d = require('fs'), _0x5ac966 = getConfigPath(); if (_0x1cd96d['existsSync'](_0x5ac966)) { const _0xe99065 = loadConfigFile(); _0x1da663 = _0xe99065[_0x301bee(0x1bd)] || []; } } catch (_0x12f32f) { 'kYkVl' === 'cKZNn' ? _0x261e15[_0x301bee(0x302)] = ![] : console['error']('Error\x20load' + 'ing\x20grid\x20s' + _0x301bee(_0x11aa22._0x65a886), _0x12f32f); } else { } if (!_0x1da663 || _0x16f178 >= _0x1da663['length']) { if (_0x301bee(_0x11aa22._0x4d9fef) !== 'OebNl') { VisualEditorWindow && !VisualEditorWindow[_0x301bee(0x71a)] && VisualEditorWindow['updateSlot' + 'sList']([]); return; } else _0x478c44[_0x301bee(0x5c8)]('Error\x20dele' + _0x301bee(_0x11aa22._0x5d4498), _0x599914); } const _0x4d51c3 = _0x1da663[_0x16f178], _0x522986 = _0x4d51c3['Slots'] ? _0x4d51c3['Slots']['map'](_0x313101 => { const _0x582f5d = _0x301bee, _0xe788b4 = (_0x313101[_0x582f5d(_0x3ba288._0x3651eb)] || '')[_0x582f5d(0x86c)](','), _0x1a9ede = (_0x313101['Button'] || '')['split'](','); return { 'name': _0xe788b4[0xa1 * -0x34 + -0xd63 + 0x17 * 0x201]['trim'](), 'buttonText': _0x1a9ede[0x3 * 0xbaf + 0x16b7 + -0x39c4]['trim']() }; }) : []; currentSelectedGrid = _0x16f178, VisualEditorWindow && !VisualEditorWindow['closed'] && VisualEditorWindow[_0x301bee(0x6b2) + _0x301bee(0x553)](_0x522986); }, window[_0x7069f0(0xbb5) + 'o'] = function (_0x429116) { const _0x54b593 = { _0x555c9d: 0x1bd, _0x1315ca: 0x983, _0x40e4dc: 0x214, _0x2abade: 0xa6d, _0x53b140: 0xb99 }, _0x4bd692 = _0x7069f0; let _0xccbd1 = []; if (Utils['isNwjs']()) try { const _0x5270b3 = require('fs'), _0x11742a = getConfigPath(); if (_0x5270b3[_0x4bd692(0x801)](_0x11742a)) { if ('RteBv' === 'EfzQj') _0x1ef194['bitmap'] = null; else { const _0x413687 = loadConfigFile(); _0xccbd1 = _0x413687[_0x4bd692(_0x54b593._0x555c9d)] || []; } } } catch (_0x6bfff6) { console['error'](_0x4bd692(0x380) + 'ing\x20grid\x20i' + 'nfo:', _0x6bfff6); } else { } if (!_0xccbd1 || _0x429116 >= _0xccbd1['length']) return null; const _0x5105de = _0xccbd1[_0x429116], _0x3a7def = (_0x5105de['RowColumn'] || '2,\x205')['split'](',')['map'](_0x453b26 => parseInt(_0x453b26[_0x4bd692(0x610)]())), _0x166710 = _0x3a7def[0x469 * 0x3 + -0x23a9 + 0x166e] || -0x1b51 + 0x1c8b + -0x9c * 0x2, _0x23cfc1 = _0x3a7def[_0x4bd692(0x8b0)] === 0x22 * -0x9d + -0xc5b + 0x2137 ? _0x3a7def[-0x697 * -0x1 + -0x29 * -0x6b + -0x17b9] : _0x3a7def[-0x1997 + -0x92 * -0x15 + 0x29 * 0x55], _0x561bcf = parseInt(_0x5105de['Padding']) || 0xdf + 0x9 * 0x35b + 0x14b * -0x18, _0x189195 = _0x166710 + '×' + _0x23cfc1; let _0x96258e = -0x1f03 + -0x6f9 + 0x11 * 0x23c, _0x81ae4a = 0x1d * -0x5c + 0x7cd + 0x29f; if (_0x5105de[_0x4bd692(_0x54b593._0x1315ca)] && _0x5105de[_0x4bd692(0x983)]['length'] > -0x1927 * -0x1 + -0x3 * -0x3cf + -0x1 * 0x2494) { if (_0x4bd692(_0x54b593._0x40e4dc) === 'wYibQ') { const _0x28de99 = _0x5e15e3('fs'), _0x1a168e = _0x579e74(); if (_0x28de99['existsSync'](_0x1a168e)) { const _0x1cbfd1 = _0x484457(); _0x4f03a5 = _0x1cbfd1[_0x4bd692(0x1bd)] || []; } } else { const _0x5c5766 = _0x5105de['Slots'][0x169c + 0x1 * -0x2140 + 0x2 * 0x552]['Name']['split'](',')[0x4 * 0x26c + -0x8 * -0x334 + -0x2350]['trim'](), _0xae1ac6 = _0x4bd692(_0x54b593._0x2abade) + _0x5c5766; if (window['$uiPositio' + 'ns'] && window['$uiPositio' + 'ns'][_0xae1ac6]) _0x96258e = window['$uiPositio' + 'ns'][_0xae1ac6]['x'], _0x81ae4a = window['$uiPositio' + 'ns'][_0xae1ac6]['y']; else { if ('CxPFn' !== 'FBjfA') { const _0x2ecb47 = (_0x5105de['Position'] || _0x4bd692(0x2ff))['split'](',')['map'](_0x25ce4f => eval(_0x25ce4f['trim']())); _0x96258e = _0x2ecb47[0x1f * -0x11d + 0x2f1 * -0x4 + 0x2e47] || -0x1 * -0x743 + -0x2 * -0x79c + -0x167b, _0x81ae4a = _0x2ecb47[0x15 * 0x49 + -0x1a7e + -0x2a * -0x7d] || 0x10b8 + -0x166 * 0x1 + 0x7a9 * -0x2; } else { const _0xf441fc = _0xadf02e('fs'), _0x3629f7 = _0x3a7358(); if (_0xf441fc['existsSync'](_0x3629f7)) { const _0x4906cb = _0x1e6025(); _0x2627cf = _0x4906cb['grids'] || []; } } } } } const _0x14358c = {}; return _0x14358c['slotCount'] = _0x5105de['Slots'] ? _0x5105de['Slots']['length'] : 0x1e5 + 0x1d9c + -0x1f81, _0x14358c['layout'] = _0x189195, _0x14358c[_0x4bd692(0x68e)] = _0x166710, _0x14358c['columns'] = _0x23cfc1, _0x14358c['padding'] = _0x561bcf, _0x14358c[_0x4bd692(0x60d) + 'trollable'] = _0x5105de['Controllab' + _0x4bd692(_0x54b593._0x53b140) + 'ad'] === 'true', _0x14358c['background' + 'Image'] = _0x5105de['Background' + 'Image'] || '', _0x14358c['positionX'] = _0x96258e, _0x14358c['positionY'] = _0x81ae4a, _0x14358c; }, window[_0x7069f0(0x850) + _0x7069f0(0x6a7)] = function (_0x589c7b) { const _0x2d6aa1 = { _0x24557a: 0x9b4, _0x7bed18: 0x801, _0x5dd29e: 0x31b, _0x293a30: 0x8e8 }, _0x4abf0b = _0x7069f0; if (!SceneManager['_scene'] || !SceneManager[_0x4abf0b(_0x2d6aa1._0x24557a)]['_skillUI']) return null; const _0x13e418 = SceneManager['_scene']['_skillUI']['_slots']['get'](_0x589c7b); if (!_0x13e418) return null; let _0x5655d6 = '', _0x3831da = []; if (Utils['isNwjs']()) { if ('wHKKB' !== 'wHKKB') _0x2f4a48['delete'](_0x3bda56); else try { const _0x3a274e = require('fs'), _0x5c7fb1 = getConfigPath(); if (_0x3a274e[_0x4abf0b(_0x2d6aa1._0x7bed18)](_0x5c7fb1)) { if ('CDIUt' === 'uBEJq') { if (!_0x6cba09['isNwjs']()) return null; const _0x511427 = _0xf5dfbe(_0x4abf0b(0x331)), _0x45006f = _0x511427['dirname'](_0x4e0619['mainModule']['filename']) + _0x4abf0b(0x282); return _0x511427['join'](_0x45006f, _0x4abf0b(0x3d5) + 'ig.json'); } else { const _0x1e9320 = loadConfigFile(); _0x3831da = _0x1e9320['grids'] || []; } } } catch (_0x129e19) { console['error']('Error\x20load' + _0x4abf0b(0x627) + _0x4abf0b(0x6f9), _0x129e19); } } else { } for (const _0x33b4f0 of _0x3831da) { if ('JQuKx' === 'JQuKx') { if (_0x33b4f0['Slots']) for (const _0x4d288c of _0x33b4f0['Slots']) { const _0x37df1d = (_0x4d288c[_0x4abf0b(_0x2d6aa1._0x5dd29e)] || '')['split'](','); if (_0x37df1d[0x2169 + 0x3 * 0x55b + -0x317a][_0x4abf0b(0x610)]() === _0x589c7b) { const _0x105175 = (_0x4d288c['Button'] || '')['split'](','); _0x5655d6 = _0x105175[-0x14f7 + 0x4db + -0x2 * -0x80e]['trim'](); break; } } if (_0x5655d6) break; } else { if (!_0x24d56a['isNwjs']()) return null; const _0x221ac4 = _0x3b91d5('fs'), _0x3ea289 = _0x35833c(); try { if (_0x221ac4['existsSync'](_0x3ea289)) return _0x171465['parse'](_0x221ac4['readFileSy' + 'nc'](_0x3ea289, _0x4abf0b(0x4fe))); } catch (_0x4e52ff) { _0x3a6786['error']('[Hotbar]\x20E' + 'rror\x20loadi' + 'ng\x20config:', _0x4e52ff); } const _0x31364e = {}; return _0x31364e['grids'] = [], _0x31364e[_0x4abf0b(_0x2d6aa1._0x293a30)] = {}, _0x31364e; } } const _0x596aa8 = {}; return _0x596aa8['x'] = _0x13e418['x'], _0x596aa8['y'] = _0x13e418['y'], _0x596aa8[_0x4abf0b(0x49f)] = _0x5655d6, _0x596aa8; }, window['getFullSlo' + _0x7069f0(0x9c1)] = function (_0x5f547c) { const _0x5bc29f = { _0x14c965: 0xbd0, _0xbe8325: 0x1bd, _0xb8af21: 0x983, _0x1aa5c7: 0x9fd, _0x4b5813: 0xa28, _0x16e5a7: 0x928, _0x2b9210: 0x9b4, _0x1405de: 0x1fe, _0x345fc4: 0x5c8 }, _0xc26fd2 = _0x7069f0; if (!Utils[_0xc26fd2(_0x5bc29f._0x14c965)]()) return null; try { if ('lEvls' === _0xc26fd2(0x454)) { const _0x2d8b55 = require('fs'), _0x72213e = getConfigPath(); if (_0x2d8b55['existsSync'](_0x72213e)) { const _0x16995f = loadConfigFile(), _0x3acd2d = _0x16995f[_0xc26fd2(_0x5bc29f._0xbe8325)] || []; for (const _0x5a553e of _0x3acd2d) { if (_0x5a553e[_0xc26fd2(_0x5bc29f._0xb8af21)]) for (const _0x57f008 of _0x5a553e[_0xc26fd2(0x983)]) { if ('xpWoA' !== 'oXlNo') { const _0x1a03b3 = (_0x57f008['Name'] || '')['split'](','); if (_0x1a03b3[0x3 * 0x815 + 0xd * 0x91 + -0x1f9c]['trim']() === _0x5f547c) { if (_0xc26fd2(_0x5bc29f._0x1aa5c7) === _0xc26fd2(_0x5bc29f._0x4b5813)) _0xa79fae['error']('Error\x20crea' + 'ting\x20grid:', _0x1ece6b); else return _0x57f008; } } else { if (!_0x5830b8['_scene'] || !_0x2635f2['_scene'][_0xc26fd2(_0x5bc29f._0x16e5a7)]) return; _0x28c5d5 = null, _0x17e8bd['_scene']['_skillUI']['_slots']['forEach']((_0x5007e4, _0x51cb6f) => { _0x5007e4['_editorGlo' + 'w'] && (_0x5007e4['removeChil' + 'd'](_0x5007e4['_editorGlo' + 'w']), _0x5007e4['_editorGlo' + 'w'] = null); }); } } } } } else _0x44f7a7 = _0x1cea9d['grids'] || [], _0x1371dc && _0x255bca[_0xc26fd2(0x9b4)] && _0x278100[_0xc26fd2(_0x5bc29f._0x2b9210)]['_skillUI'] && _0x332b8e['goto'](_0x80ff54[_0xc26fd2(0x9b4)][_0xc26fd2(_0x5bc29f._0x1405de) + 'r']); } catch (_0x7ed52a) { console[_0xc26fd2(_0x5bc29f._0x345fc4)]('Error\x20gett' + 'ing\x20full\x20s' + 'lot\x20config' + ':', _0x7ed52a); } return null; }, window['updateSlot' + 'Property'] = function (_0x4dca7c, _0x15be5b, _0x2bc458, _0x326868) { const _0x3b6a05 = { _0x378e0b: 0x801, _0x5a3217: 0x6c7, _0x340e1a: 0x807, _0x38e76f: 0x2eb, _0x49376a: 0x983, _0x58d1b9: 0x72f, _0x3cd6ee: 0x481, _0x3242fd: 0x31b, _0x170ca3: 0x86c, _0x2d054d: 0x40c, _0x181ece: 0x3c5, _0x1abfbd: 0x331, _0x32cffd: 0xb19, _0x17714f: 0xb03, _0x3b9152: 0x9e4, _0x5d4d7a: 0xbcc, _0x1e7a6d: 0x8e8, _0x47abb0: 0x8e8, _0x198202: 0x7a6, _0x5522de: 0x987, _0x2f2fae: 0x3bf, _0x273f39: 0x9b4, _0x455fa7: 0x77a, _0x13e21c: 0x9c6, _0x4743ad: 0x299, _0x3b79d4: 0x522, _0x1a3190: 0x71a, _0x199d78: 0x42a, _0x4d436e: 0x7b7, _0x5b134a: 0x749, _0x53db4b: 0x5c8, _0x40bb9c: 0x1d5, _0x3b060b: 0x633, _0x5c41ff: 0x201 }, _0xad8f4e = { _0x2cb744: 0x31b, _0x5de43c: 0x86c, _0x2c399b: 0x610 }, _0x377cb6 = _0x7069f0; if (!Utils['isNwjs']()) { if ('hcjRa' === 'hcjRa') return alert(_0x377cb6(0x963) + 'ots\x20only\x20w' + _0x377cb6(0x37e) + '.js\x20(test\x20' + _0x377cb6(0x7c9) + 'sktop)'), null; else { _0x40513a(_0x377cb6(0x2eb) + 'e\x20not\x20foun' + 'd!'); return; } } try { const _0x234b2f = require('fs'), _0x220263 = getConfigPath(); if (!_0x234b2f[_0x377cb6(_0x3b6a05._0x378e0b)](_0x220263)) { if ('bagUC' === _0x377cb6(0x2d7)) _0x405d6f(_0x377cb6(_0x3b6a05._0x5a3217) + _0x377cb6(_0x3b6a05._0x340e1a) + 'tion:\x20' + _0x4d6a56['message']); else return alert(_0x377cb6(_0x3b6a05._0x38e76f) + 'e\x20not\x20foun' + 'd!'), null; } const _0x1be7d9 = loadConfigFile(), _0x2e802a = _0x1be7d9['grids'][_0x4dca7c]; if (!_0x2e802a || !_0x2e802a[_0x377cb6(_0x3b6a05._0x49376a)]) { if ('EGeTN' === 'CvSNX') _0x26c9c8['positions'] = {}; else return alert(_0x377cb6(_0x3b6a05._0x58d1b9) + 'ots\x20not\x20fo' + 'und!'), null; } const _0x322e33 = _0x2e802a['Slots']['findIndex'](_0xfdd22 => { const _0x506895 = _0x377cb6; if ('MpMIF' !== 'MpMIF') { const _0x4e7340 = _0x2d046a[_0x506895(0x983)][-0x480 * 0x4 + 0x153 * 0x7 + 0x8bb][_0x506895(0x31b)]['split'](',')[-0xfd7 + -0x2154 * -0x1 + 0x117d * -0x1][_0x506895(0x610)](), _0x1d7444 = _0x506895(0xa6d) + _0x4e7340; if (_0x53e5b0['$uiPositio' + 'ns'] && _0x1e0be9['$uiPositio' + 'ns'][_0x1d7444]) _0x583ea8 = _0x461287[_0x506895(0x7a6) + 'ns'][_0x1d7444]['x'], _0x4ca049 = _0x41b809['$uiPositio' + 'ns'][_0x1d7444]['y']; else { const _0x24125d = (_0x86c92d['Position'] || '0,\x200')['split'](',')['map'](_0x1a14c2 => _0x1723dc(_0x1a14c2['trim']())); _0x158621 = _0x24125d[0x1a0e + -0xe5e + -0xbb0 * 0x1] || 0xf8e + -0x6fb + -0x893, _0x22839c = _0x24125d[-0x5 * -0x773 + 0x1a4c + 0x3 * -0x152e] || 0x2 * 0xeae + 0xa * -0x33f + -0x18d * -0x2; } } else { const _0x1b368c = _0xfdd22[_0x506895(_0xad8f4e._0x2cb744)][_0x506895(_0xad8f4e._0x5de43c)](',')[0x202c * -0x1 + 0x281 + 0x1dab][_0x506895(_0xad8f4e._0x2c399b)](); return _0x1b368c === _0x15be5b; } }); if (_0x322e33 === -(0x2258 + -0x2154 + 0x7 * -0x25)) { if ('AGoQv' === _0x377cb6(0x272)) { _0x1c214a['error']('[Visual\x20Ed' + 'itor]\x20Slot' + '\x20not\x20found' + ':', _0xccc0af); return; } else return console['error'](_0x377cb6(0xae5) + _0x377cb6(0xa70), _0x15be5b), alert('Slot\x20not\x20f' + _0x377cb6(0xb53) + _0x15be5b + (_0x377cb6(_0x3b6a05._0x3cd6ee) + '\x20will\x20relo' + _0x377cb6(0x47f))), SceneManager['goto'](SceneManager[_0x377cb6(0x9b4)]['constructo' + 'r']), null; } const _0x2e77b8 = _0x2e802a['Slots'][_0x322e33]; let _0x20710d = _0x2e77b8[_0x377cb6(_0x3b6a05._0x3242fd)]['split'](',')[-0xa9 * 0x1 + -0x343 * 0x1 + -0x3ec * -0x1]['trim'](), _0x585a46 = _0x20710d; switch (_0x2bc458) { case _0x377cb6(0x2f2): const _0x2451e6 = _0x2e77b8['Name'][_0x377cb6(_0x3b6a05._0x170ca3)](',')['map'](_0x3dfc44 => _0x3dfc44[_0x377cb6(0x610)]()); _0x2451e6[0x14 * -0xb3 + -0x761 + 0x155d] = _0x326868, _0x2e77b8['Name'] = _0x2451e6[_0x377cb6(_0x3b6a05._0x2d054d)](',\x20'), _0x585a46 = _0x326868; break; case 'buttonKb': const _0x129546 = _0x2e77b8['Button']['split'](',')[_0x377cb6(_0x3b6a05._0x181ece)](_0x44dabf => _0x44dabf['trim']()); _0x129546[-0x1247 * -0x1 + -0x11ca + -0x7d] = _0x326868, _0x2e77b8[_0x377cb6(0x672)] = _0x129546['join'](',\x20'); break; case _0x377cb6(0x412): const _0x5ed10a = _0x2e77b8['Button']['split'](',')['map'](_0x55feea => _0x55feea['trim']()); if (_0x326868) _0x5ed10a[0x1 * 0x15a7 + 0x1219 + -0x27bf * 0x1] = _0x326868; else { if (_0x5ed10a['length'] > -0x793 + -0x21f5 + 0x7 * 0x5ef) { if (_0x377cb6(0x6c5) === 'eYjOR') try { const _0x519339 = _0x4bd5e8('fs'), _0xe547aa = _0x224843(_0x377cb6(_0x3b6a05._0x1abfbd)), _0x56aa0 = _0x5f39f9(), _0x386c26 = _0xe547aa['join'](_0x56aa0, 'img', 'system'); if (!_0x519339[_0x377cb6(_0x3b6a05._0x378e0b)](_0x386c26)) { const _0x5eb0af = {}; _0x5eb0af['recursive'] = !![], _0x519339['mkdirSync'](_0x386c26, _0x5eb0af); } const _0x10ce5e = _0x3aa7b9[_0x377cb6(_0x3b6a05._0x32cffd)](/\.[^/.]+$/, ''), _0x291e75 = _0xe547aa['extname'](_0x1820be)['toLowerCas' + 'e'](), _0x9dc781 = _0xe547aa['join'](_0x386c26, _0x1758d2), _0xd1affb = _0x341236['replace'](/^data:image\/\w+;base64,/, ''), _0x5b94b6 = _0x3c17bc['from'](_0xd1affb, 'base64'); _0x519339['writeFileS' + 'ync'](_0x9dc781, _0x5b94b6), _0x46561c(!![], _0x10ce5e); } catch (_0x30268d) { _0x1af41c['error']('Error\x20copy' + 'ing\x20backgr' + 'ound\x20image' + ':', _0x30268d), _0x255642(![], null); } else _0x5ed10a['splice'](0x1d7 * -0x1 + 0xd64 + -0xb8c, -0xe75 + -0x7d * 0x30 + -0x436 * -0x9); } } _0x2e77b8['Button'] = _0x5ed10a[_0x377cb6(_0x3b6a05._0x2d054d)](',\x20'); break; case 'background' + _0x377cb6(0xb55): _0x2e77b8['Background' + 'Image'] = _0x326868; break; case _0x377cb6(0x98c) + 'Y': _0x2e77b8['TextOffset' + 'Y'] = _0x326868['toString'](); break; case 'specialBeh' + _0x377cb6(_0x3b6a05._0x17714f): _0x2e77b8['SpecialBeh' + 'avior'] = _0x326868; break; }saveConfigFile(_0x1be7d9); if (_0x2bc458 === 'nameKb' && _0x20710d !== _0x585a46) { if (_0x377cb6(_0x3b6a05._0x3b9152) === _0x377cb6(_0x3b6a05._0x5d4d7a)) return; else { !_0x1be7d9['positions'] && (_0x1be7d9['positions'] = {}); if (_0x1be7d9['positions'][_0x20710d]) { if ('PTpRD' !== 'NPvaW') _0x1be7d9['positions'][_0x585a46] = _0x1be7d9[_0x377cb6(_0x3b6a05._0x1e7a6d)][_0x20710d], delete _0x1be7d9['positions'][_0x20710d], saveConfigFile(_0x1be7d9); else { const _0x325a6e = {}; _0x325a6e['x'] = 0x0, _0x325a6e['y'] = 0x0, _0x52fdd2[_0x377cb6(_0x3b6a05._0x47abb0)][_0xef1fb] = _0x325a6e; } } if (window[_0x377cb6(_0x3b6a05._0x198202) + 'ns'] && window['$uiPositio' + 'ns'][_0x20710d]) { if (_0x377cb6(0x521) !== _0x377cb6(_0x3b6a05._0x5522de)) window['$uiPositio' + 'ns'][_0x585a46] = window['$uiPositio' + 'ns'][_0x20710d], delete window['$uiPositio' + 'ns'][_0x20710d]; else { !_0x157c08[_0x377cb6(_0x3b6a05._0x198202) + 'ns'] && (_0x823d82[_0x377cb6(_0x3b6a05._0x198202) + 'ns'] = {}); const _0x2ba8f6 = {}; _0x2ba8f6['x'] = _0x1d2de9, _0x2ba8f6['y'] = _0x3a6464, _0x1850ce['$uiPositio' + 'ns'][_0xf6a5b1] = _0x2ba8f6, _0x4fea6f['saveHotbar' + _0x377cb6(0xbe3) + 's'] && _0x3c24ff[_0x377cb6(_0x3b6a05._0x2f2fae) + _0x377cb6(0x977)](_0x47347e['$uiPositio' + 'ns']); } } const _0x45bc1e = _slotData['get'](_0x20710d); _0x45bc1e && (_slotData['set'](_0x585a46, _0x45bc1e), _slotData['delete'](_0x20710d)); if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { const _0x3bf25e = SceneManager[_0x377cb6(_0x3b6a05._0x273f39)][_0x377cb6(0x928)]['_slots']['get'](_0x20710d); _0x3bf25e && ('SAkWm' === 'SAkWm' ? (_0x3bf25e[_0x377cb6(_0x3b6a05._0x455fa7)]['Name'] = _0x585a46, _0x3bf25e[_0x377cb6(_0x3b6a05._0x13e21c) + _0x377cb6(0x785)] = _0x585a46, SceneManager['_scene']['_skillUI']['_slots'][_0x377cb6(_0x3b6a05._0x4743ad)](_0x20710d), SceneManager['_scene']['_skillUI'][_0x377cb6(0x823)]['set'](_0x585a46, _0x3bf25e), _0x3bf25e['refreshBut' + 'tonText'] && _0x3bf25e[_0x377cb6(0x767) + _0x377cb6(_0x3b6a05._0x3b79d4)](), VisualEditorWindow && !VisualEditorWindow[_0x377cb6(_0x3b6a05._0x1a3190)] && (VisualEditorWindow[_0x377cb6(_0x3b6a05._0x199d78) + 'FromGame'] && VisualEditorWindow['selectSlot' + 'FromGame'](_0x585a46))) : _0x2f2b83[_0x377cb6(0xa97)] = _0x2ae93d['loadSystem'](_0x555959)); } } } const _0x2af385 = _0x2bc458 === 'nameKb' && _0x20710d !== _0x585a46 ? _0x585a46 : _0x15be5b; if (_0x2bc458 === _0x377cb6(_0x3b6a05._0x4d436e) || _0x2bc458 === _0x377cb6(0x412)) updateSlotButtonText(_0x2af385); else { if (_0x2bc458 === 'textOffset' + 'Y') 'WYDQp' !== 'PTkee' ? updateSlotTextOffset(_0x2af385, parseInt(_0x326868) || -0xf45 + 0x1 * -0x1d1e + 0x409 * 0xb) : (_0xace901['parent'] && _0x58e99b['parent']['removeChil' + 'd'](_0x52b254), _0x43787d['bitmap'] && (_0x501a00['bitmap'] = null), delete _0x12fe75[_0x377cb6(_0x3b6a05._0x5b134a) + 'rounds'][_0x21d547]); else { if (_0x2bc458 === 'background' + 'Image') { if (_0x377cb6(0x511) === 'jvLDk') updateSlotBackgroundImage(_0x2af385, _0x326868); else { const _0x48e2b5 = _0x4f6774(); _0x4072a5 = _0x48e2b5['grids'] || []; } } else _0x2bc458 === 'specialBeh' + 'avior' && updateSlotSpecialBehavior(_0x2af385, _0x326868); } } const _0xdfb176 = {}; _0xdfb176['newName'] = _0x585a46; const _0x5f2df4 = {}; return _0x5f2df4['newName'] = _0x20710d, _0x2bc458 === 'nameKb' ? _0xdfb176 : _0x5f2df4; } catch (_0x30602d) { return console[_0x377cb6(_0x3b6a05._0x53db4b)](_0x377cb6(_0x3b6a05._0x40bb9c) + _0x377cb6(0xbf6) + _0x377cb6(_0x3b6a05._0x3b060b), _0x30602d), alert(_0x377cb6(0x1d5) + _0x377cb6(_0x3b6a05._0x5c41ff) + 'rty:\x20' + _0x30602d['message']), null; } }; function updateSlotTextOffset(_0x20c85f, _0x54ac88) { const _0x233f0e = { _0x12f603: 0x9b4, _0x4916f2: 0x928, _0x1b9724: 0x77a, _0x1ab101: 0x1b5, _0xbd5815: 0x509, _0x2d4b97: 0x5d3, _0x2cedc6: 0x892, _0x52aac0: 0x892 }, _0x4156cf = _0x7069f0; if (!SceneManager[_0x4156cf(_0x233f0e._0x12f603)] || !SceneManager[_0x4156cf(_0x233f0e._0x12f603)]['_skillUI']) return; const _0x2dddad = SceneManager['_scene'][_0x4156cf(_0x233f0e._0x4916f2)][_0x4156cf(0x823)]['get'](_0x20c85f); if (!_0x2dddad) return; if (_0x2dddad['_buttonSpr' + 'ite']) { if (_0x2dddad[_0x4156cf(_0x233f0e._0x1b9724)] && _0x2dddad[_0x4156cf(0x77a)]['Background' + _0x4156cf(0xb55)]) { const _0x4e45d2 = ImageManager[_0x4156cf(_0x233f0e._0x1ab101)](_0x2dddad[_0x4156cf(0x77a)][_0x4156cf(0x4a5) + 'Image']); _0x2dddad['_buttonSpr' + _0x4156cf(0x509)]['y'] = _0x4e45d2['height'] / (0x9dd * 0x2 + 0x1 * -0x60d + -0xdab); } else 'YEZrB' === 'YEZrB' ? _0x2dddad['_buttonSpr' + _0x4156cf(_0x233f0e._0xbd5815)]['y'] = 0x952 * -0x4 + -0xbf7 * 0x1 + -0x7 * -0x709 : _0x461535[_0x4156cf(_0x233f0e._0x2d4b97) + 'lSlots'](); _0x2dddad['_buttonSpr' + 'ite']['y'] += _0x54ac88; } if (_0x2dddad[_0x4156cf(_0x233f0e._0x2cedc6) + 'nSprite']) { if ('WiWTL' !== 'GpEKY') { if (_0x2dddad['_config'] && _0x2dddad['_config']['Background' + 'Image']) { if ('soVEV' === 'soVEV') { const _0x5e40e2 = ImageManager[_0x4156cf(0x1b5)](_0x2dddad['_config']['Background' + 'Image']); _0x2dddad[_0x4156cf(_0x233f0e._0x52aac0) + 'nSprite']['y'] = _0x5e40e2['height'] / (0x6 * -0x62f + 0x1683 + 0xe99); } else _0x57cb81['visible'] = ![]; } else _0x2dddad[_0x4156cf(0x892) + _0x4156cf(0x957)]['y'] = 0x2e7 * -0x2 + -0x38e + -0x4ae * -0x2; _0x2dddad[_0x4156cf(0x892) + 'nSprite']['y'] += _0x54ac88; } else _0x391468['updateEdit' + _0x4156cf(0x6bf)](); } } function updateSlotButtonText(_0x5d0bf6) { const _0x11494c = { _0x764c0d: 0x9b4, _0x11fc60: 0x928, _0x5f1d8e: 0xb28, _0x215b2f: 0x302, _0x25bbc0: 0x86c, _0x37817e: 0x767, _0x39ed8b: 0x7e0, _0x3918cd: 0x7a6, _0x54f424: 0x5c8 }, _0x24afe7 = _0x7069f0; if (!SceneManager[_0x24afe7(0x9b4)] || !SceneManager[_0x24afe7(_0x11494c._0x764c0d)][_0x24afe7(_0x11494c._0x11fc60)]) return; const _0x546a44 = SceneManager['_scene']['_skillUI'][_0x24afe7(0x823)][_0x24afe7(_0x11494c._0x5f1d8e)](_0x5d0bf6); if (!_0x546a44) return; if (Utils['isNwjs']()) try { if ('VaEBO' === 'NAwjl') _0x2b799a[_0x24afe7(_0x11494c._0x215b2f)] = !![]; else { const _0x29b5b4 = require('fs'), _0x322a4b = getConfigPath(); if (_0x29b5b4['existsSync'](_0x322a4b)) { const _0x2de3a4 = loadConfigFile(), _0xd2efbd = _0x2de3a4[_0x24afe7(0x1bd)] || []; for (const _0x52d0b2 of _0xd2efbd) { if (_0x52d0b2['Slots']) for (const _0x238ce0 of _0x52d0b2['Slots']) { const _0x58ced5 = _0x238ce0['Name'][_0x24afe7(_0x11494c._0x25bbc0)](',')[0x1346 * 0x1 + 0x120 + -0x1466][_0x24afe7(0x610)](); if (_0x58ced5 === _0x5d0bf6) { _0x546a44['_config']['Button'] = _0x238ce0['Button'], _0x546a44['_config']['Name'] = _0x238ce0[_0x24afe7(0x31b)]; _0x546a44[_0x24afe7(_0x11494c._0x37817e) + 'tonText'] && ('WJQep' === _0x24afe7(_0x11494c._0x39ed8b) ? _0x546a44['refreshBut' + 'tonText']() : _0x26f8ac['$uiPositio' + 'ns'] = {}); return; } } } } } } catch (_0x512448) { if ('jAVRc' !== 'jAVRc') { const _0x201dd9 = _0x2dfe1b['Name'][_0x24afe7(0x86c)](',')[-0x14cb + 0xbdc + 0x8ef][_0x24afe7(0x610)](); if (_0x9afc7[_0x24afe7(0x8e8)][_0x201dd9]) _0xda5ed4['push'](_0x2d0013['positions'][_0x201dd9]); else _0x3f7c2f['$uiPositio' + 'ns'] && _0x5b973c[_0x24afe7(_0x11494c._0x3918cd) + 'ns'][_0x201dd9] && _0x418d90['push'](_0x5661bb[_0x24afe7(_0x11494c._0x3918cd) + 'ns'][_0x201dd9]); } else console[_0x24afe7(_0x11494c._0x54f424)](_0x24afe7(0x1d5) + 'ting\x20butto' + 'n\x20text:', _0x512448); } } function updateSlotBackgroundImage(_0x5be72d, _0xa69956) { const _0x1bf988 = { _0x5a9e2e: 0x9b4, _0x5f2b57: 0x5d2, _0x212a0a: 0x8e8, _0x573472: 0x9e9, _0x134188: 0x3ad, _0x1e069a: 0x889, _0x18a7b4: 0x86c, _0x4e5847: 0x522 }, _0x23c0ac = { _0xb097ed: 0xa97, _0x4b2245: 0x9b4 }, _0x5e22ff = _0x7069f0; if (!SceneManager['_scene'] || !SceneManager[_0x5e22ff(_0x1bf988._0x5a9e2e)]['_skillUI']) { console['error']('[Visual\x20Ed' + 'itor]\x20Scen' + 'e\x20or\x20skill' + 'UI\x20not\x20ava' + 'ilable'); return; } const _0x13ab4d = SceneManager['_scene']['_skillUI'][_0x5e22ff(0x823)]['get'](_0x5be72d); if (!_0x13ab4d) { console['error']('[Visual\x20Ed' + 'itor]\x20Slot' + '\x20not\x20found' + ':', _0x5be72d); return; } _0x13ab4d['_config'] && ('FeUnX' === _0x5e22ff(_0x1bf988._0x5f2b57) ? _0x1bb605[_0x5e22ff(_0x1bf988._0x212a0a)][_0x54fee8]['x'] = _0x33352c : _0x13ab4d['_config']['Background' + 'Image'] = _0xa69956); if (_0xa69956 && _0xa69956['trim']() !== '') _0x13ab4d['bitmap'] = ImageManager['loadSystem'](_0xa69956), _0x13ab4d[_0x5e22ff(0xa97)][_0x5e22ff(_0x1bf988._0x573472) + 'tener'](() => { const _0x153ee7 = _0x5e22ff; if (_0x13ab4d['_buttonSpr' + 'ite']) { if ('OyyiE' === _0x153ee7(0x751)) { const _0x482f93 = Number(_0x13ab4d['_config']['TextOffset' + 'Y'] || -0x15fd + 0x118 + 0x14e5); _0x13ab4d['_buttonSpr' + 'ite']['y'] = _0x13ab4d[_0x153ee7(_0x23c0ac._0xb097ed)]['height'] / (-0x252b + -0x26f4 + -0x1 * -0x4c21) + _0x482f93; } else { const _0x1d4f61 = _0x38e4ed[_0x153ee7(_0x23c0ac._0x4b2245)][_0x153ee7(0x928)]['_gridBackg' + 'rounds'][_0x221f0a]; _0x1d4f61 && _0x1d4f61['parent'] && _0x1d4f61['parent']['removeChil' + 'd'](_0x1d4f61), delete _0x6bb751[_0x153ee7(0x9b4)]['_skillUI']['_gridBackg' + _0x153ee7(0x57f)][_0x29b24c]; } } }); else { if (_0x5e22ff(0x42c) !== 'Dsjvv') { _0x13ab4d['bitmap'] = new Bitmap(-0x10 * -0x4a + 0x3dc + -0x6 * 0x162, 0xf7 * -0x25 + 0x4 * 0x239 + 0x1aff), _0x13ab4d['bitmap']['fillRect'](-0x1b14 + 0x18f3 + 0x221, 0x20f1 * 0x1 + -0x2d4 * -0x1 + -0x1 * 0x23c5, 0x832 * 0x2 + 0x396 + -0x13ca, -0x23 * 0xd1 + -0xc43 + 0x3b * 0xb2, 'rgba(0,0,0' + ',0.5)'); if (_0x13ab4d[_0x5e22ff(_0x1bf988._0x134188) + 'ite']) { if (_0x5e22ff(_0x1bf988._0x1e069a) === 'AiuHG') { const _0x15da06 = Number(_0x13ab4d[_0x5e22ff(0x77a)][_0x5e22ff(0x887) + 'Y'] || 0x196 + 0x66e + 0x12 * -0x72); _0x13ab4d['_buttonSpr' + 'ite']['y'] = -0x913 + -0x1af * -0x1 + 0x764 * 0x1 + _0x15da06; } else { const _0x53cdf1 = _0x6c2369[_0x1b16f2]; _0x53cdf1 && _0x36ffa5['updateSlot' + 'PositionFi' + 'elds'] && _0x404e41['updateSlot' + 'PositionFi' + 'elds'](_0x2b1367, _0x53cdf1['x'], _0x53cdf1['y']); } } } else { const _0x59a823 = _0x5049c9['Name'][_0x5e22ff(_0x1bf988._0x18a7b4)](',')[-0x1 * -0x1629 + 0xd10 + -0x1 * 0x2339][_0x5e22ff(0x610)](); if (_0x59a823 === _0x3a4aac) { _0x59eb32['_config']['Button'] = _0x7df850['Button'], _0x3ddf51['_config']['Name'] = _0x3e1d05['Name']; _0x57fde8['refreshBut' + 'tonText'] && _0x22dadd[_0x5e22ff(0x767) + _0x5e22ff(_0x1bf988._0x4e5847)](); return; } } } } function updateSlotSpecialBehavior(_0x14187e, _0x296b97) { const _0x4db256 = { _0x487205: 0xb03, _0xec5e11: 0x273 }, _0x48aa6c = _0x7069f0; if (!SceneManager['_scene'] || !SceneManager['_scene']['_skillUI']) return; const _0x315f3d = SceneManager['_scene']['_skillUI']['_slots'][_0x48aa6c(0xb28)](_0x14187e); if (!_0x315f3d) return; _0x315f3d[_0x48aa6c(0x77a)] && (_0x315f3d[_0x48aa6c(0x77a)]['SpecialBeh' + _0x48aa6c(_0x4db256._0x487205)] = _0x296b97), _0x315f3d[_0x48aa6c(_0x4db256._0xec5e11)] && _0x315f3d['refresh'](); } window['updateSlot' + 'Position'] = function (_0x2d1b0b, _0x3e4c8b, _0x2838b7) { const _0x211e84 = { _0x2aff36: 0x9b4 }, _0x4aff00 = _0x7069f0; if (!SceneManager[_0x4aff00(_0x211e84._0x2aff36)] || !SceneManager['_scene']['_skillUI']) return; const _0x357b4f = SceneManager['_scene']['_skillUI']['_slots']['get'](_0x2d1b0b); if (!_0x357b4f) return; if (_0x3e4c8b === 'x') { if ('BQMFl' !== _0x4aff00(0x6e4)) return _0x5f12f9('Grid\x20or\x20sl' + 'ots\x20not\x20fo' + _0x4aff00(0x237)), null; else _0x357b4f['x'] = _0x2838b7; } else _0x3e4c8b === 'y' && (_0x357b4f['y'] = _0x2838b7); saveSlotPosition(_0x2d1b0b, _0x357b4f['x'], _0x357b4f['y']); }, window[_0x7069f0(0x42a) + 'InGame'] = function (_0x175ccf) { const _0x67f663 = { _0xfb767f: 0x9b4, _0x219cdf: 0x928 }, _0x5d7cac = { _0x191ce8: 0x4be, _0x4a52b8: 0x195, _0x1771a5: 0x77a, _0x4c5706: 0x887, _0x54b30b: 0xae8, _0x41a630: 0x51b, _0x5a48bb: 0x9b6 }, _0x11b258 = _0x7069f0; if (!SceneManager[_0x11b258(0x9b4)] || !SceneManager[_0x11b258(_0x67f663._0xfb767f)]['_skillUI']) return; currentSelectedSlot = _0x175ccf, SceneManager[_0x11b258(0x9b4)][_0x11b258(_0x67f663._0x219cdf)]['_slots']['forEach']((_0x583346, _0x22ef84) => { const _0x40a6f1 = _0x11b258; if ('fRYpM' !== 'YYWsQ') { _0x583346['_editorGlo' + 'w'] && (_0x583346['removeChil' + 'd'](_0x583346[_0x40a6f1(0x306) + 'w']), _0x583346['_editorGlo' + 'w'] = null); if (_0x22ef84 === _0x175ccf) { _0x583346['_editorGlo' + 'w'] = new Sprite(); const _0x5e121c = new Bitmap(_0x583346[_0x40a6f1(_0x5d7cac._0x191ce8)] + (-0x1bdf + 0x277 * 0x8 + -0x31 * -0x2b) || 0x1580 + 0x83a + -0x47 * 0x6a, _0x583346['height'] + (-0x7d * 0x1f + 0x1 * -0xbae + 0x2d * 0x99) || 0x1 * 0x25cf + 0x1 * -0x2402 + -0x179), _0x26ed36 = _0x5e121c['context'], _0x2da1f7 = _0x5e121c['width'], _0x38089a = _0x5e121c[_0x40a6f1(_0x5d7cac._0x4a52b8)]; for (let _0x3e613d = 0xd0d + -0x1 * -0x62f + -0x133c; _0x3e613d < -0x1172 + -0x783 * -0x1 + 0x31 * 0x34; _0x3e613d++) { if ('IsYDK' !== 'IsYDK') { _0x4a4bce['bitmap'] = new _0xb6f592(-0xfb6 + 0x1bb3 + -0x9f * 0x13, 0x14f1 + -0xced * 0x2 + 0x1b3 * 0x3), _0xa3cb4['bitmap']['fillRect'](0x23be + 0x38a * -0xb + 0x330, 0x10db + -0x7 * 0x35b + 0x6a2, -0x15e + -0x1 * 0x221f + 0x1 * 0x23ad, -0x2168 + -0xa6 * 0x1f + 0x35b2, 'rgba(0,0,0' + ',0.5)'); if (_0x1c2c76['_buttonSpr' + 'ite']) { const _0x1415cb = _0x51514f(_0x3cf6e2[_0x40a6f1(_0x5d7cac._0x1771a5)][_0x40a6f1(_0x5d7cac._0x4c5706) + 'Y'] || -0xfb * -0x1c + -0xf3c + -0xc38); _0x154c85['_buttonSpr' + 'ite']['y'] = -0x6e2 + -0x1b7b + 0x225d + _0x1415cb; } } else { const _0x146777 = 0x2596 + -0x1f8d + -0x609 + 0.3 - _0x3e613d * (-0x1 * -0x2681 + 0x141b * -0x1 + -0x1266 + 0.05), _0x2c58ab = _0x3e613d * (-0x1756 * -0x1 + 0xdc9 * 0x1 + -0x3b6 * 0xa); _0x26ed36['strokeStyl' + 'e'] = 'rgba(255,\x20' + _0x40a6f1(_0x5d7cac._0x54b30b) + _0x146777 + ')', _0x26ed36['lineWidth'] = 0x180e + -0xf06 + -0x905, _0x26ed36['strokeRect'](_0x2c58ab, _0x2c58ab, _0x2da1f7 - _0x2c58ab * (-0x826 + 0x8 * -0x382 + 0x2438 * 0x1), _0x38089a - _0x2c58ab * (-0x1f41 + 0x369 * 0x7 + -0x2b * -0x2c)); } } _0x583346['_editorGlo' + 'w']['bitmap'] = _0x5e121c, _0x583346['_editorGlo' + 'w'][_0x40a6f1(0x51b)]['x'] = 0x2f * -0xc2 + -0x19ef + 0x3d8d + 0.5, _0x583346['_editorGlo' + 'w'][_0x40a6f1(_0x5d7cac._0x41a630)]['y'] = 0x11e0 + -0xf47 * -0x1 + -0x2127 + 0.5, _0x583346['_editorGlo' + 'w']['x'] = 0x4db * 0x8 + -0x23 * 0x81 + -0x59 * 0x3d, _0x583346['_editorGlo' + 'w']['y'] = 0xa56 + -0xb7e * 0x2 + 0xca6, _0x583346['addChildAt'](_0x583346['_editorGlo' + 'w'], -0x2 * -0xb81 + 0x75 * -0x3f + 0x5c9 * 0x1); } } else _0x4568ad['_gridHighl' + 'ightSprite']['parent'] && _0x1c63a8['_gridHighl' + _0x40a6f1(0x924)]['parent']['removeChil' + 'd'](_0x49f9dd[_0x40a6f1(_0x5d7cac._0x5a48bb) + _0x40a6f1(0x924)]), _0xbf9a2c[_0x40a6f1(0x9b6) + 'ightSprite'] = null; }); }, window['deselectAl' + _0x7069f0(0x254)] = function () { const _0x10ac67 = { _0x3b2d3f: 0x9b4, _0x18cb7c: 0x928, _0x36bd9d: 0x3b2 }, _0x42eaa9 = { _0x198225: 0x306, _0x1ae337: 0x96a }, _0x29d562 = _0x7069f0; if (!SceneManager['_scene'] || !SceneManager[_0x29d562(_0x10ac67._0x3b2d3f)]['_skillUI']) return; currentSelectedSlot = null, SceneManager[_0x29d562(0x9b4)][_0x29d562(_0x10ac67._0x18cb7c)][_0x29d562(0x823)][_0x29d562(_0x10ac67._0x36bd9d)]((_0x2cf76f, _0x438d18) => { const _0x251c0e = _0x29d562; _0x2cf76f[_0x251c0e(_0x42eaa9._0x198225) + 'w'] && ('vpAyd' !== 'bOIYr' ? (_0x2cf76f['removeChil' + 'd'](_0x2cf76f['_editorGlo' + 'w']), _0x2cf76f['_editorGlo' + 'w'] = null) : _0x28281b[_0x251c0e(0x87d)]['display'] = _0x251c0e(_0x42eaa9._0x1ae337)); }); }, window['forceEnabl' + 'eDragMode'] = function () { const _0x4a0716 = { _0xe2e31e: 0x556, _0x44d63f: 0x86e }, _0x48fb1d = _0x7069f0; if (!SceneManager['_scene'] || !SceneManager['_scene'][_0x48fb1d(0x928)]) return console['error']('[Visual\x20Ed' + 'itor]\x20Scen' + 'e\x20or\x20Skill' + 'UI\x20not\x20rea' + 'dy'), ![]; if (!SceneManager['_scene']['toggleDrag' + _0x48fb1d(0x86e)]) return console['error']('[Visual\x20Ed' + _0x48fb1d(0xacd) + 'leDragMode' + _0x48fb1d(_0x4a0716._0xe2e31e) + 'able'), ![]; if (SceneManager['_scene']['_isDragMod' + 'e']) { if ('bESFK' === 'bESFK') return !![]; else _0x1bd619 = _0x98ff32['positions'][_0x5ea5c6]['x'], _0x3c2db7 = _0x4647d2[_0x48fb1d(0x8e8)][_0x483e13]['y']; } return SceneManager['_scene'][_0x48fb1d(0x9f7) + _0x48fb1d(_0x4a0716._0x44d63f)](), !![]; }, window['highlightG' + 'rid'] = function (_0x5ee36b) { const _0x11a328 = { _0x574ed3: 0x928, _0x251992: 0x57f }, _0x449158 = { _0x5e98b3: 0x620 }, _0x9fba70 = _0x7069f0; if (!SceneManager[_0x9fba70(0x9b4)] || !SceneManager['_scene'][_0x9fba70(_0x11a328._0x574ed3)]) return; const _0x3dfd45 = SceneManager['_scene']['_skillUI']['_gridBackg' + _0x9fba70(_0x11a328._0x251992)]; if (!_0x3dfd45) return; _0x3dfd45['forEach']((_0x2e5d71, _0x12dd14) => { const _0x51b20b = _0x9fba70; if (_0x2e5d71[_0x51b20b(_0x449158._0x5e98b3) + 'lder']) { if ('vKged' !== 'wcjvW') _0x2e5d71['visible'] = _0x12dd14 === _0x5ee36b; else return _0x56b93e['alwaysRun'] || _0x29330f(); } }); }, window[_0x7069f0(0xad3) + 'orLists'] = function () { const _0x1a9d92 = { _0x182b5b: 0x71a, _0x5a34b7: 0x1bd, _0x1db666: 0x963, _0x5722a0: 0x553, _0x4de323: 0x3c5 }, _0x5d898a = _0x7069f0; if (!VisualEditorWindow || VisualEditorWindow[_0x5d898a(_0x1a9d92._0x182b5b)]) return; let _0x59e4d4 = []; if (Utils['isNwjs']()) try { if (_0x5d898a(0x971) !== _0x5d898a(0x56d)) { const _0x8f27f9 = require('fs'), _0x1c476a = getConfigPath(); if (_0x8f27f9['existsSync'](_0x1c476a)) { if (_0x5d898a(0x65c) === 'MvAAg') { const _0x25d159 = loadConfigFile(); _0x59e4d4 = _0x25d159[_0x5d898a(_0x1a9d92._0x5a34b7)] || []; } else { _0x5bbca5[_0x5d898a(0x5c8)](_0x5d898a(0x52a) + _0x5d898a(0x71e) + 'ed\x20to\x20enab' + 'le\x20drag\x20mo' + 'de\x20after\x20m' + 'ultiple\x20at' + 'tempts'); return; } } } else return _0x58039d(_0x5d898a(_0x1a9d92._0x1db666) + 'ots\x20only\x20w' + _0x5d898a(0x37e) + '.js\x20(test\x20' + 'mode\x20in\x20de' + _0x5d898a(0x5ca)), null; } catch (_0x193660) { console['error'](_0x5d898a(0x1d5) + 'ting\x20edito' + _0x5d898a(0x607), _0x193660); } const _0x4cbbc8 = _0x59e4d4['map'](_0x646eae => ({ 'slotCount': _0x646eae['Slots'] ? _0x646eae['Slots']['length'] : 0x1f69 + -0x98e * -0x2 + -0x3285 })); VisualEditorWindow['updateGrid' + _0x5d898a(_0x1a9d92._0x5722a0)](_0x4cbbc8); if (currentSelectedGrid !== null) { if ('Ecsha' === 'sLORq') { const _0x28e3bd = (_0x15144b['Position'] || '0,\x200')['split'](',')[_0x5d898a(_0x1a9d92._0x4de323)](_0xed0b1 => _0x5df3ab(_0xed0b1['trim']())); _0x44beb9 = _0x28e3bd[-0x269f + -0x7b7 + -0x293 * -0x12] || _0x1ce554['boxWidth'] / (-0xc5a * 0x2 + 0x2082 + -0x7cc), _0x123fbd = _0x28e3bd[0x1c4d + -0x188 + -0x8ec * 0x3] || _0x4ecc0a['boxHeight'] / (0x1b8e + -0x24ff + 0x973); } else window['loadGridSl' + _0x5d898a(0xb43)](currentSelectedGrid); } }, window['findGridFo' + 'rSlot'] = function (_0x193ef3) { const _0x46216c = { _0x88736b: 0x801, _0x1c77a0: 0x928, _0x58c5ab: 0x749, _0x555bc6: 0x57f, _0x159c2f: 0x5b4, _0x2350c8: 0xb70, _0x14cb05: 0x983, _0x32ca3a: 0x6b2, _0x672e24: 0x3b9 }, _0x23abc0 = _0x7069f0; let _0xbe3845 = []; if (Utils['isNwjs']()) try { const _0x1cffa4 = require('fs'), _0x3a4a59 = getConfigPath(); if (_0x1cffa4[_0x23abc0(_0x46216c._0x88736b)](_0x3a4a59)) { if ('loYEI' === _0x23abc0(0x7ca)) { const _0x4df622 = loadConfigFile(); _0xbe3845 = _0x4df622['grids'] || []; } else { const _0x599792 = _0x2481c3['_scene'][_0x23abc0(_0x46216c._0x1c77a0)]; if (_0x599792['_gridBackg' + 'rounds'] && _0x599792[_0x23abc0(_0x46216c._0x58c5ab) + _0x23abc0(_0x46216c._0x555bc6)][_0x3cbbe1]) { const _0x1d7872 = _0x599792['_gridBackg' + 'rounds'][_0x4ffa10]; if (_0x467f07 === 'x') _0x1d7872['x'] = _0x40a71e; else _0x2724d1 === 'y' && (_0x1d7872['y'] = _0x48f243); } } } } catch (_0x4af236) { return console[_0x23abc0(0x5c8)]('Error\x20find' + _0x23abc0(_0x46216c._0x159c2f) + _0x23abc0(0x8cb), _0x4af236), null; } for (let _0x549231 = -0x3 * -0xc4c + -0x68b + 0x11 * -0x1c9; _0x549231 < _0xbe3845['length']; _0x549231++) { if (_0x23abc0(_0x46216c._0x2350c8) === 'fCjIV') _0x31b191['positions'] = {}; else { const _0x502aee = _0xbe3845[_0x549231]; if (_0x502aee[_0x23abc0(_0x46216c._0x14cb05)]) for (const _0x3d8b39 of _0x502aee['Slots']) { if ('CzIOi' === 'VrnIm') for (const _0x5bd3b5 in _0x46da1e) { const _0x3281cc = _0x3774d1[_0x5bd3b5]; _0x3281cc && _0x2f92fb[_0x23abc0(_0x46216c._0x32ca3a) + 'PositionFi' + 'elds'] && _0x201ae7[_0x23abc0(_0x46216c._0x32ca3a) + _0x23abc0(_0x46216c._0x672e24) + 'elds'](_0x5bd3b5, _0x3281cc['x'], _0x3281cc['y']); } else { const _0xc5aeea = _0x3d8b39['Name'][_0x23abc0(0x86c)](',')[-0x179c + 0x1 * 0x2527 + -0xd8b]['trim'](); if (_0xc5aeea === _0x193ef3) { if ('aEgRM' === _0x23abc0(0x8f8)) _0x502f4e['_isPlaceho' + 'lder'] && (_0x2bd3f0['visible'] = !![]); else return _0x549231; } } } } } return null; }, window['copyBackgr' + 'oundImage'] = function (_0x202168, _0x258007, _0x2cdb6a) { const _0x7d8109 = { _0x59650a: 0x40f, _0x362dc5: 0x67b }, _0x3f3308 = _0x7069f0; try { const _0x32fa61 = require('fs'), _0x2df390 = require('path'), _0x5092e0 = getProjectRoot(), _0x350c5f = _0x2df390['join'](_0x5092e0, _0x3f3308(_0x7d8109._0x59650a), 'system'); if (!_0x32fa61['existsSync'](_0x350c5f)) { const _0x122519 = {}; _0x122519['recursive'] = !![], _0x32fa61['mkdirSync'](_0x350c5f, _0x122519); } const _0x4a00c4 = _0x258007['replace'](/\.[^/.]+$/, ''), _0x15b55b = _0x2df390['extname'](_0x258007)['toLowerCas' + 'e'](), _0x5783b5 = _0x2df390['join'](_0x350c5f, _0x258007), _0x5a058d = _0x202168['replace'](/^data:image\/\w+;base64,/, ''), _0x15210c = Buffer['from'](_0x5a058d, _0x3f3308(_0x7d8109._0x362dc5)); _0x32fa61['writeFileS' + 'ync'](_0x5783b5, _0x15210c), _0x2cdb6a(!![], _0x4a00c4); } catch (_0x5011c7) { console['error'](_0x3f3308(0x456) + 'ing\x20backgr' + 'ound\x20image' + ':', _0x5011c7), _0x2cdb6a(![], null); } }, window[_0x7069f0(0x8e1) + _0x7069f0(0x655)] = function (_0xd6e93f, _0x441fd9) { const _0x28ccff = { _0x11b719: 0x348, _0xdbfc6c: 0x9a6, _0x36871b: 0x86c, _0x266528: 0x8e8, _0x45b3be: 0x320, _0x237f1c: 0xb22, _0x18c1f2: 0x5ff, _0x486af1: 0x22d, _0x4ed535: 0x928, _0x1af1f5: 0x887, _0x39fe81: 0x3ad, _0x314f6e: 0x509, _0x1ade92: 0x4ce, _0x3b30f9: 0x49d, _0x86b78e: 0xa4c, _0x39468c: 0x1bd, _0x1f6cd8: 0x38d, _0x7dec3c: 0x244, _0x397dfa: 0x81f, _0x197141: 0x3b0, _0x5c2a1a: 0x7dc, _0xdb45e9: 0x572, _0x8de45c: 0x302 }, _0x5a00f4 = _0x7069f0; try { if ('bRtKU' === _0x5a00f4(_0x28ccff._0x11b719)) { const _0x2af916 = loadConfigFile(); if (!_0x2af916) return; const _0x14bd6c = _0x2af916[_0x5a00f4(0x1bd)][_0xd6e93f]; if (!_0x14bd6c || !_0x14bd6c['Slots']) return; const _0x59a168 = _0x14bd6c['Slots']['map'](_0x206e57 => _0x206e57[_0x5a00f4(0x31b)]['split'](',')[0xf38 + 0x40 + -0x14a * 0xc]['trim']()), _0x191c8c = -0x2ab * 0x5 + -0x1162 + 0x1ef9, _0x205450 = _0x441fd9['padding'] || 0x423 * -0x2 + 0x36e * -0x1 + 0xbbe, _0x3ac78f = _0x441fd9['columns'] || -0x3d * 0x55 + 0x9 * -0x6a + 0x1800, _0x5ec4a9 = _0x441fd9['rows'] || -0x1aee + 0x1e3b + -0x34b; _0x14bd6c['RowColumn'] = _0x5ec4a9 + ',\x20' + _0x3ac78f, _0x14bd6c[_0x5a00f4(0x601)] = _0x205450[_0x5a00f4(_0x28ccff._0xdbfc6c)](); const _0x543c9f = (_0x191c8c + _0x205450) * _0x3ac78f - _0x205450, _0x25dde8 = (_0x191c8c + _0x205450) * _0x5ec4a9 - _0x205450; let _0x3cce50 = 0x25b4 * -0x1 + -0x4 * 0x401 + 0x35b8, _0x39d908 = -0x2 * 0x24d + -0x7 * -0x419 + -0x1815; if (_0x14bd6c['Slots']['length'] > 0x716 + -0xdcb + -0x6b5 * -0x1) { const _0x177346 = _0x14bd6c['Slots'][0xe3a + 0x1718 + -0x119 * 0x22]['Name'][_0x5a00f4(_0x28ccff._0x36871b)](',')[0x2fb * -0xa + 0x235c + -0x58e]['trim'](), _0x23e538 = 'grid_' + _0x177346; if (window[_0x5a00f4(0x7a6) + 'ns'] && window['$uiPositio' + 'ns'][_0x23e538]) _0x3cce50 = window['$uiPositio' + 'ns'][_0x23e538]['x'], _0x39d908 = window['$uiPositio' + 'ns'][_0x23e538]['y']; else { if (_0x2af916['positions'] && _0x2af916[_0x5a00f4(_0x28ccff._0x266528)][_0x23e538]) 'UoSJW' !== _0x5a00f4(_0x28ccff._0x45b3be) ? (_0x3cce50 = _0x2af916[_0x5a00f4(0x8e8)][_0x23e538]['x'], _0x39d908 = _0x2af916['positions'][_0x23e538]['y']) : (_0x1fe6b0['removeChil' + 'd'](_0x30c1c7['_editorGlo' + 'w']), _0x193ac3['_editorGlo' + 'w'] = null); else { if ('XRwTk' !== _0x5a00f4(0x824)) { const _0x3069d0 = (_0x14bd6c[_0x5a00f4(_0x28ccff._0x237f1c)] || '0,\x200')['split'](',')['map'](_0x4d2d02 => eval(_0x4d2d02[_0x5a00f4(0x610)]())); _0x3cce50 = _0x3069d0[0x6 * 0x1df + 0x4de * -0x5 + 0xd1c * 0x1] || Graphics['boxWidth'] / (0xf * 0x26b + -0x1b56 + -0x8ed), _0x39d908 = _0x3069d0[0xa0 + 0x1c30 + -0x1ccf] || Graphics[_0x5a00f4(_0x28ccff._0x18c1f2)] / (-0x922 + 0x1 * 0x1cd0 + 0x4eb * -0x4); } else _0x3e0a23['positions'] = {}; } } } const _0x38c5c7 = Math['round'](_0x3cce50 - _0x543c9f / (0x517 + -0x1c56 + -0x1 * -0x1741) + _0x191c8c / (0x1caf + 0xe02 + -0x1 * 0x2aaf)), _0x1dd6e2 = Math['round'](_0x39d908 - _0x25dde8 / (-0x1c9 * -0x6 + -0xdb * 0x3 + -0x1 * 0x823) + _0x191c8c / (0x8cc * 0x2 + -0x248e * 0x1 + 0x12f8)); !_0x2af916['positions'] && (_0x2af916['positions'] = {}); let _0x172c5f = -0x6d * -0x3d + 0xe03 + 0xc * -0x355, _0x1a7bc7 = 0x1 * 0x2187 + 0x5 * 0x2e7 + 0xb * -0x45e; for (let _0x44db43 = -0x21cd + 0x23cd + -0x200; _0x44db43 < _0x59a168['length']; _0x44db43++) { const _0x49044c = _0x59a168[_0x44db43], _0xcd45ca = _0x38c5c7 + _0x1a7bc7 * (_0x191c8c + _0x205450), _0x1e37c1 = _0x1dd6e2 + _0x172c5f * (_0x191c8c + _0x205450), _0x3de682 = {}; _0x3de682['x'] = _0xcd45ca, _0x3de682['y'] = _0x1e37c1, _0x2af916['positions'][_0x49044c] = _0x3de682; if (window['$uiPositio' + 'ns']) { if (_0x5a00f4(_0x28ccff._0x486af1) === 'XELLq') _0x320816[_0x5a00f4(0x5c8)]('Error\x20upda' + 'ting\x20edito' + _0x5a00f4(0x607), _0x5159a5); else { const _0x1d74a7 = {}; _0x1d74a7['x'] = _0xcd45ca, _0x1d74a7['y'] = _0x1e37c1, window[_0x5a00f4(0x7a6) + 'ns'][_0x49044c] = _0x1d74a7; } } if (SceneManager['_scene'] && SceneManager['_scene'][_0x5a00f4(_0x28ccff._0x4ed535)]) { const _0x317b11 = SceneManager['_scene'][_0x5a00f4(_0x28ccff._0x4ed535)]['_slots']['get'](_0x49044c); if (_0x317b11) { if ('haVwZ' === 'uWfDF') { const _0x1c49a8 = _0x40b9b0(_0x2e63be['_config'][_0x5a00f4(_0x28ccff._0x1af1f5) + 'Y'] || -0xe6a + -0x1aa2 + 0x290c); _0x28b249[_0x5a00f4(_0x28ccff._0x39fe81) + _0x5a00f4(_0x28ccff._0x314f6e)]['y'] = _0x2e459f[_0x5a00f4(0xa97)]['height'] / (-0x1326 + 0x119 * 0x3 + 0xfdd * 0x1) + _0x1c49a8; } else _0x317b11['x'] = _0xcd45ca, _0x317b11['y'] = _0x1e37c1; } } _0x1a7bc7++; if (_0x1a7bc7 >= _0x3ac78f) { if ('Ovfzw' === _0x5a00f4(0x2a1)) _0x1a7bc7 = -0x38a * 0x5 + 0xf30 + -0x2 * -0x141, _0x172c5f++; else { const _0x2ca69d = {}; _0x2ca69d['x'] = _0x13d426, _0x2ca69d['y'] = _0x2acba6, _0x32089a['$uiPositio' + 'ns'][_0x2b874c] = _0x2ca69d; } } } saveConfigFile(_0x2af916); window['highlightG' + 'rid'] && (_0x5a00f4(_0x28ccff._0x1ade92) === 'LuLQS' ? _0x26ebf6['error'](_0x5a00f4(_0x28ccff._0x3b30f9) + 'ting\x20slot:', _0x5d724c) : window[_0x5a00f4(_0x28ccff._0x86b78e) + 'rid'](_0xd6e93f)); gridSettings[_0xd6e93f] = _0x2af916[_0x5a00f4(_0x28ccff._0x39468c)][_0xd6e93f]; if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { const _0x2cc4e5 = SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds']; if (_0x2cc4e5 && _0x2cc4e5[_0xd6e93f]) { if (_0x5a00f4(_0x28ccff._0x1f6cd8) !== 'plMce') { const _0x521480 = _0x2cc4e5[_0xd6e93f]; _0x521480['_grid'] = _0x2af916[_0x5a00f4(0x1bd)][_0xd6e93f]; if (_0x521480[_0x5a00f4(0x620) + _0x5a00f4(0x4a8)]) { if ('lAasG' === 'QwaiP') _0x5c6bc1[_0x5a00f4(0x6b2) + 'PositionFi' + 'elds'](_0x3321ca, _0x75c5af['x'], _0x4b39d2['y']); else { const _0x152f5c = _0x3ac78f * _0x191c8c + (_0x3ac78f - (-0x1d9e + 0x2279 + -0x4da)) * _0x205450, _0x3d16a5 = _0x5ec4a9 * _0x191c8c + (_0x5ec4a9 - (0x375 * -0x3 + 0x95a + -0x1 * -0x106)) * _0x205450, _0x341106 = new Bitmap(_0x152f5c + (0x23 * 0x1d + -0x2 * 0xda + 0x22f * -0x1), _0x3d16a5 + (0x21fe + -0x11d8 + -0x1012)), _0x375fc4 = _0x341106['context']; _0x375fc4['strokeStyl' + 'e'] = 'rgba(255,\x20' + '215,\x200,\x200.' + '9)', _0x375fc4[_0x5a00f4(_0x28ccff._0x7dec3c)] = _0x5a00f4(_0x28ccff._0x397dfa) + '215,\x200,\x200.' + '25)', _0x375fc4['lineWidth'] = -0x250b + -0x3 * 0x536 + -0x787 * -0x7, _0x375fc4[_0x5a00f4(_0x28ccff._0x197141) + 'h']([0x630 + -0x164 + -0x4c0, -0x183d + 0x1c5 * -0x1 + 0x62 * 0x44]), _0x375fc4['fillRect'](0x1 * 0x13aa + -0x14d * -0x1b + 0x231 * -0x19, 0x1e09 + 0x1ac2 + -0x38cb, _0x152f5c + (-0x10e9 + 0x14a2 * -0x1 + 0x259f), _0x3d16a5 + (0x1 * -0x122b + 0x11ce + -0x71 * -0x1)), _0x375fc4['strokeRect'](-0x5c4 + -0x5ad * -0x1 + 0x17, -0x63 * -0xa + -0x1e7f * 0x1 + 0x1aa1 * 0x1, _0x152f5c + (-0x1a37 + 0x1 * 0x607 + -0xa22 * -0x2), _0x3d16a5 + (-0x3c1 * -0xa + -0xd6e + -0x4 * 0x602)), _0x375fc4['font'] = 'bold\x2020px\x20' + 'Arial', _0x375fc4['fillStyle'] = 'rgba(255,\x20' + _0x5a00f4(_0x28ccff._0x5c2a1a) + '0)', _0x375fc4['textAlign'] = 'center', _0x375fc4[_0x5a00f4(_0x28ccff._0xdb45e9) + 'ne'] = 'middle', _0x375fc4['fillText']('Grid\x20' + (_0xd6e93f + (0x1be5 * -0x1 + -0x1e5 + 0x1dcb)), (_0x152f5c + (0x9be * -0x2 + -0x125 * -0x13 + -0x22f)) / (0x1d0c + -0x5d1 * 0x2 + -0x1168 * 0x1), (_0x3d16a5 + (0xde3 + -0x7 * 0x23b + 0x1ce)) / (0x10f * 0x1 + -0x1 * 0x6af + 0x1 * 0x5a2)), _0x521480[_0x5a00f4(_0x28ccff._0x8de45c)] = ![], _0x521480['bitmap'] = _0x341106, _0x521480[_0x5a00f4(_0x28ccff._0x8de45c)] = !![]; } } } else return; } } VisualEditorWindow && !VisualEditorWindow[_0x5a00f4(0x71a)] && window['updateEdit' + 'orLists'](); } else _0x5ea2d9(_0x4a521c, _0x57efe2(_0x2e53a0) || 0x174c + -0xce * -0x1f + -0x303e); } catch (_0x330e77) { if ('PYdSu' !== 'PYdSu') return _0x62383a[_0x5a00f4(0x5c8)]('[Visual\x20Ed' + _0x5a00f4(0x1de) + 'e\x20or\x20Skill' + 'UI\x20not\x20rea' + 'dy'), ![]; else alert(_0x5a00f4(0xae0) + 'nging\x20slot' + 's:\x20' + _0x330e77['message']); } }, window['updateGrid' + _0x7069f0(0x4a5) + 'Image'] = function (_0x212a66, _0x57c228) { const _0x4cb8ba = { _0x54e9dc: 0x4a5, _0x1db801: 0xb2b, _0x3a1fb0: 0x59b, _0x1e1443: 0x1b5, _0xf40b26: 0xb7a, _0xdd0b10: 0x6c0, _0x1bd435: 0x7f9, _0x28d0e5: 0x77a, _0x284d10: 0xb56 }, _0x5555b5 = _0x7069f0; try { const _0x55a57c = loadConfigFile(); if (!_0x55a57c) return; const _0x225214 = _0x55a57c['grids'][_0x212a66]; if (!_0x225214) return; _0x225214[_0x5555b5(_0x4cb8ba._0x54e9dc) + 'Image'] = _0x57c228, saveConfigFile(_0x55a57c); if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { if (_0x5555b5(_0x4cb8ba._0x1db801) === 'cDXsg') { const _0x18095c = SceneManager[_0x5555b5(0x9b4)][_0x5555b5(0x928)]; if (_0x18095c['_gridBackg' + 'rounds'] && _0x18095c['_gridBackg' + 'rounds'][_0x212a66]) { const _0x50e231 = _0x18095c['_gridBackg' + _0x5555b5(0x57f)][_0x212a66]; if (_0x57c228) 'RSxhN' === 'OAsof' ? _0x4f5ef6[_0x5555b5(0x6b2) + 'PositionFi' + _0x5555b5(_0x4cb8ba._0x3a1fb0)](_0x570bac, _0x13c2fe['x'], _0x60a731['y']) : _0x50e231[_0x5555b5(0xa97)] = ImageManager[_0x5555b5(_0x4cb8ba._0x1e1443)](_0x57c228); else { if ('wIJHP' === 'vjoBW') { const _0x19c42d = _0x1ddb0f['Name']['split'](',')[-0x6b9 + 0x477 + -0x242 * -0x1]['trim'](); if (_0x19c42d === _0x13de02) return _0x5c854e; } else _0x50e231[_0x5555b5(0x50f)] && ('DMsUC' !== _0x5555b5(_0x4cb8ba._0xf40b26) ? _0x50e231['parent'][_0x5555b5(_0x4cb8ba._0xdd0b10) + 'd'](_0x50e231) : delete _0x55435e['positions'][_0x35b060]), _0x50e231['bitmap'] && (_0x5555b5(_0x4cb8ba._0x1bd435) === 'ItnuU' ? _0x50e231[_0x5555b5(0xa97)] = null : _0x141452[_0x5555b5(_0x4cb8ba._0x28d0e5)]['SpecialBeh' + 'avior'] = _0x113d2d), delete _0x18095c['_gridBackg' + 'rounds'][_0x212a66]; } } else { if (_0x57c228) { const _0x3b1741 = new Sprite(); _0x3b1741['bitmap'] = ImageManager['loadSystem'](_0x57c228); if (_0x225214['Slots'] && _0x225214['Slots']['length'] > 0x66 * 0x59 + -0x21d4 * -0x1 + 0x16a * -0x31) { if (_0x5555b5(0x3ea) !== 'CZIhy') { const _0x4d29bb = _0x225214['Slots'][-0x1e99 + 0x158e + 0x90b]['Name']['split'](',')[-0x5 * -0x4b3 + -0x8a3 + -0x2 * 0x76e]['trim'](); window['$uiPositio' + 'ns'] && window[_0x5555b5(0x7a6) + 'ns'][_0x4d29bb] && (_0x3b1741['x'] = window[_0x5555b5(0x7a6) + 'ns'][_0x4d29bb]['x'], _0x3b1741['y'] = window['$uiPositio' + 'ns'][_0x4d29bb]['y']); } else return; } _0x3b1741[_0x5555b5(0x51b)]['x'] = 0x1d12 * 0x1 + -0xc91 + -0x145 * 0xd + 0.5, _0x3b1741['anchor']['y'] = -0x15fb + -0x38 * 0x2b + -0x1 * -0x1f63 + 0.5, _0x18095c['addChildAt'](_0x3b1741, -0x477 * 0x2 + 0x2fa * -0x5 + 0x17d0), !_0x18095c['_gridBackg' + 'rounds'] && (_0x18095c[_0x5555b5(0x749) + 'rounds'] = []), _0x18095c['_gridBackg' + 'rounds'][_0x212a66] = _0x3b1741; } } } else _0x5c014e && _0x1538ea['closed'] && (_0x4d64ff(_0x4de9e7), _0x52fd80(_0x354bb5), _0x54404c()); } } catch (_0x202496) { 'HcqyL' === 'zgDJK' ? _0x3d2203['_isPlaceho' + 'lder'] && (_0x20234a[_0x5555b5(0x302)] = !![]) : alert('Error\x20upda' + 'ting\x20backg' + _0x5555b5(_0x4cb8ba._0x284d10) + _0x202496['message']); } }, window['resetGridB' + 'ackgroundP' + 'osition'] = function (_0x18b9c3) { const _0x2a4ded = { _0x591360: 0x3b2, _0x13036a: 0xa6d, _0x2f632f: 0x86c, _0x52a3f4: 0x9b4, _0x5028bf: 0x928, _0x4e81de: 0x749, _0x1042fd: 0x807 }, _0xae796d = { _0x47282c: 0xafb, _0x81fdf3: 0x3b2 }, _0x1a9546 = _0x7069f0; try { const _0x582fb3 = loadConfigFile(); if (!_0x582fb3) return; const _0x3089d6 = _0x582fb3['grids'][_0x18b9c3]; if (!_0x3089d6 || !_0x3089d6[_0x1a9546(0x983)] || _0x3089d6['Slots'][_0x1a9546(0x8b0)] === 0x5 * -0x6cd + 0x1 * -0x106 + 0x2307) { if ('kugtK' !== 'diUmB') return; else _0x343560['parent']['removeChil' + 'd'](_0x52b01d); } !_0x582fb3['positions'] && (_0x582fb3['positions'] = {}); const _0x4c8d89 = []; _0x3089d6['Slots']['forEach'](_0x144256 => { const _0x3e0bff = _0x1a9546, _0x5aadb7 = _0x144256['Name']['split'](',')[-0xe7 * -0x9 + -0x1684 + 0x43 * 0x37]['trim'](); if (_0x582fb3['positions'][_0x5aadb7]) { if (_0x3e0bff(0xafb) !== _0x3e0bff(_0xae796d._0x47282c)) { const _0x289831 = { _0x529c4e: 0x302 }; _0x1d79ac['_scene']['_skillUI']['_gridBackg' + 'rounds'][_0x3e0bff(_0xae796d._0x81fdf3)](_0x2da791 => { const _0xc3b5d5 = _0x3e0bff; _0x2da791['_isPlaceho' + 'lder'] && (_0x2da791[_0xc3b5d5(_0x289831._0x529c4e)] = ![]); }); } else _0x4c8d89['push'](_0x582fb3[_0x3e0bff(0x8e8)][_0x5aadb7]); } else { if (window['$uiPositio' + 'ns'] && window[_0x3e0bff(0x7a6) + 'ns'][_0x5aadb7]) { if ('fCcgs' === _0x3e0bff(0x76a)) _0x4c8d89[_0x3e0bff(0x9e2)](window['$uiPositio' + 'ns'][_0x5aadb7]); else { const _0x25fc1b = _0x55a0a6['hasFocus'][_0x3e0bff(0x2f4)](_0x4795b9); _0x2cce8e['defineProp' + 'erty'](_0x15d345, 'hasFocus', { 'value': function () { return _0x3e5655['alwaysRun'] || _0x25fc1b(); }, 'writable': ![], 'configurable': !![] }); } } } }); if (_0x4c8d89['length'] === 0xa9 * -0x4 + 0xa43 + 0x79f * -0x1) return; let _0x3e02ad = 0x1cf9 * -0x1 + 0x3 * -0xa3b + 0x3baa, _0x3f8767 = -0x27 * 0x29 + 0xba0 + -0x3 * 0x1cb; _0x4c8d89[_0x1a9546(_0x2a4ded._0x591360)](_0x3613be => { _0x3e02ad += _0x3613be['x'], _0x3f8767 += _0x3613be['y']; }); const _0x303f20 = Math['round'](_0x3e02ad / _0x4c8d89[_0x1a9546(0x8b0)]), _0x282354 = Math['round'](_0x3f8767 / _0x4c8d89[_0x1a9546(0x8b0)]), _0x50998a = _0x1a9546(_0x2a4ded._0x13036a) + _0x3089d6[_0x1a9546(0x983)][-0x5e * 0x1c + 0x1 * 0xca9 + -0x261]['Name'][_0x1a9546(_0x2a4ded._0x2f632f)](',')[-0x3 * 0x5c9 + -0x9d9 + -0x1b34 * -0x1]['trim'](), _0x4d2c9e = {}; _0x4d2c9e['x'] = _0x303f20, _0x4d2c9e['y'] = _0x282354, _0x582fb3[_0x1a9546(0x8e8)][_0x50998a] = _0x4d2c9e, saveConfigFile(_0x582fb3); if (window['$uiPositio' + 'ns']) { const _0x4255c6 = {}; _0x4255c6['x'] = _0x303f20, _0x4255c6['y'] = _0x282354, window['$uiPositio' + 'ns'][_0x50998a] = _0x4255c6; } if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { const _0x3be227 = SceneManager[_0x1a9546(_0x2a4ded._0x52a3f4)][_0x1a9546(_0x2a4ded._0x5028bf)]; if (_0x3be227['_gridBackg' + 'rounds'] && _0x3be227['_gridBackg' + 'rounds'][_0x18b9c3]) { if (_0x1a9546(0x3fe) === 'BaFot') { const _0x3cd390 = _0xbc462e[_0x1a9546(_0x2a4ded._0x4e81de) + 'rounds'][_0x197079]; if (_0x135a86 === 'x') _0x3cd390['x'] = _0x1fe2bd; else _0x35e2fc === 'y' && (_0x3cd390['y'] = _0x3c1840); } else { const _0x1cb07a = _0x3be227['_gridBackg' + _0x1a9546(0x57f)][_0x18b9c3]; _0x1cb07a['x'] = _0x303f20, _0x1cb07a['y'] = _0x282354; } } } if (VisualEditorWindow && !VisualEditorWindow['closed']) { const _0x50cc35 = VisualEditorWindow['document']['getElement' + 'ById']('gridPosX'), _0x1decc9 = VisualEditorWindow['document']['getElement' + 'ById']('gridPosY'); if (_0x50cc35) _0x50cc35['value'] = _0x303f20; if (_0x1decc9) _0x1decc9['value'] = _0x282354; } } catch (_0x5be733) { alert('Error\x20rese' + _0x1a9546(_0x2a4ded._0x1042fd) + 'tion:\x20' + _0x5be733['message']); } }, window[_0x7069f0(0x7a8) + 'Position'] = function (_0x4123ee, _0x4b8a0d, _0x444b55) { const _0x4a658a = { _0x149d19: 0x8b0, _0x4295b8: 0x8e8, _0x4ee2a4: 0x945, _0x4b2e7d: 0x928, _0x138014: 0x86c, _0x5806f0: 0x8e8, _0x3c6c7e: 0x7a6, _0x125a78: 0x5c8, _0x553b78: 0x9b4, _0x29640c: 0x928, _0x13c4ad: 0xabd, _0xf40276: 0x431, _0x126447: 0x838, _0x226427: 0x302, _0x3067d6: 0x749, _0xd51edf: 0x57f, _0x180610: 0x22a, _0x956ac0: 0x8d6, _0x19893b: 0x42e, _0x3dee20: 0x400, _0x84228: 0x556, _0x35ad1a: 0x365 }, _0x1436ed = _0x7069f0; try { const _0x205528 = loadConfigFile(); if (!_0x205528) return; const _0x2070d4 = _0x205528['grids'][_0x4123ee]; if (!_0x2070d4 || !_0x2070d4['Slots'] || _0x2070d4['Slots'][_0x1436ed(_0x4a658a._0x149d19)] === 0x83 * -0x5 + 0x2f0 + 0x61 * -0x1) { if (_0x1436ed(0x2c3) === 'prABw') return; else _0x5a70b4['$uiPositio' + 'ns'][_0x72f55a] = _0x4174e4['$uiPositio' + 'ns'][_0x504f12], delete _0x4ce3f2['$uiPositio' + 'ns'][_0x10d078]; } if (!_0x205528[_0x1436ed(_0x4a658a._0x4295b8)]) { if ('NfuFs' !== _0x1436ed(_0x4a658a._0x4ee2a4)) { if (!_0x215826['_scene'] || !_0x8086df[_0x1436ed(0x9b4)]['_skillUI']) return; const _0x55959b = _0x109be4[_0x1436ed(0x9b4)][_0x1436ed(_0x4a658a._0x4b2e7d)]['_slots']['get'](_0x5b8bf7); if (!_0x55959b) return; if (_0x46b773 === 'x') _0x55959b['x'] = _0x35874b; else _0x399e76 === 'y' && (_0x55959b['y'] = _0x43fe38); _0x491aab(_0xd7c1b0, _0x55959b['x'], _0x55959b['y']); } else _0x205528['positions'] = {}; } const _0x5489a0 = 'grid_' + _0x2070d4[_0x1436ed(0x983)][-0x1201 + -0xa05 + -0x2 * -0xe03]['Name'][_0x1436ed(_0x4a658a._0x138014)](',')[0xd18 * -0x2 + 0xa4 * 0x30 + -0x490]['trim'](); if (!_0x205528['positions'][_0x5489a0]) { const _0x5d976f = {}; _0x5d976f['x'] = 0x0, _0x5d976f['y'] = 0x0, _0x205528['positions'][_0x5489a0] = _0x5d976f; } if (_0x4b8a0d === 'x') _0x205528[_0x1436ed(_0x4a658a._0x5806f0)][_0x5489a0]['x'] = _0x444b55; else _0x4b8a0d === 'y' && (_0x205528[_0x1436ed(_0x4a658a._0x5806f0)][_0x5489a0]['y'] = _0x444b55); saveConfigFile(_0x205528); if (window[_0x1436ed(0x7a6) + 'ns']) { if (!window[_0x1436ed(0x7a6) + 'ns'][_0x5489a0]) { const _0x1ebfd1 = {}; _0x1ebfd1['x'] = 0x0, _0x1ebfd1['y'] = 0x0, window[_0x1436ed(_0x4a658a._0x3c6c7e) + 'ns'][_0x5489a0] = _0x1ebfd1; } if (_0x4b8a0d === 'x') _0x1436ed(0xa72) !== 'vKJKW' ? _0x16074[_0x1436ed(_0x4a658a._0x125a78)]('Error\x20upda' + 'ting\x20butto' + 'n\x20text:', _0x4d9f14) : window[_0x1436ed(0x7a6) + 'ns'][_0x5489a0]['x'] = _0x444b55; else { if (_0x4b8a0d === 'y') { if ('iAgrj' !== 'iAgrj') { const _0x11409c = _0x16cf02[_0x1436ed(_0x4a658a._0x553b78)]['_skillUI']['_slots']['get'](_0x4dd059); _0x11409c && (_0x11409c['parent'] && _0x11409c['parent']['removeChil' + 'd'](_0x11409c), _0x4f0f83['_scene'][_0x1436ed(_0x4a658a._0x29640c)][_0x1436ed(0x823)]['delete'](_0x3fb6b8)); } else window['$uiPositio' + 'ns'][_0x5489a0]['y'] = _0x444b55; } } } if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { if ('zqwmF' === 'XmcUe') { const _0x134c5d = _0x5f2d7a * _0x4ff1b2 + (_0x3e6c44 - (0x163b + -0xa8b * 0x1 + -0x1 * 0xbaf)) * _0x550d5e, _0x27ae90 = _0x4c7666 * _0xd864ae + (_0x12678e - (-0xf52 + 0x1ae0 + -0xb8d)) * _0x54f048, _0x31c256 = new _0x55d475(_0x134c5d + (-0x5 * 0x53 + -0x14b8 + -0x1 * -0x166b), _0x27ae90 + (-0x157f * 0x1 + -0x20de + -0x7 * -0x7c7)), _0x35d3fb = _0x31c256[_0x1436ed(_0x4a658a._0x13c4ad)]; _0x35d3fb['strokeStyl' + 'e'] = 'rgba(255,\x20' + '215,\x200,\x200.' + '9)', _0x35d3fb[_0x1436ed(0x244)] = 'rgba(255,\x20' + _0x1436ed(0x6c1) + '25)', _0x35d3fb['lineWidth'] = 0x23b1 * -0x1 + 0x14f + 0x2266, _0x35d3fb[_0x1436ed(0x3b0) + 'h']([-0x2ca * 0x1 + 0x259f * 0x1 + -0x22c9, -0x8b9 + -0x170c * 0x1 + 0x1fcb]), _0x35d3fb[_0x1436ed(_0x4a658a._0xf40276)](-0xb0d + -0xaf7 * -0x1 + -0x2 * -0xb, -0x7 * -0x299 + -0x12ab * 0x1 + 0x1 * 0x7c, _0x134c5d + (-0xf * -0x22a + 0x166f * 0x1 + 0x36d1 * -0x1), _0x27ae90 + (0x16d3 + 0x1bbd + -0x327c)), _0x35d3fb['strokeRect'](0x1 * -0xf42 + 0x1c1 * 0xd + -0x78b, -0x96b + -0xd7d * -0x1 + -0x412, _0x134c5d + (-0x4a5 + 0x25dc + -0x2123), _0x27ae90 + (0x1799 + 0x317 + 0x83 * -0x34)), _0x35d3fb['font'] = 'bold\x2020px\x20' + _0x1436ed(0x9b1), _0x35d3fb[_0x1436ed(0x244)] = 'rgba(255,\x20' + _0x1436ed(0x7dc) + '0)', _0x35d3fb['textAlign'] = 'center', _0x35d3fb['textBaseli' + 'ne'] = 'middle', _0x35d3fb[_0x1436ed(_0x4a658a._0x126447)]('Grid\x20' + (_0xb4f2d3 + (0xc8 * 0x24 + -0x150f + -0x8 * 0xe2)), (_0x134c5d + (0x1 * 0x25a5 + -0x175b * -0x1 + -0x3cec)) / (-0x242a + 0x21ce + 0x25e), (_0x27ae90 + (-0xa1b + 0x98b * -0x1 + 0x13ba)) / (0x1c32 + -0x1 * 0x18f5 + -0x33b)), _0x1db578['visible'] = ![], _0x388557['bitmap'] = _0x31c256, _0x549528[_0x1436ed(_0x4a658a._0x226427)] = !![]; } else { const _0xad231a = SceneManager['_scene'][_0x1436ed(_0x4a658a._0x4b2e7d)]; if (_0xad231a[_0x1436ed(_0x4a658a._0x3067d6) + _0x1436ed(_0x4a658a._0xd51edf)] && _0xad231a['_gridBackg' + 'rounds'][_0x4123ee]) { if ('nBbDO' !== _0x1436ed(0x5b0)) { _0x39904b(_0x1436ed(_0x4a658a._0x180610) + _0x1436ed(_0x4a658a._0x956ac0)); return; } else { const _0x4699ea = _0xad231a['_gridBackg' + 'rounds'][_0x4123ee]; if (_0x4b8a0d === 'x') _0x1436ed(_0x4a658a._0x19893b) === 'UxNtb' ? _0x305a6c(_0x35aaa1) : _0x4699ea['x'] = _0x444b55; else _0x4b8a0d === 'y' && (_0x4699ea['y'] = _0x444b55); } } } } if (VisualEditorWindow && !VisualEditorWindow['closed']) { const _0x25e360 = VisualEditorWindow[_0x1436ed(0x874)]['getElement' + 'ById']('gridPosX'), _0x302c4c = VisualEditorWindow['document'][_0x1436ed(_0x4a658a._0x3dee20) + 'ById']('gridPosY'); _0x25e360 && _0x4b8a0d === 'x' && (_0x25e360[_0x1436ed(0x846)] = _0x444b55); if (_0x302c4c && _0x4b8a0d === 'y') { if (_0x1436ed(0x820) === 'kIJJJ') return _0x45a775[_0x1436ed(0x5c8)]('[Visual\x20Ed' + 'itor]\x20togg' + 'leDragMode' + _0x1436ed(_0x4a658a._0x84228) + 'able'), ![]; else _0x302c4c['value'] = _0x444b55; } } } catch (_0x2464aa) { alert('Error\x20upda' + _0x1436ed(_0x4a658a._0x35ad1a) + 'position:\x20' + _0x2464aa['message']); } }, window[_0x7069f0(0x883)] = function (_0x58c56a, _0x1fd243) { const _0x589f1d = { _0x237fe9: 0x983, _0x3ea92c: 0xaae, _0x2232a7: 0x31b, _0x34bd36: 0x387, _0x42686e: 0x5bc, _0x59c341: 0x928, _0x44a2df: 0x9b4, _0x2cd438: 0xb28, _0x5abfe0: 0xb24, _0x44050d: 0x2d3, _0x4d45ae: 0x9b4, _0xd7ea46: 0x749, _0x761f66: 0x50f, _0x40b2fe: 0x823, _0x5757c5: 0x579, _0x30e05d: 0x4ea }, _0x2a06da = { _0x3336dd: 0x302 }, _0x51b523 = { _0x486c9e: 0x31b }, _0x28b2ae = _0x7069f0; try { const _0x5bfe3a = loadConfigFile(); if (!_0x5bfe3a) return; const _0x31c465 = _0x5bfe3a['grids'][_0x58c56a]; if (!_0x31c465 || !_0x31c465[_0x28b2ae(0x983)]) return; const _0x209b72 = _0x31c465[_0x28b2ae(_0x589f1d._0x237fe9)][_0x28b2ae(0xb44)](_0xad73c6 => { const _0x1bd468 = _0x28b2ae, _0x8b1b8d = _0xad73c6[_0x1bd468(_0x51b523._0x486c9e)]['split'](',')[-0x215f * -0x1 + -0x1254 + 0x1 * -0xf0b]['trim'](); return _0x8b1b8d === _0x1fd243; }); if (_0x209b72 === -(0xdb * -0x1 + -0x2 * -0xbd5 + -0x16ce)) { if ('kXdeR' !== 'kXdeR') return _0x4f83d3('Config\x20fil' + 'e\x20not\x20foun' + 'd!'), null; else return; } _0x31c465['Slots']['splice'](_0x209b72, 0x10bf + -0x2b1 * -0x2 + 0x760 * -0x3); if (_0x5bfe3a[_0x28b2ae(0x8e8)] && _0x5bfe3a[_0x28b2ae(0x8e8)][_0x1fd243]) { if ('JjZit' === _0x28b2ae(_0x589f1d._0x3ea92c)) delete _0x5bfe3a['positions'][_0x1fd243]; else for (const _0x1a0021 of _0x2dc1b0['Slots']) { const _0x8d925d = (_0x1a0021[_0x28b2ae(_0x589f1d._0x2232a7)] || '')['split'](','); if (_0x8d925d[-0x2 * -0x1099 + 0x2645 + 0x5 * -0xe4b]['trim']() === _0x4fba31) return _0x1a0021; } } saveConfigFile(_0x5bfe3a); window['$uiPositio' + 'ns'] && window['$uiPositio' + 'ns'][_0x1fd243] && (_0x28b2ae(_0x589f1d._0x34bd36) === 'RrDck' ? _0x1a0bbc['$uiPositio' + 'ns'] = {} : delete window[_0x28b2ae(0x7a6) + 'ns'][_0x1fd243]); _slotData && _slotData[_0x28b2ae(_0x589f1d._0x42686e)](_0x1fd243) && _slotData[_0x28b2ae(0x299)](_0x1fd243); if (SceneManager['_scene'] && SceneManager['_scene'][_0x28b2ae(_0x589f1d._0x59c341)]) { if ('IVicU' !== _0x28b2ae(0x55e)) { const _0x250aa8 = SceneManager[_0x28b2ae(_0x589f1d._0x44a2df)]['_skillUI']['_slots'][_0x28b2ae(_0x589f1d._0x2cd438)](_0x1fd243); if (_0x250aa8) { if (_0x250aa8['parent']) { if (_0x28b2ae(_0x589f1d._0x5abfe0) === _0x28b2ae(_0x589f1d._0x44050d)) { if (!_0x323061['_scene'] || !_0x23fc9a[_0x28b2ae(0x9b4)]['_skillUI']) return; const _0x199664 = _0x1530a2[_0x28b2ae(_0x589f1d._0x4d45ae)]['_skillUI'][_0x28b2ae(_0x589f1d._0xd7ea46) + _0x28b2ae(0x57f)]; if (!_0x199664) return; _0x199664[_0x28b2ae(0x3b2)]((_0x5f06a3, _0x1d91c9) => { const _0x27c22b = _0x28b2ae; _0x5f06a3['_isPlaceho' + 'lder'] && (_0x5f06a3[_0x27c22b(_0x2a06da._0x3336dd)] = _0x1d91c9 === _0x154e8e); }); } else _0x250aa8[_0x28b2ae(_0x589f1d._0x761f66)]['removeChil' + 'd'](_0x250aa8); } SceneManager['_scene']['_skillUI'][_0x28b2ae(_0x589f1d._0x40b2fe)]['delete'](_0x1fd243); } } else { const _0x3990a5 = _0x156ba5['_gridBackg' + 'rounds'][_0x1774e0]; _0x3990a5['_grid'] = _0xcb5aab['grids'][_0x4fe2bc], _0x3990a5[_0x28b2ae(_0x589f1d._0x5757c5)] = []; } } VisualEditorWindow && !VisualEditorWindow['closed'] && window['loadGridSl' + 'ots'](_0x58c56a); } catch (_0x117183) { if ('GgGAY' === _0x28b2ae(_0x589f1d._0x30e05d)) { _0x53f2b3['error'](_0x28b2ae(0x52a) + 'itor]\x20Scen' + 'e\x20or\x20skill' + 'UI\x20not\x20ava' + 'ilable'); return; } else console['error']('Error\x20dele' + 'ting\x20slot:', _0x117183); } }, window['createNewG' + _0x7069f0(0x9cc)] = function () { const _0x5c72b9 = { _0x2fe113: 0xa4d, _0x4edb9a: 0x983, _0x32f685: 0x4a5, _0x43de2d: 0x5c8 }, _0x3d25a1 = _0x7069f0; if (!Utils['isNwjs']()) return; try { if (_0x3d25a1(_0x5c72b9._0x2fe113) !== 'GfecP') _0x47ff33 = 0x4 * -0x193 + -0x1547 + -0x21f * -0xd, _0x2d2e2e++; else { const _0x564895 = loadConfigFile(); if (!_0x564895) { if (_0x3d25a1(0x7ea) !== 'wVXQP') _0x1451bd['error']('Error\x20gett' + 'ing\x20full\x20s' + 'lot\x20config' + ':', _0xea3836); else return; } const _0x1bc11e = {}; _0x1bc11e[_0x3d25a1(_0x5c72b9._0x4edb9a)] = [], _0x1bc11e['Controllab' + 'leViaGamep' + 'ad'] = 'true', _0x1bc11e[_0x3d25a1(_0x5c72b9._0x32f685) + 'Image'] = ''; const _0x30d278 = _0x1bc11e; _0x564895['grids']['push'](_0x30d278), saveConfigFile(_0x564895), VisualEditorWindow && !VisualEditorWindow[_0x3d25a1(0x71a)] && window[_0x3d25a1(0xad3) + 'orLists'](); } } catch (_0x2098c2) { 'zVtyC' !== _0x3d25a1(0x48a) ? console[_0x3d25a1(_0x5c72b9._0x43de2d)](_0x3d25a1(0x49d) + _0x3d25a1(0x2aa), _0x2098c2) : _0x480e76['Slots'][_0x3d4fed] = _0x1529db; } }, window['deleteGrid'] = function (_0x5d1c5c) { const _0x3bf4bb = { _0x584310: 0x83d, _0x418a3f: 0x6ec, _0x328e09: 0x1bd, _0x71e856: 0x22a, _0x426b33: 0x6d1, _0x37c9ce: 0x8e8, _0x5155e2: 0xac5, _0x5a03f6: 0x928, _0x1537ad: 0x71a, _0x582835: 0xa23, _0x2b4b33: 0x848, _0x23343c: 0x2aa }, _0x11e785 = { _0x4640ee: 0x928, _0xd6f3a7: 0xb28, _0x781163: 0x50f, _0x3b314f: 0x823, _0x3e1bdb: 0x299 }, _0x27139e = { _0x51f64e: 0x4a8, _0x19f33a: 0xabd, _0x1b1fc0: 0x81f, _0x2b978a: 0x6c1, _0x31ad1c: 0x2dd, _0x244e9c: 0x297, _0xe9a994: 0x572, _0x23e1f3: 0x7a6 }, _0xf22138 = _0x7069f0; if (!Utils['isNwjs']()) return; try { const _0x220722 = loadConfigFile(); if (!_0x220722) { if (_0xf22138(_0x3bf4bb._0x584310) !== _0xf22138(0x83d)) { if (!_0x27652b['isNwjs']()) return ![]; const _0x20af2a = _0x5d2a2c('fs'), _0x179c69 = _0x2b098e(); try { return _0x20af2a['writeFileS' + _0xf22138(0x28c)](_0x179c69, _0xce23e['stringify'](_0x36a2c7, null, 0x1045 * -0x1 + -0x1f03 * 0x1 + 0x2f4a), 'utf8'), !![]; } catch (_0x181a06) { return _0x23cf5b['error']('[Hotbar]\x20E' + _0xf22138(_0x3bf4bb._0x418a3f) + 'g\x20config:', _0x181a06), ![]; } } else { alert('Config\x20fil' + 'e\x20not\x20foun' + 'd!'); return; } } const _0x1e836c = _0x220722[_0xf22138(_0x3bf4bb._0x328e09)][_0x5d1c5c]; if (!_0x1e836c) { alert(_0xf22138(_0x3bf4bb._0x71e856) + 'ound!'); return; } const _0x551a88 = _0x1e836c['Slots'] ? _0x1e836c['Slots']['map'](_0x57793f => _0x57793f['Name'][_0xf22138(0x86c)](',')[0x13 * 0x1ca + 0x407 * 0x2 + -0x45 * 0x9c]['trim']()) : []; _0x220722[_0xf22138(_0x3bf4bb._0x328e09)][_0xf22138(_0x3bf4bb._0x426b33)](_0x5d1c5c, 0x20a1 + -0xeb9 + 0x1 * -0x11e7); if (_0x220722[_0xf22138(_0x3bf4bb._0x37c9ce)] && _0x551a88['length'] > -0x1 * -0x47 + 0xf4b + -0x7c9 * 0x2) { if ('xoKQk' === 'nCNda') _0x1d2a1d[_0xf22138(0x1a0)](_0x21a339, _0x931a0a), _0x2404e5['delete'](_0x404b4a); else { _0x551a88[_0xf22138(0x3b2)](_0x356487 => { const _0x74b739 = _0xf22138; 'eCdfv' !== 'WPORk' ? _0x220722[_0x74b739(0x8e8)][_0x356487] && delete _0x220722['positions'][_0x356487] : _0x308002['_isPlaceho' + _0x74b739(0x4a8)] && (_0x4feb81['visible'] = ![]); }); if (_0x551a88['length'] > -0xc2e + -0xd * -0x21f + -0x233 * 0x7) { if ('ebkaF' !== _0xf22138(_0x3bf4bb._0x5155e2)) { const _0x2818db = 'grid_' + _0x551a88[0x1335 + 0xb05 * -0x1 + -0x830]; _0x220722['positions'][_0x2818db] && delete _0x220722['positions'][_0x2818db]; } else { const _0x6aebcb = _0x1105f6[_0xf22138(0x9b4)][_0xf22138(_0x3bf4bb._0x5a03f6)]; if (_0x6aebcb['_gridBackg' + 'rounds'] && _0x6aebcb[_0xf22138(0x749) + 'rounds'][_0x99ec08]) { const _0x2954a1 = _0x6aebcb['_gridBackg' + _0xf22138(0x57f)][_0x4741b0]; _0x2954a1['x'] = _0x31accf, _0x2954a1['y'] = _0x27cc5a; } } } } } saveConfigFile(_0x220722), _0x551a88['forEach'](_0x10bfa5 => { const _0x4f446f = _0xf22138; if ('cfOwd' !== 'cfOwd') { const _0x43520e = _0x3097ce['_scene']['_skillUI']['_gridBackg' + 'rounds']; if (_0x43520e && _0x43520e[_0x58cd90]) { const _0x2f1195 = _0x43520e[_0x52db84]; _0x2f1195['_grid'] = _0x19604e['grids'][_0x3f1b2c]; if (_0x2f1195['_isPlaceho' + _0x4f446f(_0x27139e._0x51f64e)]) { const _0xf3bd4e = _0x5c5bab * _0x5c6205 + (_0x38a902 - (-0xe03 + -0x10ef + 0x13 * 0x1a1)) * _0x107f69, _0x96fe7f = _0x38dd57 * _0x5e32d7 + (_0x487ea3 - (-0x48 * -0x18 + 0x9bb * -0x3 + 0x1672)) * _0x3024e8, _0x5d1f0f = new _0x4adb87(_0xf3bd4e + (-0x1822 + -0x1d2b + 0x3561), _0x96fe7f + (-0x1d * 0xb5 + 0xf2f + 0x566 * 0x1)), _0x19211e = _0x5d1f0f[_0x4f446f(_0x27139e._0x19f33a)]; _0x19211e[_0x4f446f(0x654) + 'e'] = _0x4f446f(_0x27139e._0x1b1fc0) + _0x4f446f(_0x27139e._0x2b978a) + '9)', _0x19211e['fillStyle'] = 'rgba(255,\x20' + _0x4f446f(0x6c1) + '25)', _0x19211e['lineWidth'] = -0x1a6a + -0x6 * -0x4f5 + -0x350, _0x19211e[_0x4f446f(0x3b0) + 'h']([0xac * -0x39 + -0x1 * 0xa65 + 0x30bd, -0xba8 + 0x2 * 0xf31 + -0x12b4]), _0x19211e[_0x4f446f(0x431)](0x1ba2 + -0x2f5 * -0x8 + -0xca * 0x41, 0x1eff + 0xaeb + -0x29ea, _0xf3bd4e + (-0x3f7 * -0x7 + 0x72a * 0x1 + 0x3df * -0x9), _0x96fe7f + (0x1 * 0x6a2 + 0x1cca + -0x8d6 * 0x4)), _0x19211e['strokeRect'](0x1ae0 + 0x11b * -0x1 + -0x19c5, 0x7dd * -0x1 + -0x89 * -0x1 + 0x754, _0xf3bd4e + (0x5 * -0x704 + -0x2 * -0xfa3 + 0x7 * 0x8e), _0x96fe7f + (-0x1646 * -0x1 + -0xfef + -0xe5 * 0x7)), _0x19211e[_0x4f446f(_0x27139e._0x31ad1c)] = _0x4f446f(_0x27139e._0x244e9c) + 'Arial', _0x19211e['fillStyle'] = 'rgba(255,\x20' + '215,\x200,\x201.' + '0)', _0x19211e['textAlign'] = 'center', _0x19211e[_0x4f446f(_0x27139e._0xe9a994) + 'ne'] = 'middle', _0x19211e[_0x4f446f(0x838)]('Grid\x20' + (_0x4f1967 + (-0x2f * 0x39 + -0x1 * 0x1cb3 + 0x272b * 0x1)), (_0xf3bd4e + (-0x4 * -0x5c0 + -0x48 * -0x18 + -0x1dac)) / (-0x11d9 + -0x26d7 + 0x38b2), (_0x96fe7f + (-0x1672 + 0x1d79 + -0x6f3 * 0x1)) / (0x254b + -0xb * -0x343 + 0x492a * -0x1)), _0x2f1195[_0x4f446f(0x302)] = ![], _0x2f1195['bitmap'] = _0x5d1f0f, _0x2f1195['visible'] = !![]; } } } else { window['$uiPositio' + 'ns'] && window[_0x4f446f(0x7a6) + 'ns'][_0x10bfa5] && delete window[_0x4f446f(_0x27139e._0x23e1f3) + 'ns'][_0x10bfa5]; if (_slotData && _slotData['has'](_0x10bfa5)) { if (_0x4f446f(0x19e) === _0x4f446f(0x2e1)) return; else _slotData[_0x4f446f(0x299)](_0x10bfa5); } } }); if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { _0x551a88['forEach'](_0x1ae623 => { const _0x8925bb = _0xf22138, _0x54228f = SceneManager['_scene'][_0x8925bb(_0x11e785._0x4640ee)]['_slots'][_0x8925bb(_0x11e785._0xd6f3a7)](_0x1ae623); _0x54228f && ('QolxL' !== 'QolxL' ? _0x5231ba[_0x8925bb(0x306) + 'w'] && (_0x355dec[_0x8925bb(0x6c0) + 'd'](_0x1f2086['_editorGlo' + 'w']), _0x22e4ed['_editorGlo' + 'w'] = null) : (_0x54228f['parent'] && _0x54228f[_0x8925bb(_0x11e785._0x781163)]['removeChil' + 'd'](_0x54228f), SceneManager['_scene']['_skillUI'][_0x8925bb(_0x11e785._0x3b314f)][_0x8925bb(_0x11e785._0x3e1bdb)](_0x1ae623))); }); if (SceneManager['_scene']['_skillUI'][_0xf22138(0x749) + 'rounds'] && SceneManager[_0xf22138(0x9b4)][_0xf22138(0x928)]['_gridBackg' + _0xf22138(0x57f)][_0x5d1c5c]) { const _0x939d46 = SceneManager[_0xf22138(0x9b4)]['_skillUI'][_0xf22138(0x749) + 'rounds'][_0x5d1c5c]; _0x939d46 && _0x939d46[_0xf22138(0x50f)] && _0x939d46['parent']['removeChil' + 'd'](_0x939d46), delete SceneManager['_scene']['_skillUI']['_gridBackg' + _0xf22138(0x57f)][_0x5d1c5c]; } } if (VisualEditorWindow && !VisualEditorWindow[_0xf22138(_0x3bf4bb._0x1537ad)]) { window['updateEdit' + _0xf22138(0x6bf)](); const _0x1c860c = VisualEditorWindow['document']['getElement' + 'ById']('properties' + 'Panel'); _0x1c860c && (_0x1c860c['innerHTML'] = '<div\x20class' + '=\x22empty-st' + 'ate\x22>Grid\x20' + _0xf22138(_0x3bf4bb._0x582835) + 'elect\x20anot' + 'her\x20grid\x20t' + _0xf22138(0x8c1) + 'iv>'); const _0x2e5ed6 = VisualEditorWindow[_0xf22138(0x874)]['getElement' + 'ById'](_0xf22138(0x535) + 'w'); _0x2e5ed6 && (_0x2e5ed6['style']['display'] = 'none'); } } catch (_0x4ac9f0) { console['error'](_0xf22138(_0x3bf4bb._0x2b4b33) + _0xf22138(_0x3bf4bb._0x23343c), _0x4ac9f0), alert(_0xf22138(_0x3bf4bb._0x2b4b33) + 'ting\x20grid:' + '\x20' + _0x4ac9f0[_0xf22138(0xb0e)]); } }, window['updateGrid' + 'GamepadCon' + _0x7069f0(0x60e)] = function (_0x5777b4, _0xea796e) { const _0x325894 = { _0x3cd1f7: 0xb99 }, _0x47cfe0 = _0x7069f0; if (!Utils['isNwjs']()) return; try { const _0x2c32a2 = loadConfigFile(); if (!_0x2c32a2 || !_0x2c32a2['grids']) return; const _0x403aab = _0x2c32a2['grids'][_0x5777b4]; if (!_0x403aab) return; _0x403aab['Controllab' + _0x47cfe0(_0x325894._0x3cd1f7) + 'ad'] = _0xea796e ? 'true' : 'false', saveConfigFile(_0x2c32a2); } catch (_0x5a4eb1) { } }, window['resetAllPo' + 'sitions'] = function () { const _0x4a2ae3 = { _0x57e171: 0x1fe }, _0x280437 = _0x7069f0; if (!window['$uiPositio' + 'ns']) return; window['$uiPositio' + 'ns'] = {}, saveHotbarPositions({}), SceneManager[_0x280437(0x35e)](SceneManager['_scene'][_0x280437(_0x4a2ae3._0x57e171) + 'r']); }, window['createNewS' + 'lot'] = function (_0xe9e999, _0x210b49) { const _0x87bb6b = { _0x2ba38d: 0x983, _0x1048ce: 0x8e8, _0xeb4369: 0x928, _0x5e042a: 0x928, _0x4fadf5: 0x522, _0x58610a: 0x505, _0x17b7e1: 0x1bd }, _0x488218 = _0x7069f0; try { const _0x5523d8 = loadConfigFile(); if (!_0x5523d8 || !_0x5523d8[_0x488218(0x1bd)][_0xe9e999]) { alert('Invalid\x20gr' + 'id\x20index!'); return; } const _0x563e0c = _0x210b49['name']['split'](',')[0x1 * -0x1265 + 0x1cc + 0x25f * 0x7]['trim'](), _0x2b7143 = _0x5523d8[_0x488218(0x1bd)][_0xe9e999]; if (!_0x2b7143['Slots']) _0x2b7143['Slots'] = []; const _0x4f728d = _0x2b7143[_0x488218(0x983)]['findIndex'](_0xf942f9 => { const _0x1283d4 = _0xf942f9['Name']['split'](',')[0x1 * -0x14e3 + 0x3 * 0x817 + 0x362 * -0x1]['trim'](); return _0x1283d4 === _0x563e0c; }), _0x1afb94 = { 'Name': _0x210b49['name'], 'BackgroundImage': _0x210b49['background' + _0x488218(0xb55)] || '', 'Button': _0x210b49['button'], 'TextOffsetY': _0x210b49['textOffset' + 'Y']['toString'](), 'SpecialBehavior': _0x210b49['specialBeh' + 'avior'] }; _0x4f728d >= -0x1 * 0x1b8e + -0x5e7 + -0x1 * -0x2175 ? _0x2b7143[_0x488218(_0x87bb6b._0x2ba38d)][_0x4f728d] = _0x1afb94 : _0x2b7143['Slots']['push'](_0x1afb94); !_0x5523d8['positions'] && (_0x5523d8[_0x488218(_0x87bb6b._0x1048ce)] = {}); const _0x24af07 = {}; _0x24af07['x'] = _0x210b49['x'], _0x24af07['y'] = _0x210b49['y'], _0x5523d8['positions'][_0x563e0c] = _0x24af07, saveConfigFile(_0x5523d8); if (!window['$uiPositio' + 'ns']) { if (_0x488218(0x58f) === 'PHnfF') { const _0x19659a = _0xc63f92[_0x488218(0x31b)]['split'](',')[-0x1a * 0x100 + -0x730 + 0x76 * 0x48][_0x488218(0x610)](); return _0x19659a === _0x3aff9d; } else window['$uiPositio' + 'ns'] = {}; } const _0x7aed53 = {}; _0x7aed53['x'] = _0x210b49['x'], _0x7aed53['y'] = _0x210b49['y'], window['$uiPositio' + 'ns'][_0x563e0c] = _0x7aed53; if (SceneManager[_0x488218(0x9b4)] && SceneManager['_scene'][_0x488218(_0x87bb6b._0xeb4369)]) { const _0x48b34e = SceneManager['_scene'][_0x488218(_0x87bb6b._0x5e042a)]; let _0x542a2e = _0x48b34e['_slots']['get'](_0x563e0c); if (!_0x542a2e) _0x542a2e = new Sprite_SkillSlot(_0x1afb94), _0x542a2e['x'] = _0x210b49['x'], _0x542a2e['y'] = _0x210b49['y'], _0x48b34e['_slots']['set'](_0x563e0c, _0x542a2e), _0x48b34e['addChild'](_0x542a2e); else { _0x542a2e['_config'] = _0x1afb94, _0x542a2e['x'] = _0x210b49['x'], _0x542a2e['y'] = _0x210b49['y']; if (_0x542a2e['createBack' + 'ground']) _0x542a2e['createBack' + 'ground'](); if (_0x542a2e['positionBu' + 'ttonText']) _0x542a2e[_0x488218(0x234) + 'ttonText'](); if (_0x542a2e['refreshBut' + 'tonText']) _0x542a2e['refreshBut' + _0x488218(_0x87bb6b._0x4fadf5)](); } if (_0x48b34e['_gridBackg' + 'rounds'] && _0x48b34e['_gridBackg' + 'rounds'][_0xe9e999]) { if ('ApOKr' === _0x488218(_0x87bb6b._0x58610a)) { const _0x5ab673 = _0x14312a(); _0x5ee82c = _0x5ab673['grids'] || []; } else { const _0x206537 = _0x48b34e['_gridBackg' + _0x488218(0x57f)][_0xe9e999]; _0x206537[_0x488218(0x209)] = _0x5523d8[_0x488218(_0x87bb6b._0x17b7e1)][_0xe9e999], _0x206537['_gridSlots'] = []; } } } VisualEditorWindow && !VisualEditorWindow['closed'] && window['updateEdit' + 'orLists'](); } catch (_0x62206c) { console['error']('Error\x20crea' + 'ting\x20slot:', _0x62206c); } }; function saveSlotPosition(_0x148a6e, _0x3a00cc, _0x57f381) { const _0x316f37 = { _0x2403f6: 0x7a6 }, _0x284138 = _0x7069f0; !window[_0x284138(0x7a6) + 'ns'] && (window['$uiPositio' + 'ns'] = {}); const _0x48b558 = {}; _0x48b558['x'] = _0x3a00cc, _0x48b558['y'] = _0x57f381, window[_0x284138(_0x316f37._0x2403f6) + 'ns'][_0x148a6e] = _0x48b558, window[_0x284138(0x3bf) + 'UIPosition' + 's'] && window['saveHotbar' + 'Positions'](window['$uiPositio' + 'ns']); } let clickStartPos = null, clickStartTime = -0x1f * 0x139 + 0x25 * 0x5 + 0x252e; function _0x428e() { const _0x35e4f1 = ['+MIVJbKYDH', 'ut\x20=\x20docum', 'JuUwVkEMZT', '--surface-', '6S7qX6S1ct', 'hRxMIuMBI6', 'N4aht+OXzL', 'MzdFPF/ZLl', 'fyxdh/8FzK', 'xjrCtjzewN', 'FoB1c/525a', 'ltbgJ3lqtk', 'elE1uDGuyA', 'CXBIWXMAAA', 'EpvEW1KL1X', 'V/0Yuhl9GB', 'z42RwuxNq7', 'gntLVTqLfv', 'id=\x22proper', 'gImageFile', 'JtnZSMwETA', 'E1omcRKZx9', '\x20\x20\x20<label>', 'GXIpRqGW9Q', 'WiOJ0b01F1', 'const\x20file', 'n7EDeurGq7', 'getGridInf', '\x20\x20\x20\x20\x20\x20\x20\x20it', 'jqoRRCfzN2', 'lay\x20Equipp', 'iKmqsiHHeE', 'o2tSJQYN91', '8bdn16jXbB', 'iWMK6WBjDi', 'pdate\x20curr', 'gW5OCzM1le', 'FBVRrFQgWx', 'HMQl4HlQKh', 'r73rqfV49J', 'dKTiCKItMS', '4wUsMsHkJs', '7EaZ9y5duK', '\x20\x20\x20\x20z-inde', '\x20\x20const\x20pa', 'ient(to\x20bo', 'urface);\x0a\x20', 'ZhFwBPqc3D', 'kQGjaM2K5a', 'glSHVr6rjp', 'hhKuH', '#555;\x0a\x20\x20\x20\x20', 'Tz7o1umczi', '\x20\x271\x27;\x0a\x0a\x20\x20\x20', 'isNwjs', 'G2UAJEP+Av', 'AIujQgueVo', '\x20\x20\x20\x20\x20<div\x20', '\x20\x20\x20\x20\x20\x20cons', 'CpRUDKpiDo', 'e78sYQ6npQ', 'Ipwxc9fPMD', 'YzGB6maVMG', 'ect\x20{\x0a\x20\x20\x20\x20', 'or:\x20var(--', 'rq6Lhd+o9+', 'HRs/G2xHWm', 'v4KNwgrBYe', 'nction(suc', '7+LtssLlsM', 'L2kHUz4OaV', '5jgaegTDAm', '\x20\x20\x20current', 'UIPosition', 'o5mnOAep5o', '\x20\x20\x20\x20\x20\x20\x20if\x20', 'this.heigh', 't.createEl', 'Wzi65TiXgE', 'ut\x20extensi', 'ue\x20=\x20Math.', 'QDH9hM7DxA', 'qeUgncbgni', 'etY)\x20||\x200;', 'op:\x2050%;\x0a\x20', 'sDReVromaT', 'NNiiBJCjRC', '37/bghG2oL', '\x20\x20\x20\x20\x20color', 'qbP+VfvbJY', '37L84Ktndt', 'qYzxbWBUKm', 'ting\x20slot\x20', 'P87EXB/j7R', 's3Xa5raxrM', 'IHTZwRIur4', 'empty-stat', 'ChhBgSsBdE', 'eZ5HbDGBhW', '9\x2025%,\x20#0d', 'UyoSDSZEn2', '8sNqOhbKqw', '\x20\x20\x20\x20\x20\x20.del', 'UnC+rDds6t', '\x200.15s;\x0a\x20\x20', 'm\x20=\x20\x27trans', 'SVQkCQF1PH', '5nnjOwpZfG', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', '0;\x20margin-', 'Uwt8B9HuNh', 'OOzzZGnmZd', 'wbwtkEcdiu', 'Pgo7bt15mm', 'gkFEj2RDqG', 'hNvk2HzVNb', 'e0zUOdV73J', 'height', 'Slot\x20=\x20slo', '5tbvonRi3S', '19/crN0y3J', 'RRQUMTN/Em', 'O1w3D93Q6s', 'YCAgcGBv7+', '/AdwNt4oVu', '/J3p2BM9YM', 'VUGth', 'or\x20future\x20', 'set', '\x20backgroun', 'cFym97rs0H', 'PXR4eHjMb+', '\x27\x20+\x20fullCo', 'DMqsKGdo7O', 'T7oZNNyvIe', 't>\x0a\x20\x20\x20\x20\x20\x20\x20', 'YykC9kYaTh', '1Jd3358H0X', 'indow.upda', '+zIAwL+Pft', '2EMd7qxMlG', 'KR1lTa8clq', 'ntValue\x20=\x20', 'FAh3fxQNlE', '+uRTXCutUw', 'adding:\x200;', 't.style.le', 'bOctZ5mHe4', '8Lj3LD9K+h', 'loadSystem', 'pgjZjea70y', '27hVI50TvC', 'aLejnA2EaR', 'yA81kjYM4H', '9sPfAWyZvS', '6lcyzNkxQB', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'grids', '1sd9skpCWA', 'MPvLoBo3ba', 'label>Text', '\x20\x20\x20\x20\x20</div', 'name\x27;\x0a\x20\x20\x20', 'id=\x22slotsL', '\x20rgba(0,0,', '/MeFusko+e', 'Y\x20||\x200}\x22\x20\x0a', 't-size:\x2011', 'g6SLW/vXku', 'Zk4MmgvBYD', '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20', 'blim3XOZ7X', 'uHAfK+g9Zo', 'Grid,\x20isCo', 'nxMGbRNk6f', 't.remove(\x27', 'r+cBmKcZGe', 'M/RLfwvcoT', 'crVIKUjF4o', 'ar-gradien', 'ndow.opene', 'Error\x20upda', '\x20\x20\x20\x20\x20\x20max-', 'nd:\x20var(--', '+Pl/VTrihb', '.height\x20=\x20', '\x20\x20\x20\x20<div\x20c', 's:\x20var(--r', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'C3v5hy/9wy', 'itor]\x20Scen', 'ugY7+QVw/R', 'ass=\x22toolb', 'UsqloNZXO8', 'ieCdWQC7Fc', 'bSQqSTeelp', '87e+8fjxkW', 'idGamepadC', 'xrwcdqW9eh', 'liW9e8EVTl', 'aGPfFxHAEi', 'lots:', '1KjVWNz4fr', 'cVZVXGqp/y', 'wAjCfnOp/t', 'wJoQZhYyu1', '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20', '/o31uY290N', 'element.cl', '9o7cuJqcJ9', 'vHSgqokcHt', 'K0LeWzx++5', '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20', 'hyFl+lPJhw', 'cGFZTADZwU', 'oG1o4RAbPz', 'JsGtsE4LNE', 'N2oxBIJADV', 'credit\x20a:h', 'n-left:\x208p', 'undImage(i', 'Fr01r56LEW', 'constructo', '/OsCUccOSV', 'div\x20class=', 'ting\x20prope', '3gQagDHIy7', '8dgGNLti2f', '\x20\x20\x20\x20\x20\x20.fie', '\x20\x20\x20\x20\x20\x20\x20\x20bo', 'iewSlot.st', '8mXzqDnuvE', 'fmVue+zovN', '_grid', 'UIw2HbtMA9', 'oFFEl0md5N', 'WsYFQWK4Rb', '/02UwNb/Dt', '0rCjTN8DOa', 'A4IDNgdcD9', 'Mujcx', 'sparent\x2030', 'MqiB+I5Gck', 'JQhSxJtZjv', 'KIUjM', 'BhEXDSCLa1', 'xgNWeMeizr', 'lBehavior\x20', 'QA8itGV/Dn', 'dImage)\x20{\x0a', 'GxbpWNvNDv', 'miVxnBbnrK', 'ndex)\x20{\x0a\x20\x20', 'gONoAEMnAB', 'ppendChild', 'ARrsJtGIQR', 'hiInVDrarK', 'E1ukAFc+a/', 'c14YatLsjE', 'f\x20(window.', 'ertyDescri', 'ShtNWvHKz/', 'ssPSQqEQns', 'alwaysRun', '0eyx72ceae', 'r-radius:\x20', 'Grid\x20not\x20f', 'opacity\x200.', 'bXMKgjYUCf', 'eEmAQ', 'pfs+EL9Ye8', '\x20\x20\x20justify', 'ity:\x200.85;', 'Q0S3YSjXKa', '3qc8KWdaSY', 'me;\x0a\x20\x20\x20\x20\x20\x20', 'positionBu', 'g19ZkHCVlk', '5RofPwNNtA', 'und!', '\x20\x20\x20\x20functi', 'ner\x20&&\x20win', 'FMUnuQ5fjG', 'lue))\x22>\x0a\x20\x20', 'Kppo2evPke', 'rktVCQJ/fc', 'rgin-botto', 'chEnRjNu7K', 'UCCV8nF9bP', 'tsmb5vQF/+', 'ateGridPos', 'on>\x0a\x20\x20\x20\x20\x20\x20', 'fillStyle', 'lmHieclL75', '47YRYPSPka', 'jx33SlKE+z', 'w2aow8YaEW', 'kDCgHJaZJQ', 'naNgs+u1Ym', 'r</label>\x0a', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'tGT+3uEL3e', '0Sna6aLTDw', '\x20\x20padding:', 'O+ytmr+s6e', '\x20\x20\x20\x20\x20\x20\x20\x20if', 'y8bJJHCKxd', ')\x20{\x0a\x20\x20\x20\x20\x20\x20', 'lSlots', 'd()\x20{\x0a\x20\x20\x20\x20', '3DLAZhh1zK', 'es(slotNam', 'b0XXGn2z5r', 'yle.flex\x20=', '=\x20e.target', 'SHsbvDp3w1', 'f66JZl+wgA', '78TcweDIw2', 'yCGMgL2hOE', 'amL1uTrse6', 'UBpEGSdTSA', '8v+ejMkcI3', 'LeIVSItFlg', 'iv>\x0a\x20\x20\x20\x20\x20\x20', 'g+wmaQxMqi', 'ive\x20{\x0a\x20\x20\x20\x20', 'W0YSFUryHQ', '0p6MwhOja7', 'oqnLY335BP', 'eInt(this.', 'aywUYbdcNq', 'geInput.va', 'SYm7Xtc8IK', 'Bn6pfi1+4/', 'getFullSlo', 'defineProp', '\x20\x20\x20\x20\x20\x20retu', 'near-gradi', 'klWyD', 'refresh', 'V5dDGWTR89', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', 'dex;\x0a\x20\x20\x20\x20\x20', 'dirname', 'rjjjY88eqP', 'qYvlTdAFju', 'Zqe6sw+ZAO', 'AGYE1qkTtJ', '(--text);\x0a', 'CjWlENt9l2', '///7JXTUoA', '0xn8SsSrHW', '9eonyyX', 'de\x20after\x20m', '/js/', 'H6B4sbzsPq', 'e+DmH3GmoC', 'aZ2oXQFCIx', 'label>\x0a\x20\x20\x20', '\x20min-width', 'wBNBYgVkVU', 'qlE2du1eD+', 'oXT+yS0S4M', '\x20\x20\x20\x20\x20\x20\x20\x20\x20<', 'ync', 'ep0JXr10lK', '=\x221\x22\x20max=\x22', '\x20\x20\x20\x20\x20\x20\x20col', 'iF/ydXb9I3', '\x20\x20<div\x20cla', '2}\x22\x20min=\x221', 'ILYHXBERhp', '+5s991HtoN', '0Az5wNrHm3', '+eIay+L9pf', 'bold\x2020px\x20', 'uLm5ZeO6dR', 'delete', 'otProperti', 'bMcnuRDdtj', 'cess,\x20imag', 'rM4WqK+7/Q', 'e5NvBAqccN', '3vwF8/FIl4', '53DOLG8+Bc', 'Ovfzw', 'hR5QFobIgP', 'Y3GryLmBQZ', 'Y68VplcVbF', ':image/png', 'VPbYNdmICt', '\x20\x20\x20\x20\x20\x20\x20\x20\x20n', '3KH8V2Q4NI', 'ttDD4OPP1h', 'ting\x20grid:', 'yle.width\x20', 'jyPiM', 'ghG+/RPJhL', '6Non8qvwno', 'f9YMWShwkJ', 'WLYdZNlVon', 'QbtsftGSej', '/TlK9rYPO4', 'IOTku4sEYx', 'ss=\x22scroll', 'o;\x22>\x0a\x20\x20\x20\x20\x20', 'epq+1Xv7WK', 'thMuHaH/8w', '0ko+F0EGSS', 'zN3Ufrnr34', 'VxIOg8NYMN', 'ss=\x22sideba', 'geFile(inp', 'le=\x22margin', 'eyboard)</', 'OHp5RHBQAv', 'ePvHmEuuoo', 'ls1dX15dkA', '\x20\x20\x20\x20\x20funct', 'prABw', '\x20\x20\x20\x20<optio', 'AWgii38glb', 'ent.getEle', 'nGFNf', 'ZWJSwJjP1j', '/kxAM5UTDF', 'm())\x20:\x20[pr', 'Ax23cXnXdO', 'EUtQ7AQ3hd', 'BwB3qwHVBF', 'SLFyeLopuz', 'ePTlc7TRJ/', '\x20=\x20e.targe', 'p7meZxGtoS', 'KYVe4S+ee4', 'lUbEh', 'yHGsC4bpAI', 'flex:\x201;\x0a\x20', '\x20class=\x22to', 'qoVbs', 'eX7vDs42gQ', 'n3pj5uf3jz', 'sVg6oieRXV', 'cQATrsn/I7', 'bIGYO', 'font', 'Vxa37Gben6', 'MfDtsIrhyf', 'ef2xXrd9hi', 'CbEFd', '+pB40Apjhz', 'v\x20id=\x22grid', '/tMaQSimJu', 'div>\x0a\x20\x20\x20\x20\x20', 'fsWsXDiou2', 't\x20all\x20slot', '2zLf06xlgc', 'r\x20=\x20new\x20Fi', 'VW6qfFeVVn', 'Config\x20fil', 'AdUEIADjta', 'nfig\x20&&\x20fu', 'ansparent;', 'sdxjPyX6vj', '\x201.5;\x0a\x20\x20\x20\x20', 'skdiwzIbpw', 'nameKb', 'w\x20FileRead', 'bind', '\x20\x20const\x20el', 'ption>\x0a\x20\x20\x20', '3M0ZueAPZL', '6rX/FKtjmq', 'awA0bn3RjH', '69z2c3dmwS', 'G+/1zBfFaf', 'qh6WYl7SZD', 'xxZYQWUjA9', 'KjpIBCBXvF', '0,\x200', 'tf8GmCp68O', '2a2LGTTzp1', 'visible', 'KC20lFuf8O', 'dbVFxnihML', 'sition)\x20{\x0a', '_editorGlo', 'qOSkmUZZeI', 'g2zhrnhgvA', 'nX+cJHA3Q9', 'Vtiuni1Xq8', 'P9yP5o2ah9', '\x20Math.roun', '2ebEN5m4KH', 'Eohi+ZZhWv', 'field\x22\x20sty', 'YminlBdgIG', 'put\x20=\x20docu', '✕\x27;\x0a\x20\x20\x20\x20\x20\x20', 'n:\x2020px\x200;', 't:\x20space-b', 'TxrAsZGZFq', '\x20&&\x20window', '\x20\x20\x20\x20e.prev', 'OvGqR4S0+v', 'MBdHDbwhGk', '0fqL1nHZT1', 'Name', 'leName,\x20fu', 'OffsetY:\x200', 'xkSFbzMLMv', 'lbar-btn\x22\x20', 'yPnEO', '-size:\x2011p', '/zcPcJF1if', 'fVtPNP7fl7', 'K8BonxWCSI', '1uxWbgxGzL', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'then', 'ile\x22\x20id=\x22b', 'O2f/D07FNg', '3n3nDt19uK', 'ullConfig\x20', 'ion\x20update', 'er-box;\x20}\x0a', 'cDbnsJcp1e', 'AzZrGgxMlW', 'n:\x20center;', 'path', 't0y9skJRUD', 'FTza4H1/fs', 'H/bQzo3rek', '2VxwqziOC+', 'ecz/qc3DR9', ');\x0a\x20\x20\x20\x20\x20\x20\x20', 'teBtn.oncl', 'IS3ESIreOv', 'dVAT1BbloF', 'nWkVn6TFNn', 'mRc9Sh9+51', '/ZcvE4jJ0D', 'linear-gra', 'list.inner', 'tName)\x20:\x20n', 'rJ7vGyl3qv', 'iiv9jDuvIV', 'U67HKXerDh', '//////////', '\x20\x20\x20\x20\x20\x22></d', '9oxdID/ivu', 'Blxxs4c3Cd', 'bRtKU', 'lmqYfyUHXM', 'FUTDvl9e1V', 'i5qA0xe+Zz', 'YGiohQJRpT', 'catch', 'erIddc5kdm', 'ib/ydn6MP+', 'ot.name\x20==', 'zKUAhFscSW', '\x20\x20\x20\x20if\x20(sl', 'GDm3573rI5', 'qHmBgUXL7u', 'J+j/5aiaFk', 'TML\x20=\x20`\x0a\x20\x20', '-\x20step;\x0a\x20\x20', 'ot\x20{\x0a\x20\x20\x20\x20\x20', '2Bz4IH+fIx', 'p5lobVt76V', 'upport</bu', 'dBeWCkdT3F', 'st!\x27);\x0a\x20\x20\x20', 'goto', '\x20window.op', 'asX', 'lot\x20?\x20\x27\x20ac', 'FYDegTr4Tv', 'XYDEtkqCji', 'a2ESkMpZKH', 'ting\x20grid\x20', 'nnot\x20be\x20un', 'h3\x20style=\x22', 'b/aoE6FJnl', '38VD9PCG2c', 'b58w9k3IFe', 'ay:\x20flex;\x0a', 'cc3A2srAkN', 'rvcJ6X4TfT', '9Ai83TM4nt', 'DZJzOvBP7d', '0BnxMAatyS', '280px;\x0a\x20\x20\x20', 'Y1sVfOjxOU', 'lot\x22\x20style', 'surface-3:', 'HecCECtwvB', 'OXTZna0Aw7', 'PlCyiPMlh2', 'lace(/[^a-', 'R69Yef33LV', 'kMMPQImCFW', '3120408hKTyJk', 'cjjXooBhK6', 'ty\x200.15s;\x0a', 'orks\x20in\x20NW', 'qANF8hGR54', 'Error\x20load', 'iner\x20{\x20\x0a\x20\x20', 'wWHCS', 'gzvCra8VPu', 'ed1yloTcJo', '\x20\x20\x20\x20\x20oncha', 'lass=\x22fiel', 'dDHGL', 'if\x20(bgImag', 'AAANSUhEUg', 'YX8Bx31xKL', '(--text-mu', 'LcJSqyWIRI', 'lZnbg', 'ugANIB09Ni', 'hoQY1r3Ujx', '52TnGufrHC', 'tFPokGfSab', 'gtrSuufhz/', '40px;\x0a\x20\x20\x20\x20', 'o7uHicQ6BM', 'GmXFA4UTGP', 'K3hY/hEdHI', 'laNGo1HHSw', 'ener\x20&&\x20wi', '\x2018px;\x20hei', '+eNZw9prvT', 'G1HJgJXNbm', '.createNew', 'Didt0Fbhqx', '25qV9s2/su', 'AV1aPA+JnV', 'Jqeei6OM+e', 'G2mCw/holP', 'TiuAAg6fiF', 'eteBtn.onc', 'g6zbmo1fkY', ':\x203px;\x20}\x0a\x20', 'Fbwu6Gm4Yv', '\x20\x20\x20overflo', 'BT+5zIwwRK', 'onfig\x20&&\x20f', 'hgkJX0ZHMc', 'oN0QUhAEe1', 'Sx4V0YBHaz', '_buttonSpr', 'UAStyyNDyk', 'idBackgrou', 'setLineDas', '9W+/QJjUQu', 'forEach', '81010aUWhPM', 'tem\x20=>\x20{\x0a\x20', 'extOffsetY', 'on\x20class=\x22', 'rSeIRWspRr', 'f0iq4Fjg/4', 'PositionFi', 'ult.newNam', '61efy8CY1U', 'S76wYQfPGW', 'vAjGFhCWPC', 'ield\x20input', 'saveHotbar', 'e2mdlG1Kjw', 'OwVT1iP0Kt', 'poZIzpU1Wk', 'UjhPY6UBtP', '3uxedVwfZw', 'map', '0/sP2w58q3', 'QVy7c5yv5+', 'dL4vt9OfnN', 'AYoKC6Wqe+', 'HgCaMIVyLR', 'Yuo2RFKDi3', 'l.style.di', 'N4sqQGGJjQ', 'lectorAll(', '\x20pointer;\x0a', 'bottom:\x201p', 'voby12CK9O', 'kIJrQ2Cjv0', 'l/zgwsGcTD', 'mns:\x201fr\x201', 'HotbarConf', 'ADj+EnephN', 'cACVzpBGwq', '+PvjR26h9u', 'ist.add(\x27a', 'iiTVYtWSSY', 'r:\x20var(--t', 'Unh/W/ihh5', 'lKyBdZjl3I', 'RglEh2HdOF', 'GYz1haX9nk', 'RwAxSQg1R+', 'OaS5xZCDGx', 'hild(item)', 'l>Backgrou', 'opy\x20backgr', 'functional', 'ts)\x20{\x0a\x20\x20\x20\x20', 'const\x20slot', 'rqAUGhxegg', 'lot(curren', 'zaFpP', 'call', 'XhHopWYNQm', '1\x20{\x20\x0a\x20\x20\x20\x20\x20', 'sPIM+POaGw', 'AqmyotbnQK', 'ansparent\x20', 'RtjumchXPO', '\x20margin:\x202', 'hWib8bPDOo', 'ds+J/DGdmG', '1+HWidb1r5', '\x20\x20\x20backgro', 'Zw4mC0FK7G', 'F2YPSCwlhZ', 'l>Slot\x20Nam', 'ySbxRKsG5G', '9b0k/U4wDD', 'mpwYAACIKU', 'ar-btn\x22\x20on', 'xZzwr', '\x20\x20\x20\x20border', 'getElement', 'ss=\x22field-', '1Lb7W/Xorr', '1f1f1f;\x0a\x20\x20', '6aT22NFWxC', '3rdVV665D5', 'gt2Ylflt10', 'tById(\x27pre', 'ctoW3ZFMxN', 'jVzKM', 'll-width\x22>', 'kDzgNwSfsv', 'join', 'rollbar-tr', 'e-2:\x20#2929', 'img', 'ement\x20=\x20do', 'N4Pk8N7aMz', 'buttonGp', '\x20\x20\x20\x20alert(', 'QRhs4JGA2/', 'YRAcFY3Rau', 'iPRKVSqxTf', 'ph4oLaVui3', 'FyVMqybXSW', '\x20\x20\x20\x20\x20\x20\x20📁\x20B', 'tive\x27\x20:\x20\x27\x27', 'aqCiqmK81e', 'cIqyugkgLx', 'tpyZNd+YHL', 'ZJJPB5Yg1i', 'YUOlbLk7Oc', 'soZTOvENJn', 'Q0FI1CjO4z', 'open', 'PRvzOAdcaT', 'item\x27\x20+\x20(i', 'laizjoC31E', 'EuuJMAXEb0', '9moySiEFRE', '=\x22removeGr', '===\x20\x27nameK', 'selectSlot', 'ebkit-mask', 'quyvH', '2iBXroNUGW', 'WVfwn', '4gWM3yc+kw', '27xnbm/DME', 'fillRect', 'CQy6jWCvG+', '+SPovm1Plt', 'CmeCVT4Mvn', 'er.readAsD', '\x20showSlotP', 'zD8ejDXru9', '7zxKxj/Vck', 'yn78XfYQv+', 'UPk8zpm1o7', 'OyIFPwuFwS', 'selectGrid', '\x206px;\x20}\x0a\x20\x20', 'b2KfnNyTNM', 'aaUbqg8foe', 'FqDK1UzOJp', ')\x20=>\x20{\x0a\x20\x20\x20', 'CTJV4BZBl0', 'GXRXbGZwl8', 'D4FHChuKVx', 'DdytQZ3pnt', 'MVVjh8kEDa', '\x20✕\x0a\x20\x20\x20\x20\x20\x20\x20', 'play:\x20none', 'qnAkzqdCV9', '\x20\x20\x20\x20</butt', 'y:\x20flex;\x20a', 'r;\x0a\x20\x20\x20\x20\x20\x20\x20', '0C04uDPFNW', 't\x20currentS', 'jyA6nwZpoR', 'ilptjH1pST', 'b5VDJJz59z', '-accent-so', 'd2K+S2UYN3', 'lEvls', 'oke5m9/+cC', 'Error\x20copy', 'FZM6qdCssR', '7uAWSvi', 'bPHwOR1AIN', 'lnXhSwAloh', 'KF0eRbY2/h', 'vxN+m84sP5', 'aQaA3q2kdU', 'kM5IE0gN22', '9vWJfde0g+', 'j+JYFAYBFM', '\x20=\x20\x27delete', 'ansition:\x20', 't\x20Grid\x20Pos', '\x20document.', 'GIdwe8TGbE', 'rcCNxtIAVD', 'eference\x0a\x20', 'yRRsYaRqKQ', '16p3hYZiC3', '\x20border-ra', 'ent.create', '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20', 'accent-sof', 'mage\x20filen', '37XkTeZT9D', 'Zs6DvzMQ6f', 'SzBRTOOtZj', '/uftDVd9O7', 'jhImgcB7xb', 'mAsAEvrpoJ', '\x20currentSl', '061209\x2025%', 's\x20properti', '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20', 'xWXXA3AmAL', 'save-butto', '2l12FVkoCR', 'a\x20grid\x20fir', 'pe=\x22text\x22\x20', '-mono)\x20!im', 'ad.', 'rRzAuW5h+r', '.\x20The\x20page', 'cISiuaQ1jG', 'ZmEfqLuKWs', 'vUdy93uD1i', '2box+T3bUK', '6JoKSOFUO3', 'RTWY5WHKhb', 'WxSUX0sfhE', 'TN81ZucvTl', 'PPPOi', '\x20\x20\x20color:\x20', 'jBD9i3Pjuf', 'n4f4Hyf+9T', 'bUmMZruwMZ', 'qcrl+d/c4M', '\x20\x20\x20\x20\x20\x20back', '7G7bq9kH2e', '\x200;\x0a\x20\x20\x20\x20\x20\x20', 'msgKtyCY4f', 'ZgrLd9V6zC', 'wnWdRw2nMD', 'W7PF89G7O9', 'mepadContr', '\x20\x20\x20const\x20p', 'O0NB6CITvY', '\x20</button>', 'kground-co', '.updateSlo', 'Error\x20crea', 'FgccbfFtff', 'buttonText', 'ENGil76/Pw', '7556WcxCbO', 'adf117vUl9', ':\x20inline-b', 'm70nkCBxFm', 'Background', 'cT/2Han/B5', 'qKolC5VOOe', 'lder', '+77LOvjktJ', '3JSNgyUl1G', 'BqDfefZgWK', 'ton\x20class=', 'x\x20||\x200)}\x22\x20', '\x27\x27}\x22\x20\x0a\x20\x20\x20\x20', 'rentValue\x20', 'YVSyqbDjRn', 'z2+0OjOVLo', 'wGMNt6re3t', 'mEIXN', 'g5Js7H7FmK', 'Qy50jNz86h', 'w/JluqWss7', 'ustify-con', '\x20\x20\x20<label\x20', '0I6HAXHFNC', 'Id(\x27gridCo', 'ground:\x20#f', '.top\x20=\x20tex', 'xaJH114PZx', 'width', 'AEKdSqkXBA', 'WnY2SLJCHO', 'HEBBLyMDP+', 'r7KZiaUKVg', 'BRUcUkI5r9', 'zCup5aH9Y5', '9c/AYYL2/a', '+/cqx6VDfM', 'B0UuFmpGI1', '_blank', 'kGAX0qZn7U', 'type=\x22text', 'hpnymPywo1', '\x20function\x20', 'a5qgub7rxs', 'GdBHd', 'eName\x20=\x20fi', 'HTJI9EiJUM', 'thXbjFNHls', 'V91dCuG9ER', '\x20\x20\x20\x20\x20', 'ight:\x20100v', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'U7NXu/vV83', '\x27previewSl', 'sMwVVSyzjj', '3ZndkNmW3A', '\x20\x20\x20\x20\x20retur', 'r1eNCyXQ2j', '9Qg1iIqgNb', 'uerySelect', 'CmUy63AeP4', 'DJXbsjv66U', 'A6C3WkLf1b', '\x20\x20\x20functio', 'DpToHy1scr', '1RjN7akBD0', 'atm5NgYKjf', 'WIeYunTU46', 'A7FyFpNeEt', 'bD/wdVvkQq', 'tate\x22>No\x20s', '+aHSCt2R7k', 'KxfhL', 'text-muted', 'wRWBjLxmSI', 'tKVUsXlw5v', 'avior:\x20\x27no', 'rror\x20loadi', 'Yzu5lmilT8', '.getElemen', 'EtaoKI2Nio', 'n\x20updateSn', '\x20\x20\x20\x20\x20if\x20(c', '3zoKwRgJRV', 'NxS9qkSQRM', '=\x22.png\x22\x20\x0a\x20', 'pTHpg4SdRH', '7Jurtx1qYQ', '\x20\x20\x20\x20\x20backg', 'uVJv2vLeig', 'eSlotPrope', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20', 'utf8', '+\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '5c6WjAwAaV', '\x20removeSlo', 'ne-height:', 'QAHx7zx9JV', 'w3ZEmy9Sft', 'zkWqD', ':\x200;\x22>Slot', '\x20\x20\x20cursor:', 'oundPositi', 'ite', '7s0UMjc86N', 'hFVs4EiNK5', 'uKIFyQn19Q', 'sLtuMNbwse', 'CYVSpUPEsH', 'parent', 'nTpQeJnE/X', 'jvLDk', 'Vb8O+3nfHZ', 'm11PYByDFk', 'iles[0];\x0a\x20', '6ZjLgz/TDP', '527nzFetOb', 'JajLa+vnwr', 'review(cur', '//vnp/kIb+', 'CVeCQr0OeW', 'anchor', 'J8Iic1NRvC', 'qStZpCLxge', 'c+LZwgpgcg', 'Q5dVHBHCqD', '20Ku5aRSxa', 'xLogt', 'tonText', 'YWA6ZiDoxT', 'pgB6tbKEeT', 'oundImage(', '\x20\x20}\x20else\x20{', '\x20\x20-webkit-', '0rP8e/jyMe', 'wQIzBolltr', '[Visual\x20Ed', '14px;\x0a\x20\x20\x20\x20', '3fEuv+1I+e', 'iJL5PKrBxQ', 'zhewDHZy1F', '{info.padd', 'TTUSDl7g49', 'AD0agMAH+A', 'Dsanpesp3Z', 'sIlAJDqbhq', '/B/oRX18Kw', 'slotPrevie', 'Rrdl9ASRs0', 'nCFPxcYj1M', 'ut)\x20{\x0a\x20\x20\x20\x20', 'DLSSXdGmH2', 'rget.resul', 'lotInGame)', 'E3Ctc575+8', 'nbFsrujttM', 'EBOH75yqo7', 'E19W/X+QMj', 'border-rad', 'zh0Xq0e6er', 'tom,\x20black', '0NHV8deR6F', 'VH3+WGsI3W', 'TyZR6OMAwJ', 'eoK2/uR9wS', 'AEwVnGE7aC', 'y528TsbMqy', 'KnlAQyUsyD', '83fAEC8PKa', 'x6bBXQ9jHh', 'ut.files[0', '\x22flex:\x201;\x22', 'l0a+4rzosl', '=\x20parseInt', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', 'YAbW4ADO4A', 'style=\x22dis', 'sList', 'jDB0AKACAz', '\x20\x20\x20gap:\x2010', '\x20not\x20avail', '49729980TYWyie', '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20', 'FLVtE4ZPDq', 'C0BMAquWWI', 'kDdrffF6AX', 'tQIrVn3bZo', '8xfA8UPjM9', 'IXFPX', 'MisFN82Oxq', '0,0,0,0.3)', 'qj+RLhIbsq', 'Hbx8JMRjYH', 'WXaO/S7tOe', 'LpdQr4REFU', '66EcA+Coaa', '<div\x20id=\x22p', 'GCzav3L3xw', 'sdgD8+c9Fv', 'sanghendri', 'n:\x20left;\x0a\x20', 'LHzDAC6rzm', '\x20step\x20=\x20pa', 'dmAlK', 'ontent\x20{\x20p', 'J5WRU0AQ9W', '\x20\x20\x20\x20\x20\x20\x20<di', 'ypROvDwFsq', 'textBaseli', 'CboiS8w4ea', '\x20removeGri', '=\x22https://', 'T2hj2kiOUU', 'mono:\x20\x27Int', '\x20\x20\x20\x20\x20<h3\x20s', '_gridSlots', 'F/kCeYQ8SV', 'BDK+rGgkY7', ',\x20h1,\x20.hin', 'sKY/dO36uR', 'fb/T6Zp94S', 'rounds', 'r\x20&&\x20windo', 'ND7IEa4sb9', '8ANTYaKvwb', 'dBackgroun', 'NNe74l1q3W', '\x20\x20\x20\x20\x20margi', 'Hneix7FY/5', 'XPKbfGNtY9', '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20', 'seeOXCXLZL', 'l(\x27#slotsL', 'T8CZprI7LG', '8lXRa83Xe9', '\x20\x20\x20\x20\x20\x20font', '8Eb4yvWjOI', 'LwPIe', 'inear-grad', 'textConten', 'SpecialBeh', 'ranslate(-', 'aCxQ+XE3wM', 'zing:\x20bord', 'iKiC+yr4qo', 'CJGGdIWioU', 'n;\x0a\x20\x20\x20\x20\x20\x20\x20', 'und:\x20var(-', 'lot\x20Only</', 'elds', 'TML\x20=\x20\x27\x27;\x0a', 'QG4iQ8gY8j', 'tCBislRcsu', 'EgXQmJW0Yu', 's=\x22toolbar', '4+kZayrm0P', '0TBj2N3Ane', 'Rt2wxjEXtF', 'onchange=\x22', '_onMouseDo', 'addChild', 'B4s4+TCUCI', 't:focus\x20{\x0a', 'fk+k+fvnk4', 'A0DCAWCaQJ', 'fig.Specia', '\x20\x20\x20\x20\x20\x20\x20\x20\x20}', 'XcTCp', 'ZRFM9i6bvG', 'iakYeRbzOA', 'nBbDO', 'ional</lab', 'lassName\x20=', 'BH5HIKoL0E', 'ing\x20grid\x20f', 't:\x20auto;\x22>', 'grqAgllNQV', 'pg-maker-m', 'wFnDmlfRPo', 'caSxh9yGmP', '\x20\x20\x20if\x20(win', 'En85jINQIs', 'has', 'cQ0KKW0AUH', 'adControll', 'gLjEkWiSZF', 'KSuygvfMQI', 'Y7ytfYvPu8', 'lVfyem2B+L', 'deleteGrid', 'AyfvvrIefn', '1/vbPV4Qcw', 'GDmKBrmYEY', '2/cvnWsaGU', 'error', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'sktop)', 'uS1f2dNna9', 'n/d6gqQIGC', '7y7e6wqeGJ', '/////////w', 'f\x20(input.m', 'D3YvxlWAiG', '2MwwUMNyTg', 'MLaVv', 'deselectAl', 'ridGamepad', '7brLn+rPmt', 'F9vvwCTALQ', 'vSvyc0Ob0+', '9OM8IOkcxP', 'OcSExSJoIq', '1kg+jqSxry', '8MY2MlHFk5', 'kjWamm8SRq', '6PIIrvOPYW', 'border-top', '4/0XYEQIa+', 'aSItKOIsqK', 'Y9G1wHj1el', 'RG76Y5quvf', 'a9a9a9;\x0a\x20\x20', 'k6kA0rX7Ha', 'nel\x20{\x0a\x20\x20\x20\x20', 'MQr8TKDCGc', 'qyUwzFhjCC', 'yzQD7e/Hbv', '1px\x20solid\x20', 'thoutExt);', 'tbmuMxgYAT', 'le-list\x22><', 'aMv/Oqs0nX', 'viYbBljX3G', 'bottom:\x208p', 'am6x6h1nBe', ';\x22>\x0a\x20\x20\x20\x20\x20\x20', '+fqpsbAGLT', '\x20\x20--text-f', 'Sc3FLXT1WL', 'e=\x22Remove\x20', 'eX9OaHut9d', '15px;\x0a\x20\x20\x20\x20', 'zezpUXZUvc', 'pacity:\x200.', '\x20\x20};\x0a\x0a\x20\x20\x20\x20', 'ipped\x20Weap', '9G194LGrrG', 'GridSlots)', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'boxHeight', 'ement(\x27div', 'Padding', '\x20#444;\x20bor', 'ridBackgro', '2HwW0DdwRo', '29;\x0a\x20\x20\x20\x20\x20\x20', 'sKm3//l0WC', 'r\x20lists:', 'CBQIEoggLQ', '20px;\x22>\x0a\x20\x20', 'Z/VYUm6M92', 'VtCu3+n6y7', 'EQLUhWCYcs', 'gamepadCon', 'trollable', 'ground', 'trim', '\x20\x20Click\x20an', 'blcLW', 'UJj792YTFy', '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'VHBVcF3w+x', '4SaV8RU3+E', 'ZvVnrVO/3w', 'border:\x201p', 'opyBackgro', '(input.val', '+d/G+jV4/1', 'pohREZNykW', 'ogo\x22\x20style', 'g0jMQXvjJo', 'iaiTDzZtSl', '_isPlaceho', '3a1a1a;\x0a\x20\x20', 'Ms++onQU0/', '3px\x20var(--', '+xAxpSETh7', '\x20<div\x20clas', 'lue=\x22displ', 'ing\x20slot\x20p', 'E+IISxwxCs', '2026\x20by\x20Sa', 'daeidzPBhL', 'tcepplOvXF', '//30LXn/1a', 'ground:\x20tr', '37zxArqTxy', 'Ybd6qJna8U', 'gpivFCSqjP', '+f2mcbStCm', 'f6xoa5jyy4', 'property:', 's(currentG', 'document.q', '3bv/vrs9DE', 'b/8tFxOmWL', '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20', 'yvllWzCBOz', 'eateNewGri', '-image:\x20li', 'vdVaBTsLJg', 'pe=\x22number', 'hj9hGi3XjX', '0i+OkI1jd/', 'nVjcBl7kkG', 'ate\x22>Selec', 'b/kc2ARLDM', 'Image(this', 'ntent\x20=\x20\x27✕', 'er=\x22Image\x20', 'QIEMBLAH4P', '1S0kiY+YBK', 'LAQtd/2m6b', '0sXlHCPkxl', 'vZkA2kZUTh', 'wO1Nn2rFSb', 'ge()\x22\x20\x0a\x20\x20\x20', 'OQgYWWRu4f', 'n\x20updateGr', 'u4JwMpyaR3', 'uH/D2o1A4p', 'DVI4DHlSEt', 'SaepeDG6UJ', 'const\x20name', 'strokeStyl', 'dSlots', 'N8+8tg/mwF', 'er.selectS', '6rZG1ejNVV', '\x20\x20window.o', '\x20\x20\x20\x20\x20\x20marg', 'j39VvFRIAa', 'MvAAg', 'getOwnProp', 'XRtWUYqieQ', 'S2+W7+ATFp', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20', 'x\x20solid\x20va', 'T5r8beObW1', 'UqGLDO0iyM', 'izgm7Gzkbx', 'djYdg9dICv', 'yMCVu1nCB6', 'QzZEJmLoAv', '\x22${Math.ro', 'p:\x205px;\x22>\x0a', ':\x20rgba(0,\x20', '%);\x0a\x20\x20\x20\x20\x20\x20', 'BLB4IFAcPc', 'gTJBUObbRa', 'W0xae5F1N/', 'display:\x20f', '8sFXu2HuD0', 'Button', '2SZJRaYE0V', 'k1K8DBHwHs', 'sBtAy8eA2I', 's8QKkWyzJZ', 'hBjMKYkRf3', '08trt1G2yb', '\x22\x20value=\x22$', 'q1Gw5C54/U', 'base64', 'GI000vDpyL', 'MyC+ZnFTZM', 'pSR5FK7I0m', 'pad)\x20-\x20Opt', '9qwGdAgAUE', '📁\x20Browse\x0a\x20', 'hasFocus', 'HrqDNr2ruU', 'bUZ7Apjx1J', '6a/kS8l6dZ', 'onfig.json', '7Cfu7GiOrC', '\x20\x20\x20\x20\x20\x20\x20\x20\x20r', '\x20\x20\x20onchang', 'xgSkItTUIA', '/UQjRhx3q3', '/ra9ZQML9h', '46VwAKOt8w', 'rows', 'L9lgw/HoGK', '\x20\x20border:\x20', 'AXYts8cLKG', 'gYAgKkChqn', 'vyFsVQGspE', 'le>Hotbar\x20', 'uZ/mDjSw2o', 'in\x20paramet', 'KIqOPgKDYs', 'cEnTdJ2JWz', '5sOcJcP8iC', 'H3+fIp9+Xz', 'h77EQT7zSi', 'px\x2015px;\x20m', 'mo+BIjLaZU', 'Ymogo/si20', 'RXdV7pbf07', 'hHljwUamqg', 'iL2wZhPcMj', 'xEYquRpIgM', 'XOsuqtVy95', 'phlEHG4jy3', 'PIjpUvHG39', 'SKQy744Nl8', 'perties', 't-align:\x20c', 'ap2/a7FjDB', 'SeTCTrfRf3', 'y/e+WHjb4w', '\x20\x20\x20list.ap', 'mYPjckQNww', 'RvjTWpfNwK', '5lXACvZ2aY', 'kABzgQ9pkA', 'i16Y/dRORh', 'updateSlot', '\x20style=\x22ma', 'ner.desele', '\x20=\x20documen', 'KCUSkrW/Mc', 'BqBI/u3r9/', 'Kcy2mOrYQF', 'leteGrid(g', 'VdMlHlB8zh', 'G/ieN7WhX4', 'hynEKR7vvd', 'ix.itch.io', 'P+E42NikX/', 'orLists', 'removeChil', '215,\x200,\x200.', 'VUAAAKOmlD', 'TN6Pr7TQvb', 'AT8ahgSVwb', 'KOmFK', 'uyYng+6+jR', 'Error\x20rese', '02RsM74529', 'm5HnMVJKM3', 'dgqE1RfxGk', 'r\x22\x20style=\x22', '\x20?\x20\x27\x20activ', 'l4G1AI4QHF', '/div>\x0a\x20\x20\x20\x20', '7Fq++ywghe', 'dI++a1j3z8', 'splice', 'zbOn1q4/Qt', 'eKb\x27,\x20this', 'AYvyJz9cIE', '6gGLZDV9ss', '5+I/vLXM+9', 'm9EVHXfmsw', 's</h3>\x0a\x20\x20\x20', 'pnKgtCwrKw', ',\x20fileName', 'y9cRj12gt5', 'F1pJXgGrFT', '\x20type=\x22tex', 'E27DF/ui2j', 'le.flex\x20=\x20', 'f0000;\x20pad', 'loadGridSl', 'adius:\x20var', 'FddBIj6mxi', 'BQMFl', '\x20\x20\x20\x20let\x20cu', 'ist-item.a', 'hVkIDeKNU2', 'TwL2hJKeZd', '/zNsN2VnQV', '09F1uxevcg', 'fkqJzQIUcA', 'rror\x20savin', 'imageNameW', '9hT6Vn33S8', '7ZmdLHrsen', '--accent);', 'MSsAfTyceD', 'n-bottom:\x20', '\x20return;\x0a\x20', '4202845bwgoHo', '\x20\x20\x20\x20cursor', 't\x20+\x20\x27px\x27;\x0a', 'var(--shad', '/hAU3g/fDu', 'roperties:', 'w.opener.r', 'dj1meXLqBY', 'rCfABahtvB', 'mheSaGGk0n', 'CqY9eCdYOw', 'IaiNkdFuNP', 'd0UK3x3rIL', '\x20\x20\x20\x20window', 'lksukF2OWh', '(--text-fa', 'nxAVh2/Yld', 'h;\x0a\x20\x20\x20\x20\x20\x20\x20', 'put)\x20{\x0a\x20\x20\x20', 'delete-slo', 'eubnYtJOpe', 'rGKUVMEF8U', '\x20600;\x0a\x20\x20\x20\x20', 'zI+dWQQmyQ', 'orE/y+XJd4', 'pxZ3+ZWTa0', ']\x20||\x20\x27\x27;\x0a\x20', 'aset.curre', '6JAZh23wxL', 'able-list:', 'pener\x20&&\x20w', 'e(this)\x22>\x0a', 'vBtaeyZQ4U', '\x20\x20\x20\x20\x20\x20\x20<op', '\x20\x20\x20\x20\x20\x20\x20con', 'ign-items:', 'TfM2hSQFX7', '.1);\x20margi', 'closed', 'px;\x0a\x20\x20\x20\x20\x20\x20', 'y-state\x22>\x0a', 'CcA78M5yHQ', 'itor]\x20Fail', 'tPreview\x22\x20', 'iaULRckiqd', 'zCxNwbpp/b', 'KsiPMiiKFC', '7c/NbDf7o+', 'GYpKBoFGCh', 'Cn+OKtZIPg', 'YTZ4h7snWz', 'Wsdux/dOzk', 'CAMAAABYhh', '8lUDFPghxs', '0;\x0a\x0a\x20\x20\x20\x20\x20\x20', 'hof/epLY8j', 'HM3+GDOOFw', 'HZjGA6mJjf', '2GVdEX6qfs', 'Grid\x20or\x20sl', 'tainer\x22>\x0a\x20', '-width\x22>\x0a\x20', 'pageY', 'zSYTvHq96f', '\x20\x20\x20\x20if\x20(wi', 't1y/RUdBZW', 'qLgcKngtGp', 'MvIAUjKM6l', 'e-3);\x0a\x20\x20\x20\x20', 'BqcoCCGVBW', 'ATvINPzTvJ', '0S1jsjHHOM', '6ZuwNQjrox', 'now', 'r(--shadow', 'Ejxd0gdQwY', 'ETUJFihhoB', '0\x2010px\x200;\x22', 'qoE3WnmJqk', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', 'E7RxPOY1bD', 'class=\x22too', 'cJYdW9O2nR', 'V7lnGXD5ll', 'erty', '_gridBackg', '\x20\x20\x20\x20\x20\x20\x20pos', 'vXaB78GsK+', 'color:\x20var', '7YODiiWuq2', 'WK+naJXFkh', 'JDp4HT6QcO', '0JmG4vjBec', 'OyyiE', 'iFjRd8PHb7', '6GNdwwsX5D', 'ssName\x20=\x20\x27', 'b3t74gf+ck', 'iUWB56Odqg', 'ner.resetA', '\x20\x20\x20\x20.toolb', '\x20\x20\x20\x20\x20\x20\x20mas', 'Auq5VcsoxY', 'lPTrX9xqdy', 'cuLYRpZjIs', 'drthFDBtIS', '\x20flex;\x0a\x20\x20\x20', 'JMCuR', 'uz/wHEmKjJ', '+5SYlQC+jA', 'WwjaWWaclT', 'reviewText', 'R4T4zr0kLv', '5n8qfkHdca', 'n\x27,\x20\x27_blan', 'refreshBut', '(window.op', 'D8vNg6G7ZH', 'fCcgs', '\x20\x20\x20\x20\x20\x20\x20\x20\x20t', '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20', 'QNBbsG0KWB', 'WIb+vAmbIH', '66prbioCNC', '.className', 'ding:\x2020px', 'ZcYy0W2rBj', '7+OTyyJq4R', 'xk0AcVN2a9', 'wmuE+Bu5L/', 'j7WWBp7F95', 'v1z1zNrG+w', 'NTQgXJib+i', '6oqc9Uyvyq', '_config', 'bFKGvizLTL', 'bel>\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20name.', '4vW2i8tajo', 'Jq43turDDr', 'AoZARRBrCf', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '7kwzxcjqwI', '\x20style=\x22di', '.opener.co', 'ame', 'n:\x20relativ', 'naGn++21Y6', '.scrollabl', 'SDApcoKTK4', '%;\x0a\x20\x20\x20\x20\x20\x20\x20', '81jDB3PcRF', 'Z+Lsamllsb', 'kgroundIma', 'GNf1IwMOy2', 'FVsL4Ue6YE', 'ete-slot-b', '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20', '3hKieMl47t', 'pFojaYyqqZ', 'tY\x20+\x20\x27px\x27;', '8UKFeYP3g+', 'ot\x20=\x20null;', 'PPsbZ1Rle8', '1Av0t4hlQ3', 'sED75MXVm9', 'wI48LNpVPs', 'vABj37QOG/', 'rrentGrid\x20', 'VChgkooXAH', 'BT9wclAAAA', 'e=\x22updateS', 'g5jNPFHDA7', 'xb2KbNBoTK', 'rOADI9+J7A', '<h3\x20style=', 'gtDUgaDEMO', 'KOHmLTBZLn', '$uiPositio', '1eMLioel/J', 'updateGrid', 'FcRt/OA/w5', '\x20\x20alert(\x27F', 'qAPHYjh0+n', 'W2nC9zMcXC', '3qITl/XF4+', 'QwSHst94e7', 'ae4AtBEAbR', 'ontent\x20=\x20\x27', '\x20\x20\x20\x20\x20\x20`;\x0a\x20', 'Tc5NTc3azS', '6f8YszgApf', 'GlY840haEw', '7wqAc7ciZq', '97Aegc9+Lh', 'buttonKb', 'UH0rwK3Vc+', 'jd+pud1Els', '\x20border:\x20n', '0t6L3/l819', 'xkJuKLhCCR', '<p\x20class=\x22', 'CzefkYjCYz', 'pageToCanv', 'rid\x20===\x20nu', 'ss=\x22field\x22', 'wdR1JMMSI+', 'able</span', 'GridBackgr', '70ymDa//+w', 'yuktzLxn9Q', '+T1N5skTmD', 'uxZQ2sP0LL', 'mode\x20in\x20de', 'loYEI', 'XwMwixlSeQ', 'TEBVFCBazN', '1/04Zo5ZYX', '6wUQVVEG2Y', '\x20\x20\x20\x20\x20\x20\x20\x20tr', '/wQT3avEC5', 'CIqiwClfjM', 'Lvvp3ZUX6d', '\x20offset\x0a\x20\x20', 'Gei71CfQdx', 'cument.get', 'flxrLTiyVr', 'NSKc4ANQY0', 'r(--accent', '#061209\x2025', '\x20\x20\x20\x20paddin', 'ElementByI', '215,\x200,\x201.', 'zYuW5XeHp4', '0lGEhlMfGz', '.field\x20sel', 'WJQep', 'J4CnDseSUA', '+b/FZhwwUA', '\x2011px\x20!imp', '/XynWEvAAw', 'HLdbT05X+d', 'p:\x20wrap;\x0a\x20', 'X69/glx5zV', '95MIpGoQTP', 'mentById(\x27', 'wVXQP', 'ound\x20image', 't266jjnfQT', 'W0F9SKHiwU', 'review(res', '3);\x0a\x20\x20\x20\x20\x20\x20', 'G4aqVr13z8', 'Fgry8I8JDC', '\x20\x20\x20\x20\x20\x20\x20\x20fu', '\x20\x20\x20\x20\x20\x20\x20bac', 't:\x20center;', 'ame;\x0a\x0a\x20\x20\x20\x20', '\x22toolbar\x22\x20', 'Y2V/csPQDg', 'guHjXipriL', 'ItnuU', 'ation();\x0a\x20', 'crollbar-t', 'HXWBIIvTbs', 'PQAOxMSyMA', '/BjsbaHEFS', 'AVAW7BtElJ', 'srik5WicZe', 'existsSync', '5px\x20solid\x20', 'DE2DlE7hyL', 'qUkqr4zsNQ', '1iZKpqe3ds', 'previewTex', 'tting\x20posi', '1hyKb1GB55', '5+kzr46r/Z', '=\x20currentS', 'jqIKQv27CT', '4W9Zd62ZEY', 'pXZH1TrIaS', '5PMSnKt34w', 'YDYIoZ0vyp', 'BJnDpv9s9i', 'tuqRIn5fSD', 'var(--radi', 'g(slotName', 'yId(\x27gridP', 'S3rj/wEHjH', 'ptz10CdJX2', '\x20overflow-', '25fp1+v/6k', 'Q4dMluKv8i', 'yWNOTTUALW', 'kitj9bSnCy', 'LA92lQgTTF', 'TjDnmGeYbz', 'STtqV4xOLK', 'rgba(255,\x20', 'ioWVf', 'EtbBBPu8BG', 'rtySafe(\x27t', '_slots', 'CIBlP', 'filename\x20(', 'll)\x20{\x0a\x20\x20\x20\x20', '6i74IvJXJx', 'I25KW/yHQX', 'bA+juxT0CW', '\x20\x20previewB', 'type=\x22numb', 'o7jJDIcNNS', 'Xz3StOC+qG', 'lue)\x20{\x0a\x20\x20\x20', 'qmyThidsYU', 'P/PjbyUUrZ', 'Y84dE8ug/s', 'E8f0uWBcUp', 'j7ER+5J+32', 'DkCrHZ/jYF', 'LtHlEz0OqR', 'XIR7oeP317', 'ehavior\x20==', 'fillText', 'Jci/FU5BpJ', 'YHYTOFI9x+', 'rH0DLM5iH8', 'ack\x20{\x20back', 'itlxP', 'meNMlixWLN', '82Ry+xaS9t', 'UIgPWzVPaB', 'kHC6OaWX7f', 'dy::-webki', '6TfasNM2WP', 'p:\x2010px;\x0a\x20', 'lotName);\x0a', 'value', '257eCtvmVJ', 'Error\x20dele', '-creator-r', 'HrRHnR88Pc', 'ute;\x0a\x20\x20\x20\x20\x20', '8G2xrvzeKO', 'Ssn445NZTw', 'rbzmAUshuc', 'Z29feOfU1s', 'getSlotPro', 'YCsFgqGu2S', 'P9HKGdQT1s', 'z1xLq1/S2n', '+8Hep5eyJT', 'IXRaUSbRvW', 'b6H0feeRnF', 'DHRA7WhaMg', 'ndImage\x20:\x20', 'ting\x20slot:', '\x20\x20\x20\x20\x20\x20\x20.fi', 'button>\x0a\x20\x20', 'm89nG8IFOI', 'cXvG7Xn+jm', 'YAvbr6wKms', '3hht4eBoPP', 'ZpsPAmKK46', 'lots\x20in\x20th', '5REpVGEBtl', 'IVBAnL2QVH', 'a/Antc+QQo', '5oQeDaJxxA', 'alue);\x0a\x20\x20\x20', 'hfzgK+gry1', 'cMLen8R5II', 'lotFromGam', '0ECUJAeIki', 'dx/m9gPXPE', 'split', '07925Oipu2', 'Mode', 'NKUx6muqdu', 'vIK1Xm5KPO', 'AYBJ4kw2EC', 'wYmnKhIHDj', 'tant;\x0a\x20\x20\x20\x20', 'document', 'DWjKwbKGah', 'TWrt83l8fl', '6J4vXiN1VV', '\x20\x20\x20list.in', '9h+7EeblvY', 'LBBa4Lti4Y', 'ageInput\x20=', '3KXYZvGpA4', 'style', 'CCy3mBqiZT', 'nTkLdMHg2c', 'VbFnBymcVa', 'Y4vYRgKQ14', 'JVSNPvCkwy', 'deleteSlot', 've\x20backgro', '<div\x20class', 'Bio4q4oVZA', 'TextOffset', 'SPVft5mAe0', 'AiuHG', '\x22field\x22>\x0a\x20', 'qWOfO1IlIz', '-2);\x0a\x20\x20\x20\x20\x20', ')\x22\x0a\x20\x20\x20\x20\x20\x20\x20', 'eviewBg\x20=\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20i', 'rDhiz07bCB', 'CiIbK5+PM/', '_buttonIco', 'cefyaws+FB', 'y7NaOBNVZV', 'pener.load', '5WevOzOocC', 'XGvxZrHkY8', 't.style.wi', 'W4tQ1OfOCV', '\x20\x20\x20\x20};\x0a\x20\x20\x20', 'alCIXOYd0p', 'ArpL3zjt7l', '6nv7j4KPBa', 'nFtnnWlS0T', '1pIRgmKoff', 'esetGridBa', 'nfig.Backg', 'S0kDKEB432', '\x20\x20<button\x20', 'ener.creat', '+SjRlI5Dmq', 'on</option', 'PZS2Fx19xT', 'le\x20drag\x20mo', '4o4Pa40L+V', 'jbWvtmh+nY', 'itle=\x22Remo', 'p07AUJfQNJ', 'rtiesPanel', 'BORw0KGgoA', 'ackgroundI', 'length', 'er\x27,\x20syste', 'eyPr7OW1dK', '\x20\x20\x20\x20\x20<hr\x20s', 'indow.open', 'n/k6P7/3wJ', 'tHJj2tlfzm', '8m8edAPJEz', 'iFl5+BycrE', 'bsjM/BPIyv', 'weight:\x2070', 'tons[0]\x20||', '/X0WhIqz6F', 'a2ftby6jvw', '1815Eisfbu', 'IglYEzcqMO', '8HDTCbcoMB', 'o\x20edit.</d', '2LrqJyfUsn', 'X4b0xBmOII', 'u4K8XS3GzM', '+SrtH0X5hR', '/8z4C/ga/+', 'KXCflpADg7', 'div\x20style=', 'ZzJl79cTTw', 'C7DggvGulA', 'or\x20slot:', 'utton\x20clas', 'JXh2iyUKlu', 'EvLo4hpXiN', 'ar(--mono)', '\x20\x20\x20\x20input.', 'zakgpCNadp', 'k+YeMNvvKE', 'dPosition(', 'd\x20first!\x27)', 'wGridInfo(', 'ound!', '\x20\x20\x20\x20};\x0a\x0a\x20\x20', 'Hs+0wBa9I5', 'IVgcwH27HF', 'BflTcFpWb7', '/i2yeVMd5X', 'Do4QEiECgC', 'parseInt(d', 'ay_shield\x22', 'aVQsQgWWkO', 'OBO7D7oZ+N', 'arrangeGri', 'gvVTFt69zU', '=\x22field\x20fu', 'SdPiHzqnAc', 'g</label>\x0a', 'DmtejbVkm+', '\x20\x20\x20\x20\x20\x20\x20\x20<d', 'positions', '\x20\x20.toolbar', '7+b+jXCbVV', '1sC0uSGwuh', '4iaoAo0vDJ', 'eaatmHacyz', 'yzatn462Ii', '\x22${info.po', 'SQ9cerh/aL', 'ght:\x20100px', '\x20\x20\x20\x20\x20\x20\x20\x20</', 'roperties(', '6SUePQgNOy', 'js/HotbarC', 'qy8OXPOu6q', '55,152,0,0', 'HlMve', 'R/8tWnRQEC', 'r1fyiP6n7B', 'x6EhM27pzZ', 'ap(n\x20=>\x20n.', '9pEEoLpVHx', 'QA/n75A+W4', 'PY7uTDf7iE', 'eKBgIZiX9s', '5p5zRvRc12', 'FIzKCG+LSe', 'ame:\x20\x27New\x20', 'ollable)\x20{', 'YzmNGYkcwD', 'OUUDIia6vb', 'Fd6Lvl7z+u', '5wXunEndee', 'vW1IZN8xat', 'UOEbzZYzFO', '6px\x2010px;\x22', 'JDi8SozXwm', '-3);\x0a\x20\x20\x20\x20\x20', 'ubSDayIHvJ', 'px;\x20width:', '0,0.4);\x0a\x20\x20', 'l5mk99hdgh', 'w1zfk2+ENW', 'dsList\x20=\x20f', '8qr6+trLq9', 'createBack', 'r1dp9vGXW8', 'BGQKIFYotS', 'q1aNITd/VL', 'KboDNln+Be', '0Ac3/s1Emr', '<option\x20va', 'j+0pb6n9wK', 'b\x27\x20&&\x20resu', '\x20\x20\x20\x20\x20\x20elem', 'r(--surfac', '\x20deleteBtn', '90996aMWvek', '\x22hint\x22\x20sty', '45lr59D9+1', 'ightSprite', 'aW8n+a+Eso', 'true', 'es\x0a\x20\x20\x20\x20\x20\x20\x20', '_skillUI', 'DkYaz/RdvJ', 'utorials</', 'm3USrFCa6l', 'BqaUsGC44G', 'ckground\x200', 'VcUnfHPl/Z', 'BX8buftKS4', 'VesnbF+uOT', 'xXpo9/28zg', 'width\x22>\x0a\x20\x20', 'pqISt0KtDx', '\x20\x20\x20\x20\x20\x20\x20\x20ma', 'QD381gd5kI', 'kWvJ18PfxL', 'fIX/WVkw6Y', '\x20</div>\x0a\x0a\x20', 'T3aITNIPnj', 'ntValue\x20+\x20', '\x20positions', '(\x27buttonKb', 'mWRze9u9ZZ', '-btn\x22\x20oncl', 'CCyyviTvVR', '\x20\x20\x20\x20\x20\x20\x20\x20pr', 'ngLPRs9RL3', '6k//ESmbT1', ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20', 'DLRoMGkdKG', 'NfuFs', '\x20(gridInde', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', '\x22\x20max=\x2220\x22', '\x20\x20\x20font-si', 'bn7UkENGjO', '5/Y58HB9sn', 'MnKq1wFSLT', '\x20<div\x20styl', '1/rZnfx+38', '310DQeuCY', '\x20\x20\x20\x20\x20displ', 'aK1HCF0mj8', 'vDNhrBl7Ef', '0CJ1rY/m11', 'JKC4pODk00', 'eview(slot', 'WSwpdri7Dj', 'nSprite', '/tystvkEfQ', 'mlFJpdqqKo', 'AlCgEbAsXw', '\x20\x20updatePr', 'b/EV2S19l1', 'sS2kvf4Su6', 'ztWamzn3yD', 'qcYGkRrs6J', 'field\x20full', '\x20\x20\x20\x20if\x20(!f', 'ldJ9mKsXWH', 'Editing\x20sl', '0XyGEgCWoL', 'Bwy4qsgsxx', 'EhFxRypAr3', 'jPKNRoqVGL', '6HpYdhnmvV', 'l3jiX1bnI+', 'none', '2iChguF0Vw', '4zT6oVZASC', 'ox-shadow:', 'hvHOtLQ0LJ', '\x20\x20\x20\x20\x20--tex', 'eNQ8LjoEgD', 'rRoaT', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20', 'WN59bDvdKS', 'wiZs/3deYF', 'lect\x20a\x20gri', 'hwybdPSaV8', 'Positions', 'yRFSJ8tynU', 'ots)\x20{\x0a\x20\x20\x20', 'Hkm2gdvNUI', '3FnzHBYTlR', 'WFmnBUxR1M', '\x20\x20\x20\x20\x20\x20\x20bod', '=\x20document', 'VFpIriUKBW', '\x20grid\x27;\x0a\x20\x20', 'm1Hmh0yW8y', 'kA/gwOc+Hz', 'Slots', '4MhQgOx2iC', 'S4a0yErOtY', ':\x20\x27\x27}>Disp', 'pfpos', '\x20deleteSlo', 'Q1HPesCrEl', 'ss=\x22sectio', 'wimxDg/ETw', 'textOffset', 'aQMfzNPkQW', 'ainer\x22\x20sty', 'abel>Speci', 'XW9ty60YUN', 'v-mz-plugi', 'WCxn0EFZA3', 'qgsYw+/LZw', 'QSdRfPlU3J', 'C+AVT4plj7', 'tx3zestTWb', 'dth:\x20auto;', 'WRqCLOQ6pz', 'm-ui,\x20sans', 'm:\x2015px;\x0a\x20', '1227592msGWHv', 'aint:\x20#555', 'rentSlotNa', 'R0cNh6mHBK', 'tion)\x20{\x0a\x20\x20', 'window.ope', 'uWQx2rki05', 'C7WmhdecW/', '\x20\x20\x20\x20\x20\x20\x20\x20<i', 'SFlHpEFlRi', 'rl2MJ3lnj4', 'toString', 'ement(\x27but', 'r:\x20none;\x0a\x20', 'BTIosdcPCi', 'rface);\x0a\x20\x20', '+7p7IA5tdt', 'bgImageInp', '2C62KQ0WBk', 'eat;\x0a\x20\x20\x20\x20\x20', 'dth\x22>\x0a\x20\x20\x20\x20', 'r7IzZ9FCMu', 'Arial', 'adding:\x2014', 'VJwHW46l7F', '_scene', 'axoNBxY1lg', '_gridHighl', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'fileInput.', 'A2TmMicJXr', 'ff;\x0a\x20\x20\x20\x20\x20\x20', 'tPropertyS', 'R6sy7YdJtN', 'mls4M2j/Ge', 'tion(e)\x20{\x0a', 'FKGFQGDtyA', 'Lq/bMPcukR', 'tConfig', '-surface);', '96P1Y9LsnI', '9BQSc4hYNZ', 'MaKkAUSGLi', '_keyboardN', 'emoveSlotB', 'O053B/jaGY', 'vz7wtvOv+5', 'geGridSlot', '\x202px\x202px\x204', 'rid', 'daOyC1CwBS', 'VsJ2IdeiT7', 'fbIIOYo0i1', 'idebar\x20{\x0a\x20', 'PHS2UXXeI0', 'BdDGP7fJP3', 'FF+LnRl7RR', 'weight:\x20bo', 'ength\x20===\x20', 'ify-conten', 'sdn0FqdqTd', 'O/SghBSzFN', '.files\x20||\x20', 'ZIGMGZSC6r', 'hm4b2k3os3', 'd2qQGjOZIN', 'PJG/L/PAKm', 'ullConfig)', 'NIOAZ', 'd\x20===\x20null', 'thTpsGrYS4', 'push', '8oKmApCren', 'YKisp', '3r+BJKZHRf', 'WZH/VeHx0g', '92GmFMKMAr', 'CLydXw62yd', 'addLoadLis', 'Ci8nFP7Ubi', 'wxaFQ5lro8', 'I4Qbn1534t', 'RUmURYX1g0', '674AALrrAL', 'hg2GQKFLsC', 'readFileSy', 'y\x20=\x20\x27none\x27', '2FpbIvH2jd', 'ed\x20Shield<', '\x200,\x2039px\x200', 'Tm4gRIO1Wo', 'GqECcoIsoV', 'toggleDrag', 'Ccz5rotC1j', 'AKBJoyO5AL', 'ccent);\x0a\x20\x20', '\x27Please\x20se', 'YhkBDNmoZN', 'FmuIe', 'ion>\x0a\x20\x20\x20\x20\x20', '2slhREWZFL', '\x20\x20\x20\x20\x20\x20bord', 'QKfl+uPxPg', 'oration:\x20n', 'ttom:\x2010px', ':\x2013px;\x0a\x20\x20', 'SE5FwDsm8h', 'OnkN/PbpJ9', 'NvfA4WAV2s', 'qeaQY2Fzrj', 'RVWzIAn4xm', 'AYI+CN9oJG', '\x20\x20\x20\x20\x20\x20\x20\x20.l', '\x20\x20\x20\x20</div>', '8Yqy0B8Sqq', '800;\x0a\x20\x20\x20\x20\x20', '6lx/rv+W6g', 'NSWG2iSiSq', '0pQ6cZ8W1G', '\x22\x20${(fullC', 'er-top:\x201p', '\x20\x20\x20columns', '25%),\x20line', 'Wscs2zTPTP', 'DqSd/UmWTr', 'o.columns\x20', 'Pa87XFtbW7', 'JYaHGMIIx+', 'i3aYUCTvAV', 'PXRQR1iP2W', '1aF9Tbg2ng', 'luk45Fh3f6', 'xt)\x20!impor', 'IQWQuYYRFe', 'lAeRbwW4gD', 'nVnM/I7Zzx', 'deleted.\x20S', '\x20\x20\x20\x20\x20delet', '2nzr9Bmf39', 'fOKD/ku7h/', 'FFHXtfzxvR', 'HHXXF', '\x20\x20\x20\x20\x20\x20\x20\x20co', 'pVSdZfWrOC', '\x20\x20\x20\x20\x20\x20\x20<la', 'aZXB54g0jY', 'sdGHkKSGxM', 'one;\x0a\x20\x20\x20\x20\x20', 'bcljwsjPYm', 'YPElfztGVZ', 'Z9xw2k1L/k', 'iuWpESj1yh', 'XRz89tyIcs', 'x-shadow:\x20', '\x20\x20\x20\x20\x20const', 'rAogV9SaC2', '(slotName)', 'epeat:\x20rep', 'ykLWDWHdMB', 'BFoNiBQy0A', 'if\x20not\x20usi', 'wZixtruWek', ',\x20\x27_\x27));\x0a\x20', 'hsLY5wSBRh', 'active\x27);\x0a', '.15s;\x0a\x20\x20\x20\x20', 'em\x27).lengt', 'Ne7E5BMabQ', 'Panel\x20=\x20do', '(success,\x20', 'jqsLz2r+ln', '\x20\x20flex-wra', 'ext\x20Shown\x20', 't;\x0a\x20\x20\x20\x20\x20\x20\x20', '3JWMiFgGE4', 'zos4ZFs/Y5', 'G5q7aH4hNu', 'highlightG', 'GfecP', 'o.rows\x20||\x20', 'v3Pu/c7Z5w', 'iNTvR', 'px\x20rgba(0,', 'uPiP10ZNTW', 'E2OfA1D8tV', 'BinFz2ecQS', 'index);\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20sl', 'yFAKboiR4p', 'y1CyZPSvq4', '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20', 'vSuND0Kw2G', 'gfRTlcxhC3', 'rb2cvHbL8Z', 'TRgUxzi5Oy', 'er\x22\x20id=\x22gr', 'wHrP1ou+Dp', '87mS3VsPrT', 'WFQhAyZFPo', 'ow.opener.', 'unction(sl', '\x20\x20\x20<input\x20', '4ssMYUGDt1', 'ay\x20=\x20\x27bloc', '\x20\x20text-dec', 'padding:\x208', 'ById(\x27grid', 'yVte3ohGcR', 'ithoutExt)', 'H3fzuEMz7C', 'grid_', 'ected\x27\x20:\x20\x27', 'ue)\x22>\x0a\x20\x20\x20\x20', 'ound:', 'xNpiG3a0yZ', 'vKJKW', 'rjqhz0NVgY', 'ANoNhE4M+N', '9AjaSl0Y6O', 'D+7c37bdCl', 'ntCreateSl', '\x27}>Skill\x20S', 'rfsEozMwHa', 'background', 'N7HxG1+/3u', 'uRbNBZBBdI', 'lwzhcAzLJg', 'center;\x0a\x20\x20', '10TQ0QFTZy', 'k=\x22window.', '6IuJfRv3OA', 'Index);\x0a\x20\x20', 'eI3/mpZCpU', 'ig.Button.', 'AxxeICVeAr', 'onst\x20input', '\x22\x20min=\x220\x22\x20', '=\x20\x27display', 'acity:\x200.7', 'justify-co', '3pe6FzBIUV', 'XSrmvIj5U6', 'e\x20=\x20\x27list-', 'items:\x20cen', 'fQ/TQlwsqT', 'fuWF3iOnKP', '-btn\x20{\x0a\x20\x20\x20', 'QGRMnVWvf0', '\x20\x20\x20\x20\x20if\x20(!', 'oOB1OqnTyY', '4MXnqHdMxw', 'nT2S5JhUmH', 'bitmap', 'LVEcOaLUT3', ';\x22\x20onchang', 'kU7szOlMC8', 'itle>\x0a\x20\x20\x20\x20', '6RVVbFR6fX', '\x27);\x0a\x20\x20\x20\x20\x20\x20', 'TKDGxmztuH', 'IxpWemc4zF', 'VJz+0VsLnt', 'EbgkPgIOdR', '2dhqFIhhHK', 'qmNx2Saa7y', 'VHBEEZGmCD', '0+A90dCNo1', '8eFKa6Gpwb', 'MEWZZbuFa5', 'nMKrcHIYhZ', 'EGWATcCBqD', 'ZljJ1/p0PU', 'umJzjKM+ZN', 'ExKHFs0IAS', 'y\x27\x20+\x20slotN', 'JjZit', 'A+PsTQAaeu', 'XoqhKhMcfI', 'n8q6cOKaYH', 'tLzNh', 'PbX4ef1w3/', '/ldcJlwoUx', '3g21GPl3uV', 'y9Hi78TDve', 'mrSxilAWK+', 'Fn/pOUMfzv', 'nA2sxwSwlx', '1rM0HTKN4A', '6NbLh41foF', '+GJ5NKGIFc', 'context', 'q7eY5dfh+n', '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'mqIoGn/KpI', 'Hq2cbNiw4e', '0px\x200;\x22>\x0a\x20', '5VC0BUZGUA', 'uKTXrQnOPW', 'aeVPK', 'iThCfE2ikv', 'ACwWIKSUkW', 'uHnZ+4FBD0', 'jySLFjWCcS', 'EI2EczHs9I', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', '\x27number\x27)\x20', 'itor]\x20togg', 'jYX708BrMc', 'PSiZ5FKoAX', 's\x20to\x20Grid\x0a', 'ncgZXOppwO', 'is.checked', 'updateEdit', '\x20<input\x20ty', 'DI8832YNAO', 'label>Rows', 'wFULqCkASI', 'CeFkrrgPab', 'ot()\x20{\x0a\x20\x20\x20', '\x20var(--sha', '0jJHYQIItn', 'font-size:', '\x20\x20\x20\x20\x20\x20\x20<h3', 'q6gh0tt1VL', 'es[0])\x20ret', 'Error\x20arra', 'jM3iywn1Vi', 'padding:\x205', 'YgRlP0ZngO', 'p+1dnBuujj', 'Slot\x20not\x20f', '2kRtlw3AKk', 'ener.selec', '215,\x200,\x20', 'gsyusQ1ZIG', 'GrJ2Gi4eB6', '7FhcMOEOZl', 'pUQacoYcYc', 'm7aY3jGjm3', 'jUrW7YFCWP', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', 'qJFyoFr1PF', '6wtTNzs', '9GU0IIOfYB', 'tNameKb\x22\x20v', 'iumNbFidPu', '2px;\x20}\x0a\x20\x20\x20', '4gS4bB0Qzm', 'vXfPw0+tNW', 'KAHk4izUOg', '=\x22item_onl', '\x20\x20\x20\x20\x20\x20pane', 'czRwa', '-webkit-sc', '=\x22gridBgIm', 'Y+F7C0UOon', 'kEWEKEJh7c', '\x20reader.on', 'GoHgH11IJE', '/knK/fczYw', 'avior', 'XszviYGZfZ', 'Xasev7b6v6', 'AtntDltlkD', '3dU7l1qtmV', '\x20\x20\x20\x20\x20\x20\x20\x20on', 'without\x20ex', '\x20\x20\x20\x20\x20\x20\x20\x20e.', '\x20slot\x20+\x20of', 'pendChild(', '\x20\x20\x20\x20\x20\x20\x20\x20wi', 'message', '\x20\x20\x20\x20\x20\x20\x20fon', 'W7SmpjDzzd', '\x20=\x20panel.d', 'GBP2gWXjv9', 'yRsAZd8+Aq', 'PPQQSiVE2s', 'tSlotPrope', 'QMp58VrFzN', 'lYOJt+8zvx', 'zV8E/Fqovd', 'replace', 'IaeMDjAQ/I', 'dius-sm:\x208', 'cTIarOWgCn', '7Mdsg11A/b', 'isplay\x20Equ', 'KiUsZ0mQsH', 'us:\x20var(--', 'otName.rep', 'Position', 'cing:\x200.3p', 'taxab', 'nd\x20Image</', 's)\x20{\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20', 'get', '\x20\x20\x22>\x0a\x20\x20\x20\x20\x20', 'BhaXSjYsHQ', 'cDXsg', 'Fr8HPk6sQq', 'e);\x0a\x20\x20\x20\x20\x20\x20', 'fFQRJV4hjl', 'iv\x20class=\x22', '\x20\x20\x20margin-', 'faOXRP3/1n', 'tion();\x0a\x20\x20', 'QLxPnCaPEd', 'IcJwgU/yFd', '11UZ8lS877', 'DXMCvCI/Hh', 'full-width', 'fIIeQEchYZ', '\x20\x20\x20<div\x20id', 'Q46ctsfgwp', 'th\x22>\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20m', 'Xv6s4sgn6a', '</div>\x0a\x20\x20\x20', 'SyaO2W6eHX', 'yyqmvECLmq', 'oGYwNMHKQl', '10px;\x0a\x20\x20\x20\x20', 'ots', 'findIndex', 'bGVTchRsmG', '1;\x22>\x0a\x20\x20\x20\x20\x20', 'vlC9Wv2I+i', 'IV1+zRIBLf', 'i4pTkCswxi', 'value)\x20>\x20p', 'FzJKFRftEA', 'd\x27,\x20functi', '\x20\x20</select', 'lue=\x22${inf', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', 'Name);\x0a\x20\x20\x20', '\x20\x20\x20\x20showSl', 'ETv1ePfxSW', 'ound:\x20', 'JXXeijrsn5', 'Image', 'round:\x20', 'm.classLis', 'ndrix.itch', 'V72cW3lPX3', 'QZRkIrmwEk', '\x20\x20\x20\x20\x20\x20wind', '%;\x20padding', '3Nxq5G+AMs', 'xmY6yLg8IZ', '\x200%,\x20trans', 'zUlNag0Jr0', 'yYe7VsQqZ3', 'qDikl4iiSg', '!input.fil', '\x20\x20name.cla', '\x20=\x20parseFl', 'CybnmKi/Ow', 'btn:hover\x20', 'dow.opener', '\x20\x20\x20\x20\x20\x20\x20\x20ga', ')\x20!importa', 'id\x20to\x20slot', 'BhVAOrd/tJ', 'd(\x27slotPre', 'return;\x0a\x20\x20', 'g4j28J2n8i', 'cFcZR', 'MRbeFx8uP9', ';\x20margin-b', '\x20\x20\x20\x20\x20\x20\x20\x20te', '+pMZ057ZBP', 'n\x22\x20onclick', '\x20\x20\x20\x20\x20\x20Rese', 'ld\x20input,\x0a', 'osYInput\x20=', 'ft34Ohq/ru', 'kVOVh', '_onMouseUp', 'rgd3GTeEG8', 'er.arrange', 'Panel\x27);\x0a\x20', 'cTqELZDPil', '7AOuPMicq4', 'PxaPeVW2m2', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a', '\x20safeId;\x0a\x20', 'J1ltXW2WYC', '\x20\x20backgrou', '\x20\x20\x20\x20\x20\x20\x20\x20do', 'Slot)\x20{\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20Ar', 'lcnVlVVQCk', ':\x2012px;\x22>\x0a', 'YY4XqWGPA6', 'title\x20=\x20\x27D', 'exyYeG20Z9', 'YGfIgkCAJw', 'pbUp3Z+y4L', 'KKcofynEql', '-content\x20{', 'G/7n6cf21V', '.appendChi', '\x20body\x20{\x20\x0a\x20', 'ApHaNKCUUM', 'eEx51vQe9w', 'llSlotConf', 'r-track\x20{\x20', 'leViaGamep']; _0x428e = function () { return _0x35e4f1; }; return _0x428e(); } const DRAG_THRESHOLD = -0x1f6a + 0x43 * 0x34 + -0x1fb * -0x9, _TouchInput_onMouseDown_VisualEditor = TouchInput['_onMouseDo' + 'wn']; TouchInput[_0x7069f0(0x5a5) + 'wn'] = function (_0x11d8a1) { const _0x4361bf = { _0x3063a4: 0x732, _0x1b75d3: 0x73d }, _0x1006c5 = _0x7069f0; if (editorMode && SceneManager['_scene'] instanceof Scene_Map) { const _0x34b4d1 = Graphics['pageToCanv' + 'asX'](_0x11d8a1['pageX']), _0x20651a = Graphics['pageToCanv' + 'asY'](_0x11d8a1[_0x1006c5(_0x4361bf._0x3063a4)]), _0x4f7ae4 = {}; _0x4f7ae4['x'] = _0x34b4d1, _0x4f7ae4['y'] = _0x20651a, clickStartPos = _0x4f7ae4, clickStartTime = Date[_0x1006c5(_0x4361bf._0x1b75d3)](); } _TouchInput_onMouseDown_VisualEditor['call'](this, _0x11d8a1); }; const _TouchInput_onMouseUp_VisualEditor = TouchInput['_onMouseUp']; TouchInput[_0x7069f0(0xb7b)] = function (_0x5e2190) { const _0x45c0ff = { _0x4ecc7c: 0x9b4, _0x130cf1: 0x360, _0x2af46d: 0x3eb }, _0x19030 = _0x7069f0; if (editorMode && SceneManager[_0x19030(_0x45c0ff._0x4ecc7c)] instanceof Scene_Map && clickStartPos) { const _0x4b07c = Graphics['pageToCanv' + _0x19030(_0x45c0ff._0x130cf1)](_0x5e2190['pageX']), _0x47f1a1 = Graphics[_0x19030(0x7bf) + 'asY'](_0x5e2190['pageY']), _0xff2496 = Date['now']() - clickStartTime, _0x161dae = _0x4b07c - clickStartPos['x'], _0x4b7725 = _0x47f1a1 - clickStartPos['y'], _0x52a102 = Math['sqrt'](_0x161dae * _0x161dae + _0x4b7725 * _0x4b7725); _0x52a102 < DRAG_THRESHOLD && _0xff2496 < -0x5 * -0x9d + 0xb8d * -0x2 + -0x1b1 * -0xd && trySelectSlotAtPosition(_0x4b07c, _0x47f1a1), clickStartPos = null; } _TouchInput_onMouseUp_VisualEditor[_0x19030(_0x45c0ff._0x2af46d)](this, _0x5e2190); }; function trySelectSlotAtPosition(_0x3206aa, _0x5bbcab) { const _0x2ffb6a = { _0x2d07a8: 0x9b4, _0x32e3fc: 0x928, _0x7481a7: 0x823, _0x431550: 0x210, _0x28bca4: 0xb0e, _0x3aaf11: 0x823, _0x5f4bba: 0x5a6 }, _0x2ea63e = _0x7069f0; if (!SceneManager[_0x2ea63e(_0x2ffb6a._0x2d07a8)] || !SceneManager[_0x2ea63e(_0x2ffb6a._0x2d07a8)][_0x2ea63e(_0x2ffb6a._0x32e3fc)]) return ![]; for (const [_0x5050da, _0x3400da] of SceneManager['_scene']['_skillUI'][_0x2ea63e(_0x2ffb6a._0x7481a7)]) { if (_0x2ea63e(_0x2ffb6a._0x431550) === _0x2ea63e(0x2dc)) _0x45bfbc('Error\x20arra' + 'nging\x20slot' + 's:\x20' + _0x4ee1d2[_0x2ea63e(_0x2ffb6a._0x28bca4)]); else { const _0x17f889 = _0x3400da[_0x2ea63e(0x4be)] || 0x1663 + -0xffb * 0x2 + 0x1 * 0x9d3, _0x2d0c94 = _0x3400da['height'] || -0x200e + 0x2 * -0xb32 + 0x2 * 0x1b59; if (_0x3206aa >= _0x3400da['x'] - _0x17f889 / (0x45b * 0x5 + -0x1 * -0x829 + -0x1dee) && _0x3206aa <= _0x3400da['x'] + _0x17f889 / (0x100b * 0x1 + 0x1d85 + -0x2d8e) && _0x5bbcab >= _0x3400da['y'] - _0x2d0c94 / (-0x15a6 + -0x12e3 + 0x288b) && _0x5bbcab <= _0x3400da['y'] + _0x2d0c94 / (0x24f9 + -0x244e + -0xa9 * 0x1)) return currentSelectedSlot = _0x5050da, window['selectSlot' + 'InGame'](_0x5050da), VisualEditorWindow && !VisualEditorWindow['closed'] && ('oMkWv' !== 'oMkWv' ? (_0x514576 = new _0x1e4430(_0x333af7), _0x2b5a4e['x'] = _0x1bee85['x'], _0x310cb1['y'] = _0x4a7217['y'], _0x55760b[_0x2ea63e(_0x2ffb6a._0x3aaf11)]['set'](_0x314776, _0x3cca3a), _0x54d98c[_0x2ea63e(_0x2ffb6a._0x5f4bba)](_0x58015c)) : VisualEditorWindow['selectSlot' + 'FromGame'](_0x5050da)), !![]; } } return ![]; } function _0x53c4(_0x5e2e4c, _0x1259f3) { _0x5e2e4c = _0x5e2e4c - (0x77 * -0x6 + 0x401 + 0xb * 0x7); const _0x5d30b0 = _0x428e(); let _0x2923c7 = _0x5d30b0[_0x5e2e4c]; return _0x2923c7; } if (Object[_0x7069f0(0x65d) + _0x7069f0(0x224) + 'ptor'](document, _0x7069f0(0x682))?.['configurab' + 'le'] !== ![]) { const originalHasFocus = document['hasFocus']['bind'](document); Object[_0x7069f0(0x26f) + _0x7069f0(0x748)](document, _0x7069f0(0x682), { 'value': function () { return ConfigManager['alwaysRun'] || originalHasFocus(); }, 'writable': ![], 'configurable': !![] }); } function getConfigPath() { const _0x5914a4 = { _0x212a01: 0x331 }, _0xe490cb = _0x7069f0; if (!Utils['isNwjs']()) return null; const _0x262f2d = require(_0xe490cb(_0x5914a4._0x212a01)), _0x33cb7b = _0x262f2d['dirname'](process['mainModule']['filename']) + '/js/'; return _0x262f2d[_0xe490cb(0x40c)](_0x33cb7b, 'HotbarConf' + 'ig.json'); } function getProjectRoot() { if (!Utils['isNwjs']()) return null; const _0x241167 = require('path'); return _0x241167['dirname'](process['mainModule']['filename']); } function getJsPath() { const _0x44a513 = { _0x146f0c: 0x277 }, _0x308915 = _0x7069f0; if (!Utils[_0x308915(0xbd0)]()) return null; const _0x1eb098 = require('path'); return _0x1eb098[_0x308915(_0x44a513._0x146f0c)](process['mainModule']['filename']) + _0x308915(0x282); } function loadConfigFile() { const _0x198858 = { _0x19ac7f: 0x801, _0x4d1400: 0x9f0, _0x44d853: 0x5c8, _0xf59b52: 0x4ef }, _0x3440a6 = _0x7069f0; if (!Utils['isNwjs']()) return null; const _0x5e8299 = require('fs'), _0x206c43 = getConfigPath(); try { if (_0x5e8299[_0x3440a6(_0x198858._0x19ac7f)](_0x206c43)) return JSON['parse'](_0x5e8299[_0x3440a6(_0x198858._0x4d1400) + 'nc'](_0x206c43, 'utf8')); } catch (_0x42b8b7) { console[_0x3440a6(_0x198858._0x44d853)]('[Hotbar]\x20E' + _0x3440a6(_0x198858._0xf59b52) + 'ng\x20config:', _0x42b8b7); } const _0x57a52f = {}; return _0x57a52f['grids'] = [], _0x57a52f[_0x3440a6(0x8e8)] = {}, _0x57a52f; } function saveConfigFile(_0x21859d) { const _0x268d4d = _0x7069f0; if (!Utils['isNwjs']()) return ![]; const _0x53d9d0 = require('fs'), _0x3d208b = getConfigPath(); try { if ('RKxzu' === 'RKxzu') return _0x53d9d0['writeFileS' + 'ync'](_0x3d208b, JSON['stringify'](_0x21859d, null, 0x1 * -0x241f + -0xf5d + 0x337e), _0x268d4d(0x4fe)), !![]; else _0x564c70['error']('Error\x20load' + 'ing\x20grid\x20i' + 'nfo:', _0x1ec869); } catch (_0xd2f96e) { return console['error']('[Hotbar]\x20E' + 'rror\x20savin' + 'g\x20config:', _0xd2f96e), ![]; } } function reloadGridSettings(_0x418d8b = ![]) { const _0x1de597 = { _0x5caee0: 0x8f5 }, _0xd80861 = { _0xff498d: 0x5c8 }, _0x71fd1e = { _0x530d66: 0x9b4, _0x57b129: 0x9b4, _0x223949: 0x823, _0x4a8977: 0x5a6, _0x594893: 0x77a, _0x30ec47: 0x915, _0x14664c: 0x60f, _0x518e3e: 0x767, _0x4d2ed7: 0x522, _0x88a26f: 0x749, _0x11eb33: 0x1fe }, _0x23698c = _0x7069f0; if (Utils['isNwjs']()) { if ('KMDLe' !== 'GPMuW') { const _0x4bdaf3 = loadConfigFile(); if (_0x4bdaf3) return gridSettings = _0x4bdaf3['grids'] || [], !![]; } else _0x875b38['updateEdit' + 'orLists'](); } else return fetch(_0x23698c(_0x1de597._0x5caee0) + _0x23698c(0x686))[_0x23698c(0x327)](_0x5bd475 => _0x5bd475['json']())['then'](_0x47fa38 => { const _0x154709 = _0x23698c; gridSettings = _0x47fa38['grids'] || []; if (_0x418d8b && SceneManager[_0x154709(_0x71fd1e._0x530d66)] && SceneManager[_0x154709(_0x71fd1e._0x57b129)]['_skillUI']) { if ('CgAce' !== 'CgAce') { const _0x533a52 = _0x15d635['_scene'][_0x154709(0x928)]; let _0x48cb50 = _0x533a52[_0x154709(_0x71fd1e._0x223949)]['get'](_0xe2a2c5); if (!_0x48cb50) _0x48cb50 = new _0x2ab011(_0xcd50b5), _0x48cb50['x'] = _0x221a98['x'], _0x48cb50['y'] = _0xe2b7c6['y'], _0x533a52[_0x154709(0x823)]['set'](_0x55fb53, _0x48cb50), _0x533a52[_0x154709(_0x71fd1e._0x4a8977)](_0x48cb50); else { _0x48cb50[_0x154709(_0x71fd1e._0x594893)] = _0x39e421, _0x48cb50['x'] = _0x1326e7['x'], _0x48cb50['y'] = _0x47669f['y']; if (_0x48cb50[_0x154709(_0x71fd1e._0x30ec47) + _0x154709(_0x71fd1e._0x14664c)]) _0x48cb50[_0x154709(0x915) + 'ground'](); if (_0x48cb50['positionBu' + 'ttonText']) _0x48cb50['positionBu' + 'ttonText'](); if (_0x48cb50[_0x154709(0x767) + 'tonText']) _0x48cb50[_0x154709(_0x71fd1e._0x518e3e) + _0x154709(_0x71fd1e._0x4d2ed7)](); } if (_0x533a52[_0x154709(_0x71fd1e._0x88a26f) + 'rounds'] && _0x533a52['_gridBackg' + 'rounds'][_0x1507a2]) { const _0x2fc57e = _0x533a52[_0x154709(0x749) + _0x154709(0x57f)][_0x325468]; _0x2fc57e[_0x154709(0x209)] = _0xb05549['grids'][_0x47f3c6], _0x2fc57e['_gridSlots'] = []; } } else SceneManager['goto'](SceneManager['_scene'][_0x154709(_0x71fd1e._0x11eb33) + 'r']); } })[_0x23698c(0x34d)](_0x4b5d5f => { const _0x22314c = _0x23698c; console[_0x22314c(_0xd80861._0xff498d)]('[Hotbar]\x20F' + 'ailed\x20to\x20l' + 'oad\x20Hotbar' + 'Config.jso' + 'n:', _0x4b5d5f); }), !![]; return ![]; } reloadGridSettings(![]);
})();