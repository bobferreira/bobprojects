package bob.sideshow.ems;

import bob.sideshow.ems.entity.Employee;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "bob.sideshow.ems.repository")
@EntityScan(basePackages = "bob.sideshow.ems.entity")
public class EmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);

		System.out.println("APP RODANDO");
	}

}
