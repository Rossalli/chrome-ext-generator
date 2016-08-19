var utils = {
    random: function random(n) {
        return Math.round(Math.random() * n);
    },
    mod: function mod(dividend, divisor) {
        return Math.round(dividend - (Math.floor(dividend / divisor) * divisor));
    },

    sumNumbers: function sumNumbers(numbers) {
        return numbers.slice().reverse().reduce(function (a, b, i) {
            return a + (b * (i + 2));
        }, 0);
    },
    defaultMask: 'xxx.xxx.xxx-xx',
    defaultPlaceholder: 'x',
    gerarCPF: function (mask, placeholder) {
        'use strict';
        var numbers = [];
        var last;
        var result;

        while (numbers.length < 9) {
            numbers[numbers.length] = this.random(9);
        }

        while (numbers.length < 11) {
            last = 11 - this.mod(this.sumNumbers(numbers), 11);

            if (last >= 10) {
                last = 0;
            }

            numbers[numbers.length] = last;
        }

        result = numbers.join('');

        if (typeof mask === 'boolean' && mask) {
            mask = this.defaultMask;
        }

        if (mask && mask.length) {
            if (typeof placeholder === 'undefined') {
                placeholder = this.defaultPlaceholder;
            }

            if (mask.match(new RegExp(placeholder, 'g')).length < 11) {
                throw new Error('The CPF mask should contain 11 placeholders');
            }

            var placeholderRegex = new RegExp(placeholder);
            var i = -1;

            while (++i < 11) {
                mask = mask.replace(placeholderRegex, result[i]);
            }

            result = mask;
        }

        return result;
    }
};