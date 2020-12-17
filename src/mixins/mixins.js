export default {
    methods: {
        convertTemp: function (temp, system = "metric") {
            const round = (number) => Number(Math.round(number + 'e2') + 'e-2');
            const celsius = round(temp - 273.15);
            const fahrenheit = round(celsius * 9 / 5 + 32);

            return system === "metric" ? celsius : fahrenheit;
        }
    }
}
