export const className = (...classes: (string | undefined | null)[]): string => {
    return classes.filter(Boolean).join(' ');
};
