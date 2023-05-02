#!/bin/bash

connected=$(xrandr | grep 'HDMI-1-0 connected')

# подключен ли монитор
if [[ -z "$connected" ]]; then
    # выключим отображение, если вдруг оно активно (просто был выдернут шнур)
    xrandr --output HDMI-1-0 --off
else
	# монитор подключен
	# проверим отображается ли он
	displayed=$(xrandr | grep 'HDMI-1-0 connected 1920x1080+1920+0')

	if [[ -z "$displayed" ]]; then
		# не отображается, включим отображение
		xrandr --output HDMI-1-0 --mode 1920x1080 --pos 1920x0
	else
		# отображается, выключим отображение
		xrandr --output HDMI-1-0 --off
	fi
fi

