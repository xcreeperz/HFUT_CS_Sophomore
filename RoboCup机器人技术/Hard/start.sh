#!/bin/bash
#=======================================================
# Agent2D-3.1.0 start script
# RoboCup2D @ Anhui Unversity of Technology
# Bugs or Suggestions please mail to guofeng1208@163.com
#=======================================================


if [ -z "$LD_LIBRARY_PATH" ]
then
	LD_LIBRARY_PATH=.
else
	LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
fi

export LD_LIBRARY_PATH


host="localhost"
port=6000
coach_port=6002
teamname="Hard"

player="./Base_Player"
coach="./Base_Coach"

config="./data/player.conf"
coach_config="./data/coach.conf"
config_dir="./data/formations-dt"

opt="--player-config ${config} --config_dir ${config_dir}"
coachopt="--coach-config ${coach_config} --use_team_graphic on"


sleeptime=0.5
posnum=0
count=12


usage()
{
cat << EOF
Usage: $0  [options]
    
Options:
	-help               Show help infomation
	-h      (IP)        Special server host address
	-p      (port)      Special the server port number of player
	-t      (Name)      Special teamname
	-c      (number)    Special player amount(start with 1)
	-n      (number)    Special player position number(Not uniform)
EOF
}


if [ $# -eq 1 -a "$1" = "-help" ]
then
    usage
    exit 0
fi


while getopts "h:p:t:c:n:" flag
do
    case "$flag" in
    h)
        host=$OPTARG
    ;;
    p)
        port=$OPTARG
        coach_port=$((port+2))
    ;;
    t)
        teamname=$OPTARG
    ;;
    c)
        count=$OPTARG
    ;;
    n)
        posnum=$OPTARG
    ;;
    *)
    	echo "Error cmdline option"
    	usage
    	exit 1
    esac
done


opt="${opt} -h ${host} -p ${port} -t ${teamname}"
coachopt="${coachopt} -h ${host} -p ${coach_port} -t ${teamname}"


# the limit of core dump file size 
ulimit -f unlimited


if [ $posnum -ne 0 ]
then
	case $posnum in
	1)
		${player} ${opt} -g -n $posnum &
	;;
	12)
		${coach} ${coachopt}  &
	;;
	*)
		${player} ${opt} -n $posnum  &
	;;
	esac
	
	exit 0
fi


i=1
	
while [ ${i} -le ${count} ]
do
	case ${i} in
	1)
		echo "team $teamname: Start Player $i"
		${player} ${opt} -g &
	;;
	12)
		echo "team $teamname: Start Coach"
		${coach} ${coachopt} &
	;;
	*)
		echo "team $teamname: Start Player $i"
		${player} ${opt} &
	;;
	esac

	sleep $sleeptime
	i=$((i+1))
done

exit 0

