
SEP="┇"
while true; do
	#RAM_USAGE=$( free -h | awk '/Mem:/ { printf(" %5s/%s \n", $3, $2) }' )
	#CPU_USAGE=$( mpstat 1 1 | awk '/Av/ {printf(" %s% \n", $(NF-9))}' )
	LANG=$( xset -q|grep LED| awk '{ if (substr ($10,5,1) == 1) print "[UA]"; else print "[EN]"; }' )
	DATE_TIME=$(date +" %d.%m  $SEP   %H:%M")
	BATT=$(cat /sys/class/power_supply/BAT1/capacity)

	xsetroot -rv -name " $SEP  $LANG  $SEP   $BATT%  $SEP  $DATE_TIME  "
	sleep 1.0
done
