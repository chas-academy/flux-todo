let __count = 0;

const Incrementer = {
    increment() {
        return `id-${__count++}`
    }
}

export default Incrementer;