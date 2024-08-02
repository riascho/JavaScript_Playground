const output = { values: ['abc', 'def', 'ghi'] };
const newOutput = {
    options: output.values.map((i) => {
        return { type: 'TEXT_NUMBER', ...i };
    })
};
console.log('1:\n', newOutput, '\n');

const newOutput2 = { options: output.values, type: 'TEXT_NUMBER' };
console.log('2:\n', newOutput2, '\n');

const newOutput3 = {
    options: output.values.map((i) => {
        return { type: 'TEXT_NUMBER', value: i };
    })
};
console.log('3:\n', newOutput3, '\n');

const str = 'abc';
const spreadStr = [...str];
console.log(spreadStr, '\n');

const str2 = 'abc';
const spreadStr2 = { ...str2 };
console.log(spreadStr2, '\n');

const newObject = { 0: 'x', 1: 'y' };
Object.assign(spreadStr2, newObject); // assigns newObject to spreadStr2
console.log(spreadStr2, '\n');

const arrayOfStrings = ['abc', 'def', 'ghi'];
console.log(
    arrayOfStrings.map((i) => [...i]),
    '\n'
);
