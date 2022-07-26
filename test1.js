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


function specificDates(arr) {
    const dates = [];
    arr.forEach(item => {
        dates.push(item.DateApplied);
    });
    return new Set(dates);//?
}




specificDates(formValue.dates);
