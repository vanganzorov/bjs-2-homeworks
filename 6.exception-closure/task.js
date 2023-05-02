function parseCount(a) {
    if (Number.isNaN(Number.parseFloat(a))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(a);
}

function validateCount(a) {
    try {
        if (parseCount(a) != 0) {
            return parseCount(a);
        }
    }
    catch (error) {
        return error;
    }
}

class Triangle {
    constructor(first, second, third) {

        if (first + second < third) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        else if (second + third < first) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        else if (first + third < second) {
            throw new Error("Треугольник с такими сторонами не существует");
        }


        this.first = first;
        this.second = second;
        this.third = third;
    }

    get perimeter() {
        return this.first + this.second + this.third;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(first, second, third) {
    try {
        return new Triangle(first, second, third)
    }
    catch (error) {
        return {
            get area() {
                return ("Ошибка! Треугольник не существует");
            },

            get perimeter() {
                return ("Ошибка! Треугольник не существует");
            }
        }
    }
}