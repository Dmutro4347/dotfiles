#!/usr/bin/env sh

# Terminate already running bar instances
# If all your bars have ipc enabled, you can use 
polybar-msg cmd quit
# Otherwise you can use the nuclear option:
killall -q polybar

# Launch bar1 and bar2
polybar -c /home/arfors/.config/polybar/config.ini
