# How install Nexcloud as a local container in proxmox with remote access
This is the video I follow up to get it running
https://www.youtube.com/watch?v=427LxkdDzQs

After this, remember to set up cloudflare for the asociated container IP address, just like explained before
https://github.com/danyelous/Proxmox/blob/main/README.md

Maybe you'll need to add trusted domains to access Nextcloud, or even change the HTTPS protocol. Here are the settings:
Add trusted domains
$ sudo snap run nextcloud.occ config:system:set trusted_domains 1 --value=your.fancy.domain

Always restart service afer any update
$ sudo snap restart nextcloud

Check trusted domains (replace 1 with the domain ID)
$ sudo snap run nextcloud.occ config:system:get trusted_domains 1


Overwrite HTTPS protocol
$ sudo nextcloud.occ config:system:set overwriteprotocol --value 'https'
