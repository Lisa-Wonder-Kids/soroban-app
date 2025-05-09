<script>
document.querySelectorAll('.bead').forEach(bead => {
  bead.addEventListener('click', toggleBead);
  bead.addEventListener('touchstart', toggleBead, { passive: true });
});

function toggleBead(event) {
  event.preventDefault();
  const bead = event.currentTarget;

  if (!bead.classList.contains('earth')) {
    bead.classList.toggle('active');
    return;
  }

  const allEarth = Array.from(bead.parentElement.children);
  const index = allEarth.indexOf(bead);
  const isActive = bead.classList.contains('active');

  if (!isActive) {
    const allBeforeActive = allEarth.slice(0, index).every(b => b.classList.contains('active'));
    if (allBeforeActive) bead.classList.add('active');
  } else {
    const allAfterInactive = allEarth.slice(index + 1).every(b => !b.classList.contains('active'));
    if (allAfterInactive) bead.classList.remove('active');
  }
}
</script>
