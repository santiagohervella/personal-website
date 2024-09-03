---
title: Supercharge
subtitle: Elevate your Mac experience
pubDate: 2024-09-29
platforms:
  - macOS
isPaid: true
mainLinks:
  'Download': https://sindresorhus.gumroad.com/l/supercharge?wanted=true
# olderMacOSVersions:
#   - '15
---

<sup>Requires macOS 15+</sup>

Improve your Mac experience with a bunch of useful functionality:

- Hide all windows <sup>(aka. boss mode)</sup>
- Show the [menu bar window](https://github.com/user-attachments/assets/1b8e2e12-187a-4d32-8ba3-c13f154de9e0) for the Passwords app with a keyboard shortcut
- Toggle Finder with a keyboard shortcut <sup>(aka. [visor mode](https://totalfinder.binaryage.com/visor))</sup>
- Finder: Move files by cutting[^commandx] (<kbd>Command+X</kbd>) and pasting (<kbd>Command+V</kbd>)
- Finder: Open files with <kbd>Return</kbd>
- Finder: Create new text file with <kbd>Option+N</kbd> *([video](https://github.com/user-attachments/assets/cb2c4606-12eb-4915-a64c-9b8ac3e123cf))*
- Finder: Move files to the trash with <kbd>⌫</kbd> instead of <kbd>⌘⌫</kbd>
- [Mail: Copy message link](#mail-copy-message-link)
- Quit apps with <kbd>⇧⌘Q</kbd> instead of <kbd>⌘Q</kbd> to prevent accidental quitting[^quit]
- Unminimizes an app’s windows when activated <sup>(e.g., via Command+Tab)</sup>
- Export/import (backup) settings for any apps *([video](https://github.com/user-attachments/assets/82727408-3acb-4c18-91c6-428f1e0ad8c5))*
- [Offers to install apps from mounted DMG files](https://github.com/user-attachments/assets/5ecb9b0b-5719-4382-98a0-c3316bd20a6b)
- [Only show system sound menu bar icon when muted](https://github.com/user-attachments/assets/10447e39-f288-406b-a504-6ab7b8fcf261)
- Toggle dark mode
- Toggle low power mode
- Toggle grayscale mode[^grayscale]
- Toggle desktop widgets visibility
- Clear clipboard
- Add [Dock spacers](#dock-spacers)
- Reset [privacy permissions](https://support.apple.com/en-vn/guide/mac-help/mchl211c911f/mac) for any apps
- *More planned…*

This is my playground for supercharging macOS. It's just the start. Come along for the ride.

- [**Video review**](https://www.youtube.com/watch?v=hp-WMYZQ75U)
- [**Article about the app**](https://todayonmac.com/supercharge/)

[^commandx]: Without this feature, you have to first copy (<kbd>Command+C</kbd>) and then remember to move (<kbd>Option+Command+V</kbd>). The feature works by overriding the normal cut <kbd>⌘X</kbd> keyboard shortcut when Finder is active and executes a copy <kbd>⌘C</kbd> instead. When you then paste <kbd>⌘V</kbd>, it executes the native move <kbd>⌥⌘V</kbd> keyboard shortcut. So really, it's Finder moving the files. This app just makes the keyboard shortcuts more intuitive. If you don't paste, the files just stay in place. This feature also works with the Forklift app.

[^quit]: The <kbd>Q</kbd> key is next to <kbd>W</kbd>, making it easy to accidentally hit <kbd>Command+Q</kbd> (quit) when reaching for <kbd>Command+W</kbd> (close window).

[^grayscale]: Grayscale mode on macOS can be a useful tool for various purposes. It can help reduce eye strain during long work sessions, especially in low-light environments. For designers and developers, it's valuable for checking contrast and readability of user interfaces without the influence of color. Content creators may use it to evaluate the tonal balance of images or videos. Additionally, some users find that grayscale helps minimize distractions and improve focus by reducing the visual appeal of non-work-related apps and websites. While initially an adjustment, many users report increased productivity and a more mindful approach to computer usage when employing grayscale mode periodically.

---

#### Features explained

<br>

##### Copy message link in Mail {#mail-copy-message-link}

When you are in the Mail app, you can [open the Supercharge menu](https://github.com/user-attachments/assets/5cce205b-6743-4a60-958c-074a308ccc68) to copy a direct link to one or more selected messages. This can be useful if you want to refer to specific emails in other contexts. The link will look like this: `message://%3c66e85e1db33c7_961cfc499cd@lowworker-c6756b946-4rskj.mail%3e`.

---

You may also like my [Shareful](/shareful), [Menu Bar Spacing](/menu-bar-spacing), and [Pure Paste](/pure-paste) apps.

---

### Trial

Try the fully functional trial [here](https://www.dropbox.com/scl/fi/znx46si7vbd8v2ubgyju9/Supercharge-1.4.0-trial-1730047211.zip?rlkey=n9kkih2fynwjr8qfr5gzsmewo&raw=1). The only limitation is a reminder to buy the app every 12 hours, and no automatic updates. All data and settings carry over if you buy it.

**Requires macOS 15**

### Tips

#### Troubleshooting {#troubleshooting}

- Ensure you are on the latest version (click the “Check for Updates” button).
- Restart your computer.
- Try closing any anti-virus app you have running as it may interfere with the app (or at least disable any Secure Keyboard Entry type setting it may have). And if you don't have any anti-virus app, try closing down all apps and menu bar items, just to rule out some other app interfering. If it's a work computer, your company may have something installed that prevents the app from working.
- Try clicking “Reset Permissions” in the Supercharge menu.

##### Cut and paste files troubleshooting

Ensure you pressed <kbd>Command+X</kbd> and not <kbd>Command+C</kbd>.

To make sure you used the app correctly. Try this: Select a file in Finder, press <kbd>Command+X</kbd>, change to a different folder, press <kbd>Command+V</kbd>. The file should have been moved to this new folder.

**Note:** You cannot cut, highlight a folder, and then paste. You have to actually go into the folder to paste to it. That's just how Finder works. Same with copy-pasting.

#### Tricks

Some things you can already do that you may not know about:

- Hide an app by <kbd>Option</kbd>-clicking on the app's Dock icon.
- Show Control Center by pressing <kbd>Fn+C</kbd>.
- Toggle a specific VPN using a keyboard shortcut with Shortcuts. Add [this shortcut](https://www.icloud.com/shortcuts/a0c3171fe98a4379b8197299a84b060e) and set the VPN parameter and a keyboard shortcut.
- [Make Finder remember its size and position.](https://apple.stackexchange.com/a/171274/2363)
- [Prevent opening apps when clicking links that are Universal Links.](https://lapcatsoftware.com/articles/universal-links2.html)

### Frequently Asked Questions {#faq}

#### I have a feature request, bug report, or some feedback

Click the feedback button in the app or [send it here.](https://sindresorhus.com/feedback?product=Supercharge&referrer=Website-FAQ)

Some things are not possible though:

- [Removing the Trash icon in the Dock.](https://apple.stackexchange.com/a/454812/2363)
- Removing the Finder icon in the Dock.

#### The app does not show up in the menu bar

macOS hides menu bar apps when there is no space left in the menu bar. This is a common problem on MacBooks with a notch. Try quitting some other menu bar apps to free up space. If this does not solve the issue, try quitting Bartender/Ice if you have it installed.

You may also have disabled the “Show menu bar icon” setting, which hides the menu bar icon. Launch the app again to show the main window.

#### I can already do this with the command-line, BetterTouchTool, Keyboard Maestro, etc.

Supercharge offers a simpler, more user-friendly approach. It's designed for users who want quick access to useful features without the complexity of scripting or configuring advanced tools. Supercharge provides a curated set of enhancements that work right out of the box, saving you time and effort in setup and maintenance. If you prefer more granular control and don't mind the setup process, those other tools might be a better fit for you.

#### Why <kbd>Command+X</kbd>? I can already move files with <kbd>Command+C</kbd> and <kbd>Option+Command+V</kbd>

- It's more logical to cut & paste than copy & move.
- Consistency and muscle memory benefits if you also use Linux or Window.

#### What are Dock spacers? {#dock-spacers}

Dock spacers are [invisible gaps](https://res.cloudinary.com/cpenned/image/upload/f_auto,w_auto/v1636732613/Blog/post-images/20211112-dock.jpg) you can add to your Mac's Dock. They help organize your apps into groups, improving visual clarity. Supercharge lets you easily add these spacers, giving you better control over your Dock's layout.

#### Can I add custom actions to the app?

As of now, the app focuses on providing a curated set of built-in features for enhancing your Mac experience. I'm happy to consider requests.

#### Can you add a certain toggle?

I'm happy to consider requests, but I don't intend for this app to turn into a “toggler” app. I have just provided some commonly needed toggles.

Some toggles I don't plan to add:

- AirPods
- Keep awake *(check out [Lungo](/lungo))*

#### I cannot use <kbd>Control+Space</kbd> or <kbd>Control+Shift+Space</kbd> as a keyboard shortcut

Go to “System Settings › Keyboard › Keyboard Shortcuts › Input Sources” and disable them all.

#### Why is this not in the App Store?

Much of the functionality would not be possible in the App Store because of sandboxing.

#### [More FAQs…](/apps/faq)

<!-- ### Older Versions

- [] for macOS 14

These are free for everyone but they will not run on newer macOS versions.
 -->
