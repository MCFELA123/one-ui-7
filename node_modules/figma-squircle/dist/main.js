function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "getSvgPath", () => $055fc2dc68bf6390$export$4d0751d7849c93f6);
function $6007d06585d4549f$export$3d870b97f7a56ca3({ topLeftCornerRadius: topLeftCornerRadius , topRightCornerRadius: topRightCornerRadius , bottomRightCornerRadius: bottomRightCornerRadius , bottomLeftCornerRadius: bottomLeftCornerRadius , width: width , height: height  }) {
    const roundingAndSmoothingBudgetMap = {
        topLeft: -1,
        topRight: -1,
        bottomLeft: -1,
        bottomRight: -1
    };
    const cornerRadiusMap = {
        topLeft: topLeftCornerRadius,
        topRight: topRightCornerRadius,
        bottomLeft: bottomLeftCornerRadius,
        bottomRight: bottomRightCornerRadius
    };
    Object.entries(cornerRadiusMap)// Let the bigger corners choose first
    .sort(([, radius1], [, radius2])=>{
        return radius2 - radius1;
    }).forEach(([cornerName, radius])=>{
        const corner = cornerName;
        const adjacents = $6007d06585d4549f$var$adjacentsByCorner[corner];
        // Look at the 2 adjacent sides, figure out how much space we can have on both sides,
        // then take the smaller one
        const budget = Math.min(...adjacents.map((adjacent)=>{
            const adjacentCornerRadius = cornerRadiusMap[adjacent.corner];
            if (radius === 0 && adjacentCornerRadius === 0) return 0;
            const adjacentCornerBudget = roundingAndSmoothingBudgetMap[adjacent.corner];
            const sideLength = adjacent.side === "top" || adjacent.side === "bottom" ? width : height;
            // If the adjacent corner's already been given the rounding and smoothing budget,
            // we'll just take the rest
            if (adjacentCornerBudget >= 0) return sideLength - roundingAndSmoothingBudgetMap[adjacent.corner];
            else return radius / (radius + adjacentCornerRadius) * sideLength;
        }));
        roundingAndSmoothingBudgetMap[corner] = budget;
        cornerRadiusMap[corner] = Math.min(radius, budget);
    });
    return {
        topLeft: {
            radius: cornerRadiusMap.topLeft,
            roundingAndSmoothingBudget: roundingAndSmoothingBudgetMap.topLeft
        },
        topRight: {
            radius: cornerRadiusMap.topRight,
            roundingAndSmoothingBudget: roundingAndSmoothingBudgetMap.topRight
        },
        bottomLeft: {
            radius: cornerRadiusMap.bottomLeft,
            roundingAndSmoothingBudget: roundingAndSmoothingBudgetMap.bottomLeft
        },
        bottomRight: {
            radius: cornerRadiusMap.bottomRight,
            roundingAndSmoothingBudget: roundingAndSmoothingBudgetMap.bottomRight
        }
    };
}
const $6007d06585d4549f$var$adjacentsByCorner = {
    topLeft: [
        {
            corner: "topRight",
            side: "top"
        },
        {
            corner: "bottomLeft",
            side: "left"
        }, 
    ],
    topRight: [
        {
            corner: "topLeft",
            side: "top"
        },
        {
            corner: "bottomRight",
            side: "right"
        }, 
    ],
    bottomLeft: [
        {
            corner: "bottomRight",
            side: "bottom"
        },
        {
            corner: "topLeft",
            side: "left"
        }, 
    ],
    bottomRight: [
        {
            corner: "bottomLeft",
            side: "bottom"
        },
        {
            corner: "topRight",
            side: "right"
        }, 
    ]
};


function $0e37b897fbc5acd3$export$a2f9a538d41e7bd0({ cornerRadius: cornerRadius , cornerSmoothing: cornerSmoothing , preserveSmoothing: preserveSmoothing , roundingAndSmoothingBudget: roundingAndSmoothingBudget  }) {
    // From figure 12.2 in the article
    // p = (1 + cornerSmoothing) * q
    // in this case q = R because theta = 90deg
    let p = (1 + cornerSmoothing) * cornerRadius;
    // When there's not enough space left (p > roundingAndSmoothingBudget), there are 2 options:
    //
    // 1. What figma's currently doing: limit the smoothing value to make sure p <= roundingAndSmoothingBudget
    // But what this means is that at some point when cornerRadius is large enough,
    // increasing the smoothing value wouldn't do anything
    //
    // 2. Keep the original smoothing value and use it to calculate the bezier curve normally,
    // then adjust the control points to achieve similar curvature profile
    //
    // preserveSmoothing is a new option I added
    //
    // If preserveSmoothing is on then we'll just keep using the original smoothing value
    // and adjust the bezier curve later
    if (!preserveSmoothing) {
        const maxCornerSmoothing = roundingAndSmoothingBudget / cornerRadius - 1;
        cornerSmoothing = Math.min(cornerSmoothing, maxCornerSmoothing);
        p = Math.min(p, roundingAndSmoothingBudget);
    }
    // In a normal rounded rectangle (cornerSmoothing = 0), this is 90
    // The larger the smoothing, the smaller the arc
    const arcMeasure = 90 * (1 - cornerSmoothing);
    const arcSectionLength = Math.sin($0e37b897fbc5acd3$var$toRadians(arcMeasure / 2)) * cornerRadius * Math.sqrt(2);
    // In the article this is the distance between 2 control points: P3 and P4
    const angleAlpha = (90 - arcMeasure) / 2;
    const p3ToP4Distance = cornerRadius * Math.tan($0e37b897fbc5acd3$var$toRadians(angleAlpha / 2));
    // a, b, c and d are from figure 11.1 in the article
    const angleBeta = 45 * cornerSmoothing;
    const c = p3ToP4Distance * Math.cos($0e37b897fbc5acd3$var$toRadians(angleBeta));
    const d = c * Math.tan($0e37b897fbc5acd3$var$toRadians(angleBeta));
    let b = (p - arcSectionLength - c - d) / 3;
    let a = 2 * b;
    // Adjust the P1 and P2 control points if there's not enough space left
    if (preserveSmoothing && p > roundingAndSmoothingBudget) {
        const p1ToP3MaxDistance = roundingAndSmoothingBudget - d - arcSectionLength - c;
        // Try to maintain some distance between P1 and P2 so the curve wouldn't look weird
        const minA = p1ToP3MaxDistance / 6;
        const maxB = p1ToP3MaxDistance - minA;
        b = Math.min(b, maxB);
        a = p1ToP3MaxDistance - b;
        p = Math.min(p, roundingAndSmoothingBudget);
    }
    return {
        a: a,
        b: b,
        c: c,
        d: d,
        p: p,
        arcSectionLength: arcSectionLength,
        cornerRadius: cornerRadius
    };
}
function $0e37b897fbc5acd3$export$a4b62df84ac6ef86({ width: width , height: height , topLeftPathParams: topLeftPathParams , topRightPathParams: topRightPathParams , bottomLeftPathParams: bottomLeftPathParams , bottomRightPathParams: bottomRightPathParams  }) {
    return `
    M ${width - topRightPathParams.p} 0
    ${$0e37b897fbc5acd3$var$drawTopRightPath(topRightPathParams)}
    L ${width} ${height - bottomRightPathParams.p}
    ${$0e37b897fbc5acd3$var$drawBottomRightPath(bottomRightPathParams)}
    L ${bottomLeftPathParams.p} ${height}
    ${$0e37b897fbc5acd3$var$drawBottomLeftPath(bottomLeftPathParams)}
    L 0 ${topLeftPathParams.p}
    ${$0e37b897fbc5acd3$var$drawTopLeftPath(topLeftPathParams)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim();
}
function $0e37b897fbc5acd3$var$drawTopRightPath({ cornerRadius: cornerRadius , a: a , b: b , c: c , d: d , p: p , arcSectionLength: arcSectionLength  }) {
    if (cornerRadius) return $0e37b897fbc5acd3$var$rounded`
    c ${a} 0 ${a + b} 0 ${a + b + c} ${d}
    a ${cornerRadius} ${cornerRadius} 0 0 1 ${arcSectionLength} ${arcSectionLength}
    c ${d} ${c}
        ${d} ${b + c}
        ${d} ${a + b + c}`;
    else return $0e37b897fbc5acd3$var$rounded`l ${p} 0`;
}
function $0e37b897fbc5acd3$var$drawBottomRightPath({ cornerRadius: cornerRadius , a: a , b: b , c: c , d: d , p: p , arcSectionLength: arcSectionLength  }) {
    if (cornerRadius) return $0e37b897fbc5acd3$var$rounded`
    c 0 ${a}
      0 ${a + b}
      ${-d} ${a + b + c}
    a ${cornerRadius} ${cornerRadius} 0 0 1 -${arcSectionLength} ${arcSectionLength}
    c ${-c} ${d}
      ${-(b + c)} ${d}
      ${-(a + b + c)} ${d}`;
    else return $0e37b897fbc5acd3$var$rounded`l 0 ${p}`;
}
function $0e37b897fbc5acd3$var$drawBottomLeftPath({ cornerRadius: cornerRadius , a: a , b: b , c: c , d: d , p: p , arcSectionLength: arcSectionLength  }) {
    if (cornerRadius) return $0e37b897fbc5acd3$var$rounded`
    c ${-a} 0
      ${-(a + b)} 0
      ${-(a + b + c)} ${-d}
    a ${cornerRadius} ${cornerRadius} 0 0 1 -${arcSectionLength} -${arcSectionLength}
    c ${-d} ${-c}
      ${-d} ${-(b + c)}
      ${-d} ${-(a + b + c)}`;
    else return $0e37b897fbc5acd3$var$rounded`l ${-p} 0`;
}
function $0e37b897fbc5acd3$var$drawTopLeftPath({ cornerRadius: cornerRadius , a: a , b: b , c: c , d: d , p: p , arcSectionLength: arcSectionLength  }) {
    if (cornerRadius) return $0e37b897fbc5acd3$var$rounded`
    c 0 ${-a}
      0 ${-(a + b)}
      ${d} ${-(a + b + c)}
    a ${cornerRadius} ${cornerRadius} 0 0 1 ${arcSectionLength} -${arcSectionLength}
    c ${c} ${-d}
      ${b + c} ${-d}
      ${a + b + c} ${-d}`;
    else return $0e37b897fbc5acd3$var$rounded`l 0 ${-p}`;
}
function $0e37b897fbc5acd3$var$toRadians(degrees) {
    return degrees * Math.PI / 180;
}
function $0e37b897fbc5acd3$var$rounded(strings, ...values) {
    return strings.reduce((acc, str, i)=>{
        let value = values[i];
        if (typeof value === "number") return acc + str + value.toFixed(4);
        else return acc + str + (value ?? "");
    }, "");
}


function $055fc2dc68bf6390$export$4d0751d7849c93f6({ cornerRadius: cornerRadius = 0 , topLeftCornerRadius: topLeftCornerRadius , topRightCornerRadius: topRightCornerRadius , bottomRightCornerRadius: bottomRightCornerRadius , bottomLeftCornerRadius: bottomLeftCornerRadius , cornerSmoothing: cornerSmoothing , width: width , height: height , preserveSmoothing: preserveSmoothing = false  }) {
    topLeftCornerRadius = topLeftCornerRadius ?? cornerRadius;
    topRightCornerRadius = topRightCornerRadius ?? cornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius ?? cornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius ?? cornerRadius;
    if (topLeftCornerRadius === topRightCornerRadius && topRightCornerRadius === bottomRightCornerRadius && bottomRightCornerRadius === bottomLeftCornerRadius && bottomLeftCornerRadius === topLeftCornerRadius) {
        const roundingAndSmoothingBudget = Math.min(width, height) / 2;
        const cornerRadius = Math.min(topLeftCornerRadius, roundingAndSmoothingBudget);
        const pathParams = (0, $0e37b897fbc5acd3$export$a2f9a538d41e7bd0)({
            cornerRadius: cornerRadius,
            cornerSmoothing: cornerSmoothing,
            preserveSmoothing: preserveSmoothing,
            roundingAndSmoothingBudget: roundingAndSmoothingBudget
        });
        return (0, $0e37b897fbc5acd3$export$a4b62df84ac6ef86)({
            width: width,
            height: height,
            topLeftPathParams: pathParams,
            topRightPathParams: pathParams,
            bottomLeftPathParams: pathParams,
            bottomRightPathParams: pathParams
        });
    }
    const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $6007d06585d4549f$export$3d870b97f7a56ca3)({
        topLeftCornerRadius: topLeftCornerRadius,
        topRightCornerRadius: topRightCornerRadius,
        bottomRightCornerRadius: bottomRightCornerRadius,
        bottomLeftCornerRadius: bottomLeftCornerRadius,
        width: width,
        height: height
    });
    return (0, $0e37b897fbc5acd3$export$a4b62df84ac6ef86)({
        width: width,
        height: height,
        topLeftPathParams: (0, $0e37b897fbc5acd3$export$a2f9a538d41e7bd0)({
            cornerSmoothing: cornerSmoothing,
            preserveSmoothing: preserveSmoothing,
            cornerRadius: topLeft.radius,
            roundingAndSmoothingBudget: topLeft.roundingAndSmoothingBudget
        }),
        topRightPathParams: (0, $0e37b897fbc5acd3$export$a2f9a538d41e7bd0)({
            cornerSmoothing: cornerSmoothing,
            preserveSmoothing: preserveSmoothing,
            cornerRadius: topRight.radius,
            roundingAndSmoothingBudget: topRight.roundingAndSmoothingBudget
        }),
        bottomRightPathParams: (0, $0e37b897fbc5acd3$export$a2f9a538d41e7bd0)({
            cornerSmoothing: cornerSmoothing,
            preserveSmoothing: preserveSmoothing,
            cornerRadius: bottomRight.radius,
            roundingAndSmoothingBudget: bottomRight.roundingAndSmoothingBudget
        }),
        bottomLeftPathParams: (0, $0e37b897fbc5acd3$export$a2f9a538d41e7bd0)({
            cornerSmoothing: cornerSmoothing,
            preserveSmoothing: preserveSmoothing,
            cornerRadius: bottomLeft.radius,
            roundingAndSmoothingBudget: bottomLeft.roundingAndSmoothingBudget
        })
    });
}


//# sourceMappingURL=main.js.map
