const ccRecord = () => {
  let record  ={
    name: document.getElementById('holderName').value,
    'credit card number': document.getElementById('ccNum').value,
    csc: document.getElementById('csc').value
  }
  return console.log(record.name, record['credit card number'], record.csc);
}

const recordBtn = document.getElementById('recordBtn').addEventListener('click', ccRecord);
