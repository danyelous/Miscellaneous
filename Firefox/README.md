Here is my solution to a problem I always face on ubuntu linux and relatives distros.

I like Firefox and I want to have two different instance of firefox running at the same time, but I need it to be on different selector on the taskbar (Not overlapped on the same icon).

So, to sove this, first I had to get rid of snap installation and install it with repositories (like the good old days).

Here is the webpage where I found it how to: https://www.omgubuntu.co.uk/2022/04/how-to-install-firefox-deb-apt-ubuntu-22-04

# Step 1: Uninstall the Firefox Snap:

sudo snap remove firefox

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
