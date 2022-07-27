strArr = ['mark', 'mary-annJenkinsSmith', 'abrakadabra', 'charlesmansionjunior', 'harry']

function validUserNames(strArr){
	const filterArr = strArr.filter(function(names) {
        console.log(names.length < 10);
	    return names.length < 10;
        });
        return filterArr;
}

