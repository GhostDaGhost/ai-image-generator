/**
    * A function that is triggered to get a number between the `min` and the `max`.
    * @param min `number` - The lowest number it could go down to.
    * @param max `number` - The biggest number it could go up to.
    * @returns `number` - The generated number between the `min` and the `max`.
    * @example GetRandomIntInRange(1, 10);
*/
export const GetRandomIntInRange = (min: number = 1, max: number = 2) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
