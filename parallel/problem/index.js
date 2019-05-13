const { taskOne, taskTwo, getArray } = require('./tasks');

// EXECUTING TWO TASKS IN PARALLEL
async function main() {

  try {
    console.time('tasks time');
    const array = await getArray()
    console.timeEnd('tasks time <<SEQUENCIAL>>');

    return array.map( async e=>{
      console.time('tasks time');
      const data = await Promise.all([taskOne(), taskTwo()]);
      console.timeEnd('Promise.all <<PARALLEL>>');

      return console.log({
        e:e,
        data1:data[0],
        data2:data[1]
      });          
    })

  }
  catch (e) {
    console.log(e);
  }

}

main();
