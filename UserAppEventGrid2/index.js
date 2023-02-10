module.exports = async function (context, event) {
    const { data } = event
    context.log(event.subject)
    context.log(data.a - data.b)
};