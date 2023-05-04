#!/bin/bash

numlockx on &
setxkbmap -model pc105 -layout us,ua -option grp:alt_shift_toggle &
/home/arfors/.dwm/bar.sh &
picom --experimental-backends --xrender-sync-fence &
firefox &
telegram-desktop &
/home/arfors/.dwm/monitor.sh &
/home/arfors/.dwm/wallpapers &
