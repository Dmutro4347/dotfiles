#!/bin/bash

numlockx on &
setxkbmap -model pc105 -layout us,ua -option grp:alt_shift_toggle &

/home/arfors/.dwm/bar.sh &
feh --bg-scale /home/arfors/.wallpapers/wallpaperflare.com_wallpaper.jpg &
picom --animations --animation-window-mass 0.5 --animation-for-open-window zoom --animation-stiffnes 400 --config /home/arfors/.config/picom/picom.conf &

firefox-bin &
telegram-desktop &
