async function logs() {
    await exec();
};

async function exec() {    
    let i = 100;
    while(i > 0){
        console.log('My name is ronak dey ' + i );
        --i;
    }
    console.log('done')
}

logs();
