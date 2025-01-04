export interface FigmaSquircleParams {
    cornerRadius?: number;
    topLeftCornerRadius?: number;
    topRightCornerRadius?: number;
    bottomRightCornerRadius?: number;
    bottomLeftCornerRadius?: number;
    cornerSmoothing: number;
    width: number;
    height: number;
    preserveSmoothing?: boolean;
}
export function getSvgPath({ cornerRadius, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, cornerSmoothing, width, height, preserveSmoothing, }: FigmaSquircleParams): string;

//# sourceMappingURL=types.d.ts.map
