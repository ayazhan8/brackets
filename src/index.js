module.exports = function check(str, bracketsConfig) {
    var stack = new Array();

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] == bracketsConfig[j][0] &&
                str[i] == bracketsConfig[j][1] &&
                str[i] == stack[stack.length - 1]
            )
                stack.pop();
            else if (str[i] == bracketsConfig[j][0]) stack.push(str[i]);
            else if (str[i] == bracketsConfig[j][1])
                if (stack.pop() != bracketsConfig[j][0]) return false;
        }
    }

    return stack.length > 0 ? false : true;
};
