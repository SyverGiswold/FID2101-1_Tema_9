<script>
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<slot />

<style>
  @import "../reset.css";
  @import "../variable.css";
  @import "../style.css";
  @import "../animation.css";
</style>