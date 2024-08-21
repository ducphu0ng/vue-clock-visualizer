import { ref } from "vue";

export default function useCurrentTime() {
    const currentTime = ref(new Date());
    const updateCurrentTime = () => {
        currentTime.value = new Date();
        requestAnimationFrame(updateCurrentTime);
    };
    updateCurrentTime();

    return {
        currentTime,
    };
};