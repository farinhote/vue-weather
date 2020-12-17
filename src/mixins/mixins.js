export default {
    methods: {
        convertTemp: function (temp, system = "metric") {
            const celsius = temp - 273.15;
            const fahrenheit = celsius * 9 / 5 + 32;

            return system === "metric" ? celsius : fahrenheit;
        }
    }
}
