<script>
	export let dividerText = "Placeholder"
</script>

<h2>{dividerText}</h2>

<style>
h2{
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
  line-break: anywhere;
}

h2::before {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--secondary-background);
  margin: 0 2rem 0 0;
}
h2::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--secondary-background);
  margin: 0 0 0 2rem;
}

@media screen and (max-width: 650px) {
  h2::before,h2::after {
    display: none;
  }
}
</style>