import { writable } from 'svelte/store';

export type AppWindow = {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  x: number;
  y: number;
};

function createOSState() {
  const { subscribe, set, update } = writable<{
    windows: AppWindow[];
    activeWindowId: string | null;
    highestZIndex: number;
  }>({
    windows: [],
    activeWindowId: null,
    highestZIndex: 10,
  });

  return {
    subscribe,
    openWindow: (id: string, title: string, initialX = 50, initialY = 50) => update(state => {
      const existing = state.windows.find(w => w.id === id);
      const newZ = state.highestZIndex + 1;

      if (existing) {
        return {
          ...state,
          windows: state.windows.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: newZ } : w),
          activeWindowId: id,
          highestZIndex: newZ,
        };
      }

      return {
        ...state,
        windows: [...state.windows, { id, title, isOpen: true, isMinimized: false, zIndex: newZ, x: initialX, y: initialY }],
        activeWindowId: id,
        highestZIndex: newZ,
      };
    }),
    closeWindow: (id: string) => update(state => ({
      ...state,
      windows: state.windows.map(w => w.id === id ? { ...w, isOpen: false } : w),
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId
    })),
    focusWindow: (id: string) => update(state => {
      const newZ = state.highestZIndex + 1;
      return {
        ...state,
        windows: state.windows.map(w => w.id === id ? { ...w, zIndex: newZ, isMinimized: false } : w),
        activeWindowId: id,
        highestZIndex: newZ,
      };
    }),
    updateWindowPosition: (id: string, x: number, y: number) => update(state => ({
      ...state,
      windows: state.windows.map(w => w.id === id ? { ...w, x, y } : w)
    }))
  };
}

export const osState = createOSState();
