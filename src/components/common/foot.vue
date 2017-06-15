<style lang="scss">
#foot {
    width: 90%;
    position: absolute;
    margin: 0;
    padding: 5%;
    background-color: black;
    color: white;
    ul {
        width: 100%;
        padding: 0;
        margin: 0;
        li {
            font-size: .9rem;
            width: 50%;
            padding: 1% 0;
            margin: 0;
        }
    }
}
</style>

<template lang="html">
    <footer id="foot">
        <ul>
            <li>Archer Avenue Studio</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Email</li>
        </ul>
    </footer>
</template>

<script>
export default {
    created: function() {
        console.log('FEETZ');
    }
}
</script>