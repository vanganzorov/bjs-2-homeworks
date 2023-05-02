class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, start) {
        if (!time || start === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some((obj) => time === obj.time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        let obj = {
            callback: start,
            time: time,
            canCall: true
        }

        this.alarmCollection.push(obj);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((obj) => time != obj.time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(element => {
                if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
                    element.canCall = false;

                    element.callback();
                }
            }), 1000
        });
    }

    stop() {

        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((obj) => obj.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}