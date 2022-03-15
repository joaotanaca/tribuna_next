const light = {
    red: "#FF3B30",
    orange: "#FF9500",
    yellow: "#FFCC00",
    green: "#34C759",
    teal: "#5AC8FA",
    blue: "#007AFF",
    indigo: "#5856D6",
    purple: "#AF52DE",
    pink: "#FF2D55",
    gray1: "#8E8E93",
    gray2: "#AEAEB2",
    gray3: "#C7C7CC",
    gray4: "#D1D1D6",
    gray5: "#E5E5EA",
    gray6: "#F2F2F7",
};

const dark = {
    red: "#FF453A",
    orange: "#FF9F0A",
    yellow: "#FFD60A",
    green: "#32D74B",
    teal: "#64D2FF",
    blue: "#0A84FF",
    indigo: "#5E5CE6",
    purple: "#BF5AF2",
    pink: "#FF2D55",
    gray1: "#8E8E93",
    gray2: "#636366",
    gray3: "#48484A",
    gray4: "#3A3A3C",
    gray5: "#1C1C1E",
    gray6: "#1C1C1E",
};
export const theme = { dark, light };

export type Theme = typeof dark;

export type ThemeKeys = keyof typeof theme;
