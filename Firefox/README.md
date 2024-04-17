# Installing Firefox via Apt (Not Snap) and get different instances running at the same time.

Here is my solution to a problem I always face on ubuntu linux and relatives distros.

I like Firefox and I want to have two different instance of firefox running at the same time, one for personal issues and the other for development, but I need it to be on different selector on the taskbar (Not overlapped on the same icon).

So, to sove this, first I had to get rid of snap installation and install it with repositories (like the good old days).

Here is the webpage where I found it how to: https://www.omgubuntu.co.uk/2022/04/how-to-install-firefox-deb-apt-ubuntu-22-04

# Step 1: Uninstall the Firefox Snap:

sudo snap remove firefox

and just ins case also

sudo apt remove firefox

# Step 2: Create an APT keyring (if one doesn’t already exist):

sudo install -d -m 0755 /etc/apt/keyrings

# Step 3: Import the Mozilla APT repo signing key (if wget is missing install it first):

wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null

# Step 4: Add the Mozilla signing key to your sources.list:

echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null

# Step 5: Set the Firefox package priority to ensure Mozilla’s Deb version is always preferred. If you don’t do this the Ubuntu transition package could replace it, reinstalling the Firefox Snap:

echo '
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000
' | sudo tee /etc/apt/preferences.d/mozilla

# Step 6: Finally, install the Firefox DEB in Ubuntu:

sudo apt update && sudo apt install firefox
# Step 7 (Optional): To use a localised version of Firefox (i.e. the UI in a language other than American English) you need to install the corresponding language package, e.g., for French:

sudo apt install firefox-l10n-fr

You can see a list of all available language packs by running apt-cache search firefox-l10n.

# Then, you have to start firefox with different profiles

$ firefox -P

Here is the main data on the web: https://support.mozilla.org/en-US/kb/profile-manager-create-remove-switch-firefox-profiles#:~:text=Firefox%20is%20closed.-,Manage%20profiles%20when%20Firefox%20is%20open,%2C%20passwords%2C%20and%20preference%20settings.

Once you have two or more profiles created, you need to create a .desktop for each one. This is to get a different application launcher for each profile, and to have it running in separate takbar icons.
You can find examples attached to this project.

To get the launchers working, on Ubuntu, you need to place it inside your home folder .local/share/applications


# Didin't work? Ok, wait, here is another one.

Reference link: https://askubuntu.com/questions/1399383/how-to-install-firefox-as-a-traditional-deb-package-without-snap-in-ubuntu-22

# Step 1:
The other answer by Organic Marble is for Firefox-ESR, and the answer by eddygeek is for the beta version.
This answer is for the latest stable version of Firefox. You can use the Firefox PPA maintained by Mozilla team.

sudo add-apt-repository ppa:mozillateam/ppa

# Step 2:
Then, copy and paste the following code in a terminal in one go (don't copy-paste line by line) to prioritize the apt version of firefox over the snap version.

echo '
Package: *
Pin: release o=LP-PPA-mozillateam
Pin-Priority: 1001

Package: firefox
Pin: version 1:1snap1-0ubuntu2
Pin-Priority: -1
' | sudo tee /etc/apt/preferences.d/mozilla-firefox

# Step 3
Next, remove the snap version of firefox

sudo snap remove firefox

Also, just in case, do this one:

sudo apt remove firefox

# Step 4:
If you see the following error,

error: cannot perform the following tasks:
- Remove data for snap "firefox" (1943) (unlinkat /var/snap/firefox/common/host-hunspell/en_ZA.dic: read-only file system)

Then run the following commands (source https://askubuntu.com/a/1434769/124466 ) to disable the hunspell service, and try removing Firefox snap once again.

sudo systemctl stop var-snap-firefox-common-host\\x2dhunspell.mount
sudo systemctl disable var-snap-firefox-common-host\\x2dhunspell.mount
sudo snap remove firefox

# Step 5:

Install Firefox with apt.

sudo apt install firefox

# Step 6:

To ensure that unattended upgrades do not reinstall the snap version of Firefox, enter the following command. Alternatively, you can turn off unattended upgrades. https://www.omgubuntu.co.uk/2016/02/how-to-disable-automatic-update-ubuntu

echo 'Unattended-Upgrade::Allowed-Origins:: "LP-PPA-mozillateam:${distro_codename}";' | sudo tee /etc/apt/apt.conf.d/51unattended-upgrades-firefox
