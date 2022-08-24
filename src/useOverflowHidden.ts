import React from 'react';

export function useOverflowHidden(isShown: boolean) {
	React.useEffect(() => {
		document.body.style.overflow = isShown ? 'hidden' : '';
	}, [isShown]);
}
