````html
<div id='main'>


        <button v-on:click="generate('hi')">Generate List</button>
</div>
<script>
new Vue({
    el: '#main',
    data: { 
        prefix: 'transcript',
        suffix: 0;
    },
    methods: {
        generate: function(message){
            doc.init({
                announcement: {
                    type: 'success', // warning | danger | success | primary
                    html: message
                }
            })
        }
    }
})
</script>
````