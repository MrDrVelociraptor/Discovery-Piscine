if [ $# -gt 0 ]
then
	for arg in $@
	do
		mkdir -p ex"${arg}"
	done
else
	echo "No arguments supplied"
fi
