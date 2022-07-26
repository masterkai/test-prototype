const formValue = {
  ConferenceName: 'test',
  ApplyUnit: 'test',
  ApplyPerson: 'test',
  Contact: 'test',
  ApplyAddr: 'test',
  IDNumber: 'A123456789',
  TelPhone: '0910000333',
  Email: 'test@test.com',
  MobilePhone: '0910000333',
  Fax: '',
  Facilitys: [
    '投影機',
    '無線麥克風（每副）',
    'DVD放影機',
  ],
  ApplyReason: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
  RoomID: 1,
  dates: [
    {
      RoomID: 1,
      DateApplied: '2022-08-03',
      DateFactor: 1,
      apply: true,
      checked: true,
    },
    {
      RoomID: 1,
      DateApplied: '2022-08-04',
      DateFactor: 1,
      apply: true,
      checked: true,
    },
    {
      RoomID: 1,
      DateApplied: '2022-08-04',
      DateFactor: 2,
      apply: true,
      checked: true,
    },
    {
      RoomID: 1,
      DateApplied: '2022-08-05',
      DateFactor: 1,
      apply: true,
      checked: true,
    },
    {
      RoomID: 1,
      DateApplied: '2022-08-05',
      DateFactor: 2,
      apply: true,
      checked: true,
    },
    {
      RoomID: 1,
      DateApplied: '2022-08-05',
      DateFactor: 3,
      apply: true,
      checked: true,
    },
  ],
  RoomFee: 0,
};

function JudgingRentalDatesAndIndividualTotals(arr) {
  const tax = 1.05
  const eachDate = specificDates(arr)//?
  function specificDates(arr) {
    return arr.map(item => item.DateApplied)
      .reduce((acc, category) => {
        // check if this is an existing category
        const existingCategory = acc[category]
        // if it is, increment by one
        if (existingCategory) {
          existingCategory.count += 1
        } else {
          // Otherwise, create a new entry in our acc and set it to one
          acc[category] = {
            count: 1
          }
        }
        return acc
      }, {})

  }

  function eachTotal(obj) {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
      if (value.count === 3) {
        result[key] = Math.floor((2 * 5500) * tax)
      } else {
        result[key] = Math.floor((value.count * 5500) * tax)
      }
    }
    return result
  }

  const eachDateTotal = eachTotal(eachDate)

  function finalTotal(obj) {
    let total = 0
    for (const value of Object.values(obj)) {
      total += value
    }
    return total
  }

  return {finalTotal: finalTotal(eachDateTotal), eachTotal:eachDateTotal}

}

JudgingRentalDatesAndIndividualTotals(formValue.dates)//?
