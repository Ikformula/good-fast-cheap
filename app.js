
app = new Vue({
    el: '#root',
    data: {
        a: 'Good',
        b: 'Fast',
        result: 'Expensive',
    },
    methods: {
        btnClick: function(c){
            if(this.a !== c && this.b !== c) {
                this.a = this.b;
                this.b = c;
            }

        }
    },

    computed: {
        theResult: function(){
            if(this.a == 'Good' && this.b == 'Fast'){
                $('#Good').removeClass('btn-outline-info').addClass('btn-info');
                $('#Fast').removeClass('btn-outline-danger').addClass('btn-danger');
                $('#Cheap').removeClass('btn-warning').addClass('btn-outline-warning');
                return 'Expensive';
            }else if(this.a == 'Fast' && this.b == 'Cheap'){
                $('#Fast').removeClass('btn-outline-danger').addClass('btn-danger');
                $('#Cheap').removeClass('btn-outline-warning').addClass('btn-warning');
                $('#Good').removeClass('btn-info').addClass('btn-outline-info');
                return 'Mediocre';
            }else if(this.a == 'Cheap' && this.b == 'Good'){
                $('#Good').removeClass('btn-outline-info').addClass('btn-info');
                $('#Cheap').removeClass('btn-outline-warning').addClass('btn-warning');
                $('#Fast').removeClass('btn-danger').addClass('btn-outline-danger');
                return 'Slow';
            }
        }
    }
})