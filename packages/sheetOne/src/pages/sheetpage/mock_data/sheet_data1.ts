const create_data = () => {
  const tableData = Array<any>;
  for (let i = 1; i <= 100; i++) {
    tableData.push({
      id: i,
      data1: `Data 1-${i}`,
      data2: `Data 2-${i}`,
      data3: `Data 3-${i}`,
    });
  }

  return tableData;
};
