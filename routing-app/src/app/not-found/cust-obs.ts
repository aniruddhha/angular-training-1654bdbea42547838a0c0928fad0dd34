import { Observable } from "rxjs";

export function custObs(): Observable<number> {
    return new Observable(em => {
        // e.g. 
        // reading local storage after every 1 min

        for (let i = 0; i < 1000; i++) {
            em.next(i) // sending partial complete results

            if(i == 999) 
                em.error(new Error('reached limit')) // sending error event
        }
        em.complete() // sending processing complete event
    })
}