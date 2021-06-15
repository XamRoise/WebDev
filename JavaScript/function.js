const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id = 100) {
        console.log(`Edit todo ${id}`);
        return `Edit todo ${id}`
    }
}