<div align="center">

# 🟡 FIX 🟡

</div>

## 1

🟢 Verificar as duas chamadas assíncronas, que estão sendo realizadas `return this.httpClient.get<Course[]>` em **Courses.Service.ts**

-> Para realizar a correção a solução foi ao invés de usar o operadot `cathError`, usar o `tap`.
substituindo

    `this.courses$ = this.coursesServices.list().pipe(
      catchError((error) => {
        this.onError("Erro ao carregar ");
        return of([]);
      })
    );

por

    this.courses$ = this.coursesServices.list().pipe(
     tap({
       error: (error) => {
         this.onError("Erro ao carregar");
       },
     })
    );

___



## 
---
