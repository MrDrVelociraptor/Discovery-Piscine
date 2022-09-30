if [ $# -le 3 ]
then
	for arg in $@
	do
		echo "$arg"
	done
else
	echo "No arguments supplied"
fi	
