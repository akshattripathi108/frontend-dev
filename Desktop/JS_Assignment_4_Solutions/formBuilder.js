class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }
    createForm() {
        var html = "";
        for (var i = 0; i < this.fields.length; i++) {
            html += "<label>" + this.fields[i].label + "</label>";
            html += "<input type='" + this.fields[i].type + "' id='" + this.fields[i].label + "'>";
        }
        return html;
    }
    getFormData() {
        var data = {};
        for (var i = 0; i < this.fields.length; i++) {
            var id = this.fields[i].label;
            var el = { value: "" };
            data[id] = el.value;
        }
        return data;
    }
}
var fb = new FormBuilder([{type:"text",label:"Username"},{type:"password",label:"Password"}]);
console.log(fb.createForm());
console.log(fb.getFormData());
