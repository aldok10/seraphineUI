export function draggable(node: HTMLElement, params: { id: string; updatePosition: (id: string, x: number, y: number) => void; handleFocus: (id: string) => void }) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialNodeX = 0;
  let initialNodeY = 0;

  function handlePointerDown(e: PointerEvent) {
    const target = e.target as HTMLElement;

    // Trigger focus whenever the window is clicked
    params.handleFocus(params.id);

    // Only drag if clicking the title bar
    if (target.closest('.title-bar') && !target.closest('.window-control-btn')) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialNodeX = node.offsetLeft;
      initialNodeY = node.offsetTop;

      node.setPointerCapture(e.pointerId);
    }
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Apply boundaries (optional, simple implementation)
    let newX = initialNodeX + dx;
    let newY = initialNodeY + dy;

    params.updatePosition(params.id, newX, newY);

    // Optimistic UI update
    node.style.left = `${newX}px`;
    node.style.top = `${newY}px`;
  }

  function handlePointerUp(e: PointerEvent) {
    isDragging = false;
    if (node.hasPointerCapture(e.pointerId)) {
        node.releasePointerCapture(e.pointerId);
    }
  }

  node.addEventListener('pointerdown', handlePointerDown);
  node.addEventListener('pointermove', handlePointerMove);
  node.addEventListener('pointerup', handlePointerUp);

  return {
    destroy() {
      node.removeEventListener('pointerdown', handlePointerDown);
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerup', handlePointerUp);
    }
  };
}
