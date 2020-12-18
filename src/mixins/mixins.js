export default {
    methods: {
        convertTemp: function (temp, system = "metric", precision = 2) {
            if (temp) {
                const round = (number) => Number(Math.round(number + `e${precision}`) + `e-${precision}`);
                const celsius = round(temp - 273.15);
                const fahrenheit = round(celsius * 9 / 5 + 32);

                return system === "metric" ? celsius : fahrenheit;
            }
        }
    }
}
