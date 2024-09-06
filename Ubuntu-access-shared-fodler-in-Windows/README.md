# How to access a shared folder on Windows from Ubuntu Nautilus

Ok, At this point, the selected folders in windows should be shared and accessible. 

There is a need to access with password, so, if the Windows user has a password, no problem. If not, a Windows user must be created with access to the shared folder with password.

Once there, there is no need to install any aditional software to Ubuntu.

# Open the file browser Nautilus in Ubuntu.
At the bottom, there is a entry called: "+ Other locations"

Click there, now at the bottom there is a place to enter a link address, there should be link this:

smb://WORKGROUP;winuser:password@PCNAME/foldername

maybe, the windows user password need to be submited in a popup window. Do it and you should see and access the shared folder.

Reference links: 
https://askubuntu.com/questions/259207/how-do-i-access-a-password-protected-share-from-nautilus
https://www.cyberciti.biz/tips/browse-a-samba-or-ms-windows-share-in-nautilus.html
