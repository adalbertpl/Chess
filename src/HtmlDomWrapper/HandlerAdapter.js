export default class HandlerAdapter {
    static addOnClickHandler(root, handler) {
        root.onclick = function() {
            var x = event.clientX;
            var y = event.clientY;
            handler({
                x: x,
                y: y
            });            
        }
    }
}